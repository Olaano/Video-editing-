'use client'

import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { stages, allLessons } from '../data/roadmap'

type Progress = {
  done: string[]
  checkpoints: string[]
  checkpointChecks: string[]
}

type StageStatus = 'proved' | 'ready' | 'current' | 'locked'

const STORAGE_KEY = 'naol-ve-v3'
const OLD_STORAGE_KEY = 'naol-ve-v2'

function getCheckpointId(stageId: string) {
  return `checkpoint-${stageId}`
}

function isYouTube(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url)
    if (parsed.hostname.includes('youtu.be')) return parsed.pathname.slice(1)
    return parsed.searchParams.get('v')
  } catch {
    return null
  }
}

function getStageStatus(index: number, progress: Progress): StageStatus {
  const stage = stages[index]
  const allComplete = stage.lessons.every((lesson) => progress.done.includes(lesson.id))
  const proved = progress.checkpoints.includes(getCheckpointId(stage.id))

  if (proved) return 'proved'
  if (allComplete) return 'ready'
  if (index === 0) return 'current'

  const previous = stages[index - 1]
  return progress.checkpoints.includes(getCheckpointId(previous.id)) ? 'current' : 'locked'
}

export default function Home() {
  const [progress, setProgress] = useState<Progress>({ done: [], checkpoints: [], checkpointChecks: [] })
  const [query, setQuery] = useState('')
  const [activeStage, setActiveStage] = useState('all')
  const [openLesson, setOpenLesson] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed && Array.isArray(parsed.done) && Array.isArray(parsed.checkpoints)) {
          const validLessons = new Set(allLessons.map((lesson) => lesson.id))
          const validCheckpoints = new Set(stages.map((stage) => getCheckpointId(stage.id)))
          const validChecks = new Set(
            stages.flatMap((stage) => stage.checkpoint.selfGradingChecklist.map((_, index) => `${stage.id}:${index}`))
          )

          setProgress({
            done: parsed.done.filter((id: unknown): id is string => typeof id === 'string' && validLessons.has(id)),
            checkpoints: parsed.checkpoints.filter((id: unknown): id is string => typeof id === 'string' && validCheckpoints.has(id)),
            checkpointChecks: Array.isArray(parsed.checkpointChecks)
              ? parsed.checkpointChecks.filter((id: unknown): id is string => typeof id === 'string' && validChecks.has(id))
              : [],
          })
          setLoaded(true)
          return
        }
      }

      const old = localStorage.getItem(OLD_STORAGE_KEY)
      if (old) {
        const oldDone = JSON.parse(old)
        if (Array.isArray(oldDone)) {
          const validLessons = new Set(allLessons.map((lesson) => lesson.id))
          const migrated = { done: oldDone.filter((id: unknown): id is string => typeof id === 'string' && validLessons.has(id)), checkpoints: [], checkpointChecks: [] }
          setProgress(migrated)
          localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated))
        }
      }
    } catch {
      // Ignore malformed local storage.
    }
    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress, loaded])

  const completedLessons = progress.done.length
  const totalLessons = allLessons.length
  const completedStages = progress.checkpoints.filter((id) =>
    stages.some((stage) => id === getCheckpointId(stage.id))
  ).length
  const lessonPercent = totalLessons ? Math.round((completedLessons / totalLessons) * 100) : 0
  const roadmapPercent = stages.length ? Math.round((completedStages / stages.length) * 100) : 0

  const currentStageIndex = stages.findIndex((_, index) => {
    const status = getStageStatus(index, progress)
    return status === 'current' || status === 'ready'
  })
  const currentStage = currentStageIndex >= 0 ? stages[currentStageIndex] : null
  const currentStageStatus = currentStageIndex >= 0 ? getStageStatus(currentStageIndex, progress) : null

  const toggleLesson = (lessonId: string) => {
    setProgress((previous) => {
      const done = previous.done.includes(lessonId)
        ? previous.done.filter((id) => id !== lessonId)
        : [...previous.done, lessonId]
      return { ...previous, done }
    })
  }

  const toggleCheckpointCheck = (stageId: string, checkIndex: number) => {
    const key = `${stageId}:${checkIndex}`
    setProgress((previous) => ({
      ...previous,
      checkpointChecks: previous.checkpointChecks.includes(key)
        ? previous.checkpointChecks.filter((id) => id !== key)
        : [...previous.checkpointChecks, key],
    }))
  }

  const proveStage = (stageId: string) => {
    const index = stages.findIndex((stage) => stage.id === stageId)
    if (index === -1) return
    const stage = stages[index]
    const allComplete = stage.lessons.every((lesson) => progress.done.includes(lesson.id))
    const checksComplete = stage.checkpoint.selfGradingChecklist.every((_, checkIndex) =>
      progress.checkpointChecks.includes(`${stageId}:${checkIndex}`)
    )
    if (!allComplete || !checksComplete) return

    setProgress((previous) => ({
      ...previous,
      checkpoints: previous.checkpoints.includes(getCheckpointId(stageId))
        ? previous.checkpoints
        : [...previous.checkpoints, getCheckpointId(stageId)],
      checkpointChecks: previous.checkpointChecks,
    }))
  }

  const resetProgress = () => {
    if (!window.confirm('Reset all video-editing roadmap progress? This cannot be undone.')) return
    const empty = { done: [], checkpoints: [], checkpointChecks: [] }
    setProgress(empty)
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(OLD_STORAGE_KEY)
    setOpenLesson(null)
  }

  const filteredStages = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return stages
      .map((stage, stageIndex) => {
        const status = getStageStatus(stageIndex, progress)
        const lessons = stage.lessons.filter((lesson) => {
          if (activeStage !== 'all' && activeStage !== stage.id) return false
          if (!normalized) return true
          return [lesson.title, lesson.objective, ...lesson.keyConcepts, lesson.practicalExercise]
            .join(' ')
            .toLowerCase()
            .includes(normalized)
        })
        return { stage, stageIndex, status, lessons }
      })
      .filter((item) => item.lessons.length > 0)
  }, [activeStage, progress, query])

  const scrollToCurrent = () => {
    if (!currentStage) {
      document.getElementById('money')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const allComplete = currentStage.lessons.every((lesson) => progress.done.includes(lesson.id))
    if (allComplete && currentStageStatus === 'ready') {
      document.getElementById(`checkpoint-${currentStage.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }

    const nextLesson = currentStage.lessons.find((lesson) => !progress.done.includes(lesson.id))
    document.getElementById(nextLesson ? `lesson-${nextLesson.id}` : `stage-${currentStage.id}`)
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  return (
    <main>
      <header className="topbar">
        <a href="#top" className="brand">
          <span className="brand-mark">N</span>
          <span>
            NAOL
            <small>VIDEO EDITING ROADMAP</small>
          </span>
        </a>

        <nav>
          <a href="#timeline">Timeline</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#money">Money</a>
        </nav>

        <div className="save-status">
          <span className="save-dot" />
          SAVED LOCALLY
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow">VIDEO EDITING · V3</div>
          <h1>
            Learn editing.
            <br />
            <span>Prove it with real work.</span>
          </h1>
          <p>
            A gated curriculum built around commercial editing judgment, practical exercises,
            client-style checkpoints, and a path toward paid freelance work.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={scrollToCurrent}>Continue roadmap →</button>
            <button className="secondary-button" onClick={resetProgress}>Reset progress</button>
          </div>
        </div>

        <div className="hero-progress">
          <div
            className="progress-ring"
            style={{ '--progress': roadmapPercent } as CSSProperties}
          >
            <div>
              <strong>{roadmapPercent}%</strong>
              <span>ROADMAP COMPLETE</span>
            </div>
          </div>

          <div className="hero-stat-grid">
            <div><strong>{completedLessons}/{totalLessons}</strong><span>LESSONS · {lessonPercent}%</span></div>
            <div><strong>{completedStages}/{stages.length}</strong><span>STAGES PROVED</span></div>
          </div>

          <div className="next-action">
            <span>NEXT ACTION</span>
            <strong>
              {currentStage
                ? currentStageStatus === 'ready'
                  ? 'Complete the client-style stage checkpoint'
                  : currentStage.lessons.find((lesson) => !progress.done.includes(lesson.id))?.title || 'Stage complete'
                : 'Roadmap complete — operate your client pipeline'}
            </strong>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div>
          <span>CURRENT STAGE</span>
          <strong>
            {currentStage
              ? `${String(currentStage.stageNumber).padStart(2, '0')} · ${currentStage.title}${currentStageStatus === 'ready' ? ' · CHECKPOINT READY' : ''}`
              : 'Roadmap complete'}
          </strong>
        </div>
        <div><span>MODEL</span><strong>Learn → Practice → Build → Prove</strong></div>
        <div><span>COURSE</span><strong>7 stages · {totalLessons} lessons</strong></div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading">
          <div><span className="eyebrow">01 · TIMELINE</span><h2>Your editing journey</h2></div>
          <p>Each stage stays locked until its lessons are complete and its client-style checkpoint is proved.</p>
        </div>

        <div className="timeline">
          {stages.map((stage, index) => {
            const status = getStageStatus(index, progress)
            const doneCount = stage.lessons.filter((lesson) => progress.done.includes(lesson.id)).length
            return (
              <button
                key={stage.id}
                className={`timeline-item ${status}`}
                onClick={() => {
                  if (status === 'locked') return
                  document.getElementById(`stage-${stage.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
              >
                <span className="timeline-number">{String(stage.stageNumber).padStart(2, '0')}</span>
                <span className="timeline-line" />
                <span className="timeline-content">
                  <strong>{stage.title}</strong>
                  <small>{doneCount}/{stage.lessons.length} lessons · {status.toUpperCase()}</small>
                </span>
                <span className="timeline-status">{status === 'proved' ? '✓' : status === 'ready' ? '!' : status === 'locked' ? '🔒' : '→'}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="section-heading">
          <div><span className="eyebrow">02 · CURRICULUM</span><h2>Build commercial editing skill</h2></div>
          <p>Every lesson has an objective, theory, a practical drill, and curated material. Every stage ends with a proof gate.</p>
        </div>

        <div className="toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lessons..." />
          <select value={activeStage} onChange={(event) => setActiveStage(event.target.value)}>
            <option value="all">All stages</option>
            {stages.map((stage) => <option key={stage.id} value={stage.id}>{String(stage.stageNumber).padStart(2, '0')} · {stage.title}</option>)}
          </select>
        </div>

        <div className="roadmap">
          {filteredStages.map(({ stage, stageIndex, status, lessons }) => {
            const doneCount = stage.lessons.filter((lesson) => progress.done.includes(lesson.id)).length
            const allComplete = doneCount === stage.lessons.length
            const checksComplete = stage.checkpoint.selfGradingChecklist.every((_, checkIndex) =>
              progress.checkpointChecks.includes(`${stage.id}:${checkIndex}`)
            )

            return (
              <article className={`stage ${status}`} id={`stage-${stage.id}`} key={stage.id}>
                <div className="stage-header">
                  <div className="stage-heading-left">
                    <div className="stage-number">{String(stage.stageNumber).padStart(2, '0')}</div>
                    <div>
                      <div className="stage-label">{status === 'proved' ? 'PROVED' : status === 'ready' ? 'CHECKPOINT READY' : status === 'locked' ? 'LOCKED' : 'CURRENT'}</div>
                      <h3>{stage.title}</h3>
                      <p>{stage.subtitle}</p>
                    </div>
                  </div>
                  <div className="stage-progress"><strong>{doneCount}/{stage.lessons.length}</strong><span>LESSONS</span></div>
                </div>

                <div className="stage-meta">
                  <div><span>GOAL</span><p>{stage.goal}</p></div>
                  <div><span>OUTPUT</span><p>{stage.output}</p></div>
                </div>
                <div className="stage-progress-bar" aria-label={`${doneCount} of ${stage.lessons.length} lessons complete`}>
                  <div style={{ width: `${stage.lessons.length ? (doneCount / stage.lessons.length) * 100 : 0}%` }} />
                </div>

                {status === 'locked' ? (
                  <div className="locked-message">
                    <span>🔒</span>
                    <div><strong>Stage locked</strong><p>Prove the previous stage to unlock this course.</p></div>
                  </div>
                ) : (
                  <>
                    <div className="lesson-list">
                      {lessons.map((lesson, index) => {
                        const done = progress.done.includes(lesson.id)
                        const open = openLesson === lesson.id
                        return (
                          <div className={`lesson ${done ? 'done' : ''} ${open ? 'open' : ''}`} id={`lesson-${lesson.id}`} key={lesson.id}>
                            <button className="lesson-main" onClick={() => setOpenLesson(open ? null : lesson.id)}>
                              <span
                                className={`lesson-check ${done ? 'checked' : ''}`}
                                onClick={(event) => { event.stopPropagation(); toggleLesson(lesson.id) }}
                              >{done ? '✓' : ''}</span>
                              <span className="lesson-index">{String(index + 1).padStart(2, '0')}</span>
                              <span className="lesson-title"><strong>{lesson.title}</strong><small>Lesson</small></span>
                              <span className="lesson-arrow">{open ? '−' : '+'}</span>
                            </button>

                            {open && (
                              <div className="lesson-details">
                                <div className="lesson-objective">
                                  <span>OBJECTIVE</span>
                                  <p>{lesson.objective}</p>
                                </div>

                                <div className="detail-grid">
                                  <div>
                                    <span>KEY CONCEPTS</span>
                                    <ul className="concept-list">
                                      {lesson.keyConcepts.map((concept) => <li key={concept}>{concept}</li>)}
                                    </ul>
                                  </div>
                                  <div>
                                    <span>PRACTICAL EXERCISE · 15–30 MIN</span>
                                    <p>{lesson.practicalExercise}</p>
                                  </div>
                                </div>

                                <div className="resources">
                                  <div className="resource-heading"><span>RECOMMENDED LEARNING</span><small>{lesson.recommendedResources.length} resources</small></div>
                                  
                                  {/* INLINE GRID STYLING LOCK */}
                                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px' }}>
                                    {lesson.recommendedResources.map((resource) => {
                                      const youtube = isYouTube(resource.url)
                                      const videoId = youtube ? getYouTubeId(resource.url) : null
                                      return (
                                        <a 
                                          href={resource.url} 
                                          target="_blank" 
                                          rel="noreferrer" 
                                          className="resource-card" 
                                          key={`${lesson.id}-${resource.url}`}
                                          style={{ 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            minHeight: '86px', 
                                            background: 'var(--panel-2)', 
                                            border: '1px solid var(--border)', 
                                            overflow: 'hidden',
                                            minWidth: 0
                                          }}
                                        >
                                          {videoId ? (
                                            <div style={{ width: '140px', height: '86px', flexShrink: 0, position: 'relative', overflow: 'hidden', background: '#050506' }}>
                                              <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                                              <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0,0,0,0.7)', color: 'white', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', fontSize: '10px' }}>▶</span>
                                            </div>
                                          ) : (
                                            <div style={{ width: '100px', height: '86px', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--panel-3)', color: 'var(--accent)', fontSize: '18px' }}>
                                              {youtube ? '▶' : resource.type === 'Practice' ? '◆' : '◉'}
                                            </div>
                                          )}
                                          <div style={{ flex: 1, minWidth: 0, padding: '12px 14px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                            <div style={{ color: 'var(--accent)', fontSize: '9px', fontWeight: 600, letterSpacing: '0.05em' }}>
                                              {youtube ? 'YOUTUBE' : resource.type.toUpperCase()}
                                            </div>
                                            <strong style={{ fontSize: '12px', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                              {resource.title}
                                            </strong>
                                            {resource.free && <small style={{ color: 'var(--dim)', fontSize: '9px', marginTop: '2px' }}>FREE · OPEN</small>}
                                          </div>
                                          <span style={{ padding: '0 16px', color: 'var(--dim)', flexShrink: 0 }}>↗</span>
                                        </a>
                                      )
                                    })}
                                  </div>
                                </div>

                                <button className={`lesson-complete ${done ? 'completed' : ''}`} onClick={() => toggleLesson(lesson.id)}>
                                  {done ? '✓ Lesson completed' : 'Mark lesson complete'}
                                </button>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>

                    <div className="checkpoint" id={`checkpoint-${stage.id}`}>
                      <div className="checkpoint-header">
                        <div>
                          <span className="checkpoint-label">STAGE {String(stage.stageNumber).padStart(2, '0')} · PROVE GATE</span>
                          <h4>{status === 'proved' ? 'Checkpoint proved ✓' : allComplete ? 'All lessons complete — now prove the skill.' : 'Finish every lesson before the checkpoint.'}</h4>
                        </div>
                        {status === 'proved' ? <div className="proved-badge">✓ PROVED</div> : <button className="checkpoint-button" disabled={!allComplete} onClick={() => proveStage(stage.id)}>{allComplete && checksComplete ? 'Mark checkpoint proved →' : !allComplete ? `${stage.lessons.length - doneCount} lessons remaining` : 'Complete all 4 self-checks →'}</button>}
                      </div>

                      <div className="checkpoint-grid">
                        <div className="checkpoint-box">
                          <span>CLIENT BRIEF</span>
                          <p>{stage.checkpoint.brief}</p>
                        </div>
                        <div className="checkpoint-box">
                          <span>TECHNICAL CONSTRAINTS</span>
                          <ul className="constraint-list">{stage.checkpoint.technicalConstraints.map((item) => <li key={item}>{item}</li>)}</ul>
                        </div>
                      </div>

                      <div className="checkpoint-box">
                        <span>FREE PRACTICE FOOTAGE</span>
                        <div className="footage-grid">
                          {stage.checkpoint.freePracticeFootage.map((resource) => (
                            <a className="footage-link" href={resource.url} target="_blank" rel="noreferrer" key={resource.url}>
                              <strong>{resource.title}</strong><span>OPEN FOOTAGE ↗</span>
                            </a>
                          ))}
                        </div>
                      </div>

                      <div className="checkpoint-box">
                        <span>SELF-GRADING CHECKLIST</span>
                        <div className="checklist">
                          {stage.checkpoint.selfGradingChecklist.map((item, checkIndex) => {
                            const key = `${stage.id}:${checkIndex}`
                            const checked = progress.checkpointChecks.includes(key)
                            return (
                              <label className={`checkpoint-check ${checked ? 'checked' : ''}`} key={item}>
                                <input
                                  type="checkbox"
                                  checked={checked}
                                  onChange={() => toggleCheckpointCheck(stage.id, checkIndex)}
                                />
                                <span>{item}</span>
                              </label>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </article>
            )
          })}
        </div>
      </section>

      <section className="money-section" id="money">
        <div className="money-panel">
          <div>
            <span className="eyebrow">03 · MONEY PATH</span>
            <h2>Finish with a sales system.</h2>
            <p>Stage 07 turns the editing work into a real offer, portfolio, audit/spec process, direct outreach system, retainer structure, and client pipeline.</p>
          </div>
          <a href="#stage-money" className="primary-button">Open Stage 07 →</a>
        </div>
      </section>

      <footer>
        <div><strong>NAOL · VIDEO EDITING ROADMAP</strong><span>Built around craft, proof, and professional delivery.</span></div>
        <span>V3 · LOCAL PROGRESS</span>
      </footer>
    </main>
  )
}
