'use client'

import { useEffect, useMemo, useState } from 'react'
import type { CSSProperties } from 'react'
import { stages, allLessons } from '../data/roadmap'

type Progress = {
  done: string[]
  checkpoints: string[]
}

type StageStatus = 'proved' | 'ready' | 'current' | 'locked'

const STORAGE_KEY = 'naol-ve-v3'
const OLD_STORAGE_KEY = 'naol-ve-v2'

function getCheckpointId(stageId: string) {
  return `checkpoint-${stageId}`
}

const stageGoals: Record<string, string> = {
  foundation: 'Build the core editing mindset and technical foundation.',
  story: 'Learn to shape footage into clear, engaging stories.',
  audio: 'Make dialogue, music, and sound work together cleanly.',
  visual: 'Develop visual judgment, rhythm, and consistent image treatment.',
  kdenlive: 'Turn editing knowledge into a confident Kdenlive workflow.',
  projects: 'Create portfolio-ready work that proves the skills learned.',
  professional: 'Build a repeatable workflow for real client projects.',
  money: 'Turn editing ability into offers, clients, delivery, and income.',
}

const stageOutputs: Record<string, string> = {
  foundation: 'A solid editing foundation and a repeatable practice habit.',
  story: 'A short story-driven edit with intentional pacing.',
  audio: 'A clean, balanced edit with controlled dialogue and music.',
  visual: 'A polished edit with deliberate visual choices.',
  kdenlive: 'A complete Kdenlive workflow you can repeat on real projects.',
  projects: 'Portfolio pieces that can be shown to potential clients.',
  professional: 'A client-ready process from brief to final delivery.',
  money: 'A practical path from portfolio to paid editing work.',
}

function isYouTube(url: string) {
  return url.includes('youtube.com') || url.includes('youtu.be')
}

function getYouTubeId(url: string) {
  try {
    const parsed = new URL(url)

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.slice(1)
    }

    return parsed.searchParams.get('v')
  } catch {
    return null
  }
}

function getStageStatus(
  index: number,
  progress: Progress
): StageStatus {
  const stage = stages[index]

  const completeLessons = stage.lessons.every((lesson) =>
    progress.done.includes(lesson.id)
  )

  const proved = progress.checkpoints.includes(
    getCheckpointId(stage.id)
  )

  if (proved) return 'proved'
  if (completeLessons) return 'ready'

  if (index === 0) return 'current'

  const previous = stages[index - 1]
  const previousProved = progress.checkpoints.includes(
    getCheckpointId(previous.id)
  )

  if (previousProved) return 'current'

  return 'locked'
}

export default function Home() {
  const [progress, setProgress] = useState<Progress>({
    done: [],
    checkpoints: [],
  })

  const [query, setQuery] = useState('')
  const [activeStage, setActiveStage] = useState('all')
  const [openLesson, setOpenLesson] = useState<string | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)

      if (saved) {
        const parsed = JSON.parse(saved)

        if (
          parsed &&
          Array.isArray(parsed.done) &&
          Array.isArray(parsed.checkpoints)
        ) {
          setProgress({
            done: parsed.done,
            checkpoints: parsed.checkpoints,
          })
          setLoaded(true)
          return
        }
      }

      // Migrate old V2 progress automatically.
      const old = localStorage.getItem(OLD_STORAGE_KEY)

      if (old) {
        const oldDone = JSON.parse(old)

        if (Array.isArray(oldDone)) {
          const migrated = {
            done: oldDone,
            checkpoints: [],
          }

          setProgress(migrated)
          localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(migrated)
          )
        }
      }
    } catch {
      // Ignore invalid localStorage data.
    }

    setLoaded(true)
  }, [])

  useEffect(() => {
    if (!loaded) return

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(progress)
    )
  }, [progress, loaded])

  const completedLessons = progress.done.length
  const totalLessons = allLessons.length

  const completedStages = stages.filter((stage) =>
    progress.checkpoints.includes(getCheckpointId(stage.id))
  ).length

  const lessonPercent =
    totalLessons === 0
      ? 0
      : Math.round((completedLessons / totalLessons) * 100)

  const roadmapPercent =
    stages.length === 0
      ? 0
      : Math.round((completedStages / stages.length) * 100)

  const currentStageIndex = stages.findIndex((_, index) => {
    const status = getStageStatus(index, progress)
    return status === 'current' || status === 'ready'
  })

  const currentStage =
    currentStageIndex >= 0
      ? stages[currentStageIndex]
      : null

  const currentStageStatus =
    currentStageIndex >= 0
      ? getStageStatus(currentStageIndex, progress)
      : null

  const toggleLesson = (lessonId: string) => {
    setProgress((previous) => {
      const alreadyDone = previous.done.includes(lessonId)

      return {
        ...previous,
        done: alreadyDone
          ? previous.done.filter((id) => id !== lessonId)
          : [...previous.done, lessonId],
      }
    })
  }

  const proveStage = (stageId: string) => {
    const stageIndex = stages.findIndex(
      (stage) => stage.id === stageId
    )

    if (stageIndex === -1) return

    const stage = stages[stageIndex]

    const allComplete = stage.lessons.every((lesson) =>
      progress.done.includes(lesson.id)
    )

    if (!allComplete) return

    setProgress((previous) => ({
      ...previous,
      checkpoints: previous.checkpoints.includes(
        getCheckpointId(stageId)
      )
        ? previous.checkpoints
        : [
            ...previous.checkpoints,
            getCheckpointId(stageId),
          ],
    }))
  }

  const resetProgress = () => {
    const confirmed = window.confirm(
      'Reset all video-editing roadmap progress? This cannot be undone.'
    )

    if (!confirmed) return

    const empty = {
      done: [],
      checkpoints: [],
    }

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
          if (activeStage !== 'all' && activeStage !== stage.id) {
            return false
          }

          if (!normalized) return true

          return [
            lesson.title,
            lesson.tag,
            lesson.why,
            lesson.learn,
            lesson.practice,
            lesson.build,
            lesson.criteria,
          ]
            .join(' ')
            .toLowerCase()
            .includes(normalized)
        })

        return {
          stage,
          stageIndex,
          status,
          lessons,
        }
      })
      .filter((item) => item.lessons.length > 0)
  }, [query, activeStage, progress])

  const scrollToCurrent = () => {
    if (!currentStage) {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      return
    }

    const allComplete = currentStage.lessons.every((lesson) =>
      progress.done.includes(lesson.id)
    )

    if (allComplete && currentStageStatus === 'ready') {
      document.getElementById(`checkpoint-${currentStage.id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      })
      return
    }

    const nextLesson = currentStage.lessons.find(
      (lesson) => !progress.done.includes(lesson.id)
    )

    const target = nextLesson
      ? `lesson-${nextLesson.id}`
      : `stage-${currentStage.id}`

    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
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
          <a href="#projects">Projects</a>
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
            <span>Prove it with projects.</span>
          </h1>

          <p>
            A structured path from editing fundamentals to
            real-world freelance work. Finish a stage, prove
            the skill, then unlock the next one.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={scrollToCurrent}
            >
              Continue roadmap →
            </button>

            <button
              className="secondary-button"
              onClick={resetProgress}
            >
              Reset progress
            </button>
          </div>
        </div>

        <div className="hero-progress">
          <div
  className="progress-ring"
  style={
    {
      '--progress': roadmapPercent,
    } as CSSProperties
  }
>
            <div>
              <strong>{roadmapPercent}%</strong>
              <span>ROADMAP COMPLETE</span>
            </div>
          </div>

          <div className="hero-stat-grid">
            <div>
              <strong>
                {completedLessons}/{totalLessons}
              </strong>
              <span>LESSONS · {lessonPercent}%</span>
            </div>

            <div>
              <strong>
                {completedStages}/{stages.length}
              </strong>
              <span>STAGES PROVED</span>
            </div>
          </div>

          <div className="next-action">
            <span>NEXT ACTION</span>
            <strong>
              {currentStage
                ? currentStageStatus === 'ready'
                  ? 'Complete the stage checkpoint'
                  : currentStage.lessons.find((lesson) => !progress.done.includes(lesson.id))?.title || 'Stage complete'
                : 'Roadmap complete — build your portfolio'}
            </strong>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div>
          <span>YOUR CURRENT STAGE</span>
          <strong>
            {currentStage
              ? `${currentStage.title}${
                  currentStageStatus === 'ready'
                    ? ' · Checkpoint ready'
                    : ''
                }`
              : 'Roadmap complete'}
          </strong>
        </div>

        <div>
          <span>PHILOSOPHY</span>
          <strong>Learn → Practice → Build → Prove</strong>
        </div>

        <div>
          <span>STORAGE</span>
          <strong>Browser only · No account</strong>
        </div>
      </section>

      <section className="timeline-section" id="timeline">
        <div className="section-heading">
          <div>
            <span className="eyebrow">01 · TIMELINE</span>
            <h2>Your editing journey</h2>
          </div>

          <p>
            You don't unlock everything at once. Master the
            current stage and prove it before moving forward.
          </p>
        </div>

        <div className="timeline">
          {stages.map((stage, index) => {
            const status = getStageStatus(index, progress)
            const doneCount = stage.lessons.filter((lesson) =>
              progress.done.includes(lesson.id)
            ).length

            return (
              <button
                key={stage.id}
                className={`timeline-item ${status}`}
                onClick={() => {
                  if (status === 'locked') return

                  document
                    .getElementById(`stage-${stage.id}`)
                    ?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    })
                }}
              >
                <span className="timeline-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="timeline-line" />

                <span className="timeline-content">
                  <strong>{stage.title}</strong>
                  <small>
                    {doneCount}/{stage.lessons.length} lessons
                    {status === 'proved' && ' · PROVED'}
                    {status === 'ready' && ' · CHECKPOINT READY'}
                    {status === 'locked' && ' · LOCKED'}
                  </small>
                </span>

                <span className="timeline-status">
                  {status === 'proved'
                    ? '✓'
                    : status === 'ready'
                      ? '!'
                      : status === 'locked'
                        ? '🔒'
                        : '→'}
                </span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="roadmap-section" id="roadmap">
        <div className="section-heading">
          <div>
            <span className="eyebrow">02 · ROADMAP</span>
            <h2>Build your editing skill</h2>
          </div>

          <p>
            Work through the current stage one lesson at a time.
            When every lesson is complete, the stage checkpoint
            becomes available and unlocks the next stage after
            you prove it.
          </p>
        </div>

        <div className="toolbar">
          <input
            value={query}
            onChange={(event) =>
              setQuery(event.target.value)
            }
            placeholder="Search lessons..."
          />

          <select
            value={activeStage}
            onChange={(event) =>
              setActiveStage(event.target.value)
            }
          >
            <option value="all">All stages</option>

            {stages.map((stage) => (
              <option key={stage.id} value={stage.id}>
                {stage.title}
              </option>
            ))}
          </select>
        </div>

        <div className="roadmap">
          {filteredStages.map(
            ({ stage, stageIndex, status, lessons }) => {
              const doneCount = stage.lessons.filter(
                (lesson) => progress.done.includes(lesson.id)
              ).length

              const allComplete =
                doneCount === stage.lessons.length

              return (
                <article
                  className={`stage ${status}`}
                  id={`stage-${stage.id}`}
                  key={stage.id}
                >
                  <div className="stage-header">
                    <div className="stage-heading-left">
                      <div className="stage-number">
                        {String(stageIndex + 1).padStart(2, '0')}
                      </div>

                      <div>
                        <div className="stage-label">
                          {status === 'proved'
                            ? 'PROVED'
                            : status === 'ready'
                              ? 'CHECKPOINT READY'
                              : status === 'locked'
                                ? 'LOCKED'
                                : 'CURRENT'}
                        </div>

                        <h3>{stage.title}</h3>
                        <p>{stage.subtitle}</p>
                      </div>
                    </div>

                    <div className="stage-progress">
                      <strong>
                        {doneCount}/{stage.lessons.length}
                      </strong>
                      <span>LESSONS</span>
                    </div>
                  </div>

                  <div className="stage-meta">
                    <div>
                      <span>GOAL</span>
                      <p>{stageGoals[stage.id] || stage.subtitle}</p>
                    </div>
                    <div>
                      <span>OUTPUT</span>
                      <p>{stageOutputs[stage.id] || 'A practical proof of the stage skill.'}</p>
                    </div>
                  </div>

                  <div className="stage-progress-bar" aria-label={`${doneCount} of ${stage.lessons.length} lessons complete`}>
                    <div style={{ width: `${stage.lessons.length ? (doneCount / stage.lessons.length) * 100 : 0}%` }} />
                  </div>

                  {status === 'locked' ? (
                    <div className="locked-message">
                      <span>🔒</span>
                      <div>
                        <strong>Stage locked</strong>
                        <p>
                          Complete and prove the previous stage
                          to unlock this section.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="lesson-list">
                        {lessons.map((lesson, lessonIndex) => {
                          const isDone = progress.done.includes(
                            lesson.id
                          )

                          const isOpen =
                            openLesson === lesson.id

                          return (
                            <div
                              className={`lesson ${isDone ? 'done' : ''} ${isOpen ? 'open' : ''}`}
                              id={`lesson-${lesson.id}`}
                              key={lesson.id}
                            >
                              <button
                                className="lesson-main"
                                onClick={() =>
                                  setOpenLesson(
                                    isOpen ? null : lesson.id
                                  )
                                }
                              >
                                <span
                                  className={`lesson-check ${isDone ? 'checked' : ''}`}
                                  onClick={(event) => {
                                    event.stopPropagation()
                                    toggleLesson(lesson.id)
                                  }}
                                >
                                  {isDone ? '✓' : ''}
                                </span>

                                <span className="lesson-index">
                                  {String(
                                    lessonIndex + 1
                                  ).padStart(2, '0')}
                                </span>

                                <span className="lesson-title">
                                  <strong>{lesson.title}</strong>
                                  <small>{lesson.tag}</small>
                                </span>

                                <span className="lesson-arrow">
                                  {isOpen ? '−' : '+'}
                                </span>
                              </button>

                              {isOpen && (
                                <div className="lesson-details">
                                  <div className="detail-grid">
                                    <div>
                                      <span>WHY</span>
                                      <p>{lesson.why}</p>
                                    </div>

                                    <div>
                                      <span>LEARN</span>
                                      <p>{lesson.learn}</p>
                                    </div>

                                    <div>
                                      <span>PRACTICE</span>
                                      <p>{lesson.practice}</p>
                                    </div>

                                    <div>
                                      <span>BUILD</span>
                                      <p>{lesson.build}</p>
                                    </div>

                                    <div>
                                      <span>PROOF</span>
                                      <p>{lesson.criteria}</p>
                                    </div>
                                  </div>

                                  <div className="resources">
                                    <div className="resource-heading">
                                      <span>LEARNING MATERIAL</span>
                                      <small>
                                        {lesson.resources.length}{' '}
                                        resource
                                        {lesson.resources.length !==
                                        1
                                          ? 's'
                                          : ''}
                                      </small>
                                    </div>

                                    <div className="resource-grid">
                                      {lesson.resources.map(
                                        (resource) => {
                                          const youtube =
                                            isYouTube(
                                              resource.url
                                            )

                                          const videoId =
                                            youtube
                                              ? getYouTubeId(
                                                  resource.url
                                                )
                                              : null

                                          return (
                                            <a
                                              href={
                                                resource.url
                                              }
                                              target="_blank"
                                              rel="noreferrer"
                                              className="resource-card"
                                              key={`${lesson.id}-${resource.url}`}
                                            >
                                              {videoId ? (
                                                <div className="resource-thumb">
                                                  <img
                                                    src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                                                    alt=""
                                                  />
                                                  <span>
                                                    ▶
                                                  </span>
                                                </div>
                                              ) : (
                                                <div className="resource-icon">
                                                  {youtube
                                                    ? '▶'
                                                    : resource.type ===
                                                        'Practice'
                                                      ? '◆'
                                                      : '◉'}
                                                </div>
                                              )}

                                              <div className="resource-info">
                                                <div className="resource-type">
                                                  {youtube
                                                    ? 'YOUTUBE'
                                                    : resource.type ===
                                                        'Practice'
                                                      ? 'PRACTICE'
                                                      : 'READ'}
                                                </div>

                                                <strong>
                                                  {
                                                    resource.title
                                                  }
                                                </strong>

                                                {resource.free && (
                                                  <small>
                                                    FREE · OPEN
                                                  </small>
                                                )}
                                              </div>

                                              <span className="resource-open">
                                                ↗
                                              </span>
                                            </a>
                                          )
                                        }
                                      )}
                                    </div>
                                  </div>

                                  <button
                                    className={`lesson-complete ${isDone ? 'completed' : ''}`}
                                    onClick={() =>
                                      toggleLesson(lesson.id)
                                    }
                                  >
                                    {isDone
                                      ? '✓ Lesson completed'
                                      : 'Mark lesson complete'}
                                  </button>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>

                      <div className="checkpoint" id={`checkpoint-${stage.id}`}>
                        <div>
                          <span className="checkpoint-label">
                            STAGE CHECKPOINT
                          </span>

                          <h4>
                            {status === 'proved'
                              ? 'Stage proved ✓'
                              : allComplete
                                ? 'You are ready to prove this stage.'
                                : 'Finish every lesson first.'}
                          </h4>

                          <p>
                            {status === 'proved'
                              ? 'This stage is complete. The next stage is unlocked.'
                              : 'Complete the lessons, then demonstrate the skill through the stage checkpoint.'}
                          </p>
                        </div>

                        {status === 'proved' ? (
                          <div className="proved-badge">
                            ✓ PROVED
                          </div>
                        ) : (
                          <button
                            className="checkpoint-button"
                            disabled={!allComplete}
                            onClick={() =>
                              proveStage(stage.id)
                            }
                          >
                            {allComplete
                              ? 'Complete checkpoint →'
                              : `${stage.lessons.length - doneCount} lessons remaining`}
                          </button>
                        )}
                      </div>
                    </>
                  )}
                </article>
              )
            }
          )}
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-heading">
          <div>
            <span className="eyebrow">03 · PROJECTS</span>
            <h2>Build proof, not just knowledge</h2>
          </div>

          <p>
            Your Project Lab turns the lessons into portfolio
            pieces you can actually show clients.
          </p>
        </div>

        <div className="project-grid">
          {stages
            .find((stage) => stage.id === 'projects')
            ?.lessons.map((lesson, index) => (
              <a
                className="project-card"
                href="#roadmap"
                key={lesson.id}
              >
                <span>
                  PROJECT {String(index + 1).padStart(2, '0')}
                </span>
                <h3>{lesson.title}</h3>
                <p>{lesson.build}</p>
                <strong>Open in roadmap →</strong>
              </a>
            ))}
        </div>
      </section>

      <section className="money-section" id="money">
        <div className="money-panel">
          <div>
            <span className="eyebrow">04 · MONEY PATH</span>
            <h2>Turn editing into income.</h2>
            <p>
              The final stage connects your editing ability
              with a practical freelance workflow: portfolio,
              offers, clients, delivery, and repeat work.
            </p>
          </div>

          <a href="#stage-money" className="primary-button">
            Open money path →
          </a>
        </div>
      </section>

      <footer>
        <div>
          <strong>NAOL · VIDEO EDITING ROADMAP</strong>
          <span>
            Built for learning, practice, projects, and real
            work.
          </span>
        </div>

        <span>V3 · LOCAL PROGRESS</span>
      </footer>
    </main>
  )
}
