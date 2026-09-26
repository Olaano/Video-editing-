export type Resource={title:string;url:string;type:'Watch'|'Read'|'Practice';free?:boolean}
export type Lesson={id:string;title:string;objective:string;keyConcepts:string[];recommendedResources:Resource[];practicalExercise:string}
export type Checkpoint={brief:string;technicalConstraints:string[];freePracticeFootage:Resource[];selfGradingChecklist:string[]}
export type Stage={id:string;stageNumber:number;title:string;subtitle:string;goal:string;output:string;lessons:Lesson[];checkpoint:Checkpoint}
export const stages:Stage[]=[
{
id:'foundation',stageNumber:1,title:'The Editor’s Brain',subtitle:'Mindset, cuts, psychology, and pacing foundations',goal:'Build editorial judgment before relying on effects. Learn to decide what the audience should notice, feel, and understand.',output:'A 60-second edit whose choices can be explained shot-by-shot.',
lessons:[
{id:'f1',title:'Think like the editor',objective:'Translate raw footage into editorial decisions rather than simply assembling clips.',keyConcepts:['Every shot has a job: information, emotion, orientation, rhythm, or payoff.','Editing is selective; removing material is a creative decision.','The audience experiences the edit, not the timeline.','A strong editor can explain why a cut exists.'],recommendedResources:[
{title:'How Does an Editor Think and Feel?',url:'https://www.youtube.com/watch?v=3Q3eITC01Fg',type:'Watch',free:true},
{title:'This Guy Edits — Good Editors cut unnecessary dialog',url:'https://www.youtube.com/watch?v=6mvjS-sl39E',type:'Watch',free:true},
{title:'The Book Every Editor Has to Read — Walter Murch',url:'https://www.youtube.com/watch?v=PKYeClvvlTw',type:'Watch',free:true},
] as Resource[],practicalExercise:'15–20 min. Choose 8–10 unrelated clips. Write three possible stories using the same footage. Pick one, then assemble only the shots that support it. Remove two shots that feel “cool” but do not help the story. Export a 30–45s rough cut. Output: rough cut + one-sentence reason for every retained shot.'},
{id:'f2',title:'Cut with a reason',objective:'Identify the information, emotion, movement, sound, or attention change that justifies a cut.',keyConcepts:['Cuts can change information, emotion, time, space, or attention.','Invisible cuts prioritize clarity; noticeable cuts can create emphasis.','The strongest cut often happens just before or after the obvious moment.','A cut should improve the audience experience, not demonstrate software skill.'],recommendedResources:[
{title:'Cuts & Transitions 101 — RocketJump Film School',url:'https://www.youtube.com/watch?v=OAH0MoAv2CI',type:'Watch',free:true},
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'How Does an Editor Think and Feel?',url:'https://www.youtube.com/watch?v=3Q3eITC01Fg',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Pick a 30–60s scene with at least 8 cuts. Pause before each cut and predict why it occurs. Label each as information, emotion, movement, sound, time, space, or attention. Re-edit 20–30s of it so every cut has a written reason. Output: annotated cut list + re-edit.'},
{id:'f3',title:'Read shot language',objective:'Use shot size, angle, movement, and composition to choose footage for a purpose.',keyConcepts:['Wide shots establish context; medium shots balance action and context; close-ups emphasize detail or emotion.','Reaction shots can change the meaning of another shot.','Movement can motivate a cut and guide attention.','Shot choice should serve the edit, not just imitate cinematic style.'],recommendedResources:[
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'How Does an Editor Think and Feel?',url:'https://www.youtube.com/watch?v=3Q3eITC01Fg',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Collect 20 shots from one video. Label shot size and its editorial purpose. Then choose five shots for one simple action: establish → action → detail → reaction → result. Output: shot log + five-shot micro-sequence.'},
{id:'f4',title:'Protect continuity',objective:'Keep screen direction, eyelines, action, and spatial relationships understandable.',keyConcepts:['180-degree rule preserves screen direction.','Match-on-action hides cuts by continuing movement.','Eyelines tell viewers where people are looking.','Continuity can be broken deliberately, but accidental confusion is costly.'],recommendedResources:[
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'Free Sample Video Editing Tutorial — EditStock',url:'https://www.youtube.com/watch?v=rtDpihPaU-0',type:'Watch',free:true},
] as Resource[],practicalExercise:'20–25 min. Use a two-person dialogue or stage one. Build a master, two coverage shots, and a reaction. Keep the 180° line intact. Then make one intentionally wrong cut and repair it. Output: clean 30–45s scene + before/after continuity mistake.'},
{id:'f5',title:'Control pacing',objective:'Change perceived energy by changing shot duration, pauses, information density, and rhythm.',keyConcepts:['Pacing is information timing, not simply fast cutting.','Longer holds can create reflection or tension.','Shorter shots can raise energy when the story supports it.','Pacing should follow the emotional curve of the scene.'],recommendedResources:[
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'How Does an Editor Think and Feel?',url:'https://www.youtube.com/watch?v=3Q3eITC01Fg',type:'Watch',free:true},
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Use the same 8–12 clips to make three 20s versions: calm, energetic, tense. Do not change the story or core footage. Only alter timing, order, pauses, and cut frequency. Output: 3 exports + 2 sentences describing what changed.'},
{id:'f6',title:'Direct attention',objective:'Design the edit so the viewer notices the important thing at the intended moment.',keyConcepts:['Attention is shaped by contrast, timing, framing, movement, and reaction.','Withholding information can create curiosity; revealing it can create payoff.','Editors can redirect attention without adding effects.','The audience should not have to work to find the important information.'],recommendedResources:[
{title:'NEVER UPLOAD Your First Edit — Here\'s Why',url:'https://www.youtube.com/watch?v=KOQG1Js-4Mg',type:'Watch',free:true},
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'The Book Every Editor Has to Read — Walter Murch',url:'https://www.youtube.com/watch?v=PKYeClvvlTw',type:'Watch',free:true},
] as Resource[],practicalExercise:'20–25 min. Take a 30–45s sequence with competing visual information. Mark the intended focus at five moments. Reorder or remove shots so the focus arrives first. Show before/after to another person without explanation. Output: before/after + attention map.'},
],checkpoint:{
brief:'Client gives you 3 minutes of mixed footage from a simple interview/action scene. Deliver a coherent 60-second cut that demonstrates editorial judgment.',
technicalConstraints:['Maximum final runtime: 60 seconds.','No visual transitions beyond straight cuts.','Maximum 2 cuts per spoken sentence unless the meaning clearly requires more.','Every cut must have a purpose: information, emotion, movement, sound, time, space, or attention.','No decorative effects; the edit must work with picture and natural audio.'],
freePracticeFootage:[
{title:'EditStock — The Hallway free sample',url:'https://editstock.com/products/the-hallway',type:'Practice',free:true},
{title:'EditStock free editing practice footage',url:'https://editstock.com/collections/free-projects',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — The story is understandable without explanation.','PASS — No accidental continuity/orientation errors.','PASS — Cuts feel motivated and pacing changes support the story.','PASS — Editor can explain the purpose of the 5 most important cuts.']},
},
{
id:'story',stageNumber:2,title:'Storytelling',subtitle:'Hooks, retention, narrative arcs, tension, and platform-aware structure',goal:'Turn footage into a story that earns attention, creates expectation, and delivers payoff without relying on gimmicks.',output:'A finished 60–90s story edit with a deliberate hook, escalation, and payoff.',
lessons:[
{id:'s1',title:'Build the hook',objective:'Create an opening that establishes a question, promise, conflict, or curiosity fast.',keyConcepts:['The hook creates an information gap or clear reason to keep watching.','A hook should match the actual value delivered later.','Cold opens can outperform introductions when they remove setup friction.','The first seconds should establish context and direction, not random spectacle.'],recommendedResources:[
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Take a 2–3 minute talking-head or process clip. Create three 5–8s openings: direct promise, curiosity question, and cold-open payoff. Keep the body identical. Output: 3 hooks + one chosen version with a one-sentence rationale.'},
{id:'s2',title:'Read retention shape',objective:'Use audience-retention thinking to identify where energy, clarity, or curiosity can drop.',keyConcepts:['Retention is a diagnostic signal, not a magic formula.','Drops often follow repetition, delayed payoff, confusion, or low-information sections.','A strong edit alternates setup, progress, and payoff rather than staying at maximum intensity.','You improve retention by improving the viewer experience, not by cutting randomly.'],recommendedResources:[
{title:'NEVER UPLOAD Your First Edit — Here\'s Why',url:'https://www.youtube.com/watch?v=KOQG1Js-4Mg',type:'Watch',free:true},
{title:'Hayden Hillier-Smith — Watch',url:'https://www.haydenhilliersmith.com/watch',type:'Read',free:true},
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Watch a 3–5 minute creator video once without notes. On the second pass, mark 5 moments where attention likely rises or drops and explain why. Re-cut one 30–45s section to remove repetition or dead space. Output: annotated timeline + revised section.'},
{id:'s3',title:'Shape the narrative arc',objective:'Arrange events into setup, escalation, turning point, payoff, and release.',keyConcepts:['Chronological order is not always the most engaging order.','Escalation means increasing stakes, complexity, or unanswered questions.','A payoff resolves or transforms the promise established earlier.','The edit should make the “before vs after” state easy to feel.'],recommendedResources:[
{title:'How Does an Editor Think and Feel?',url:'https://www.youtube.com/watch?v=3Q3eITC01Fg',type:'Watch',free:true},
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'Free Sample Video Editing Tutorial — EditStock',url:'https://www.youtube.com/watch?v=rtDpihPaU-0',type:'Watch',free:true},
] as Resource[],practicalExercise:'25 min. Use EditStock The Hallway or The Stick Up. Write a five-beat outline before editing. Cut 45–60s that follows the beats even if the source is longer. Output: beat sheet + final sequence.'},
{id:'s4',title:'Create tension and release',objective:'Control what the viewer knows, when they know it, and when you pay it off.',keyConcepts:['Tension often comes from a gap between question and answer.','Pacing can stretch anticipation before compressing the payoff.','Reaction shots can increase tension by showing knowledge before action.','Silence and withheld information can be stronger than constant action.'],recommendedResources:[
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'The Book Every Editor Has to Read — Walter Murch',url:'https://www.youtube.com/watch?v=PKYeClvvlTw',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Select one moment from The Hallway or your own footage. Build two 30s versions: one that reveals information early and one that withholds it. Compare the emotional effect. Output: both versions + note on the exact reveal point.'},
{id:'s5',title:'Edit the talking head',objective:'Turn a raw speaker into a clear, paced YouTube segment without over-editing.',keyConcepts:['Build a strong radio cut before adding B-roll or graphics.','Remove repetition, filler, weak wording, and long pauses while preserving natural speech.','Use B-roll to add information or visual relief, not to hide a bad cut.','Captions and zooms should clarify or emphasize, not appear every second.'],recommendedResources:[
{title:'NEVER UPLOAD Your First Edit — Here\'s Why',url:'https://www.youtube.com/watch?v=KOQG1Js-4Mg',type:'Watch',free:true},
{title:'How to Edit Your Talking Head Videos — Denz Creates',url:'https://www.youtube.com/watch?v=6JcrJzLOe-g',type:'Watch',free:true},
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
] as Resource[],practicalExercise:'25–30 min. Take 2–3 minutes of speech. Create a clean radio cut first. Then cover only 20–30% of the talking-head with purposeful B-roll. Add captions for key phrases only. Output: 60–90s segment + before/after comparison.'},
{id:'s6',title:'Use B-roll as evidence',objective:'Choose B-roll that proves, expands, or emotionally supports what is being said.',keyConcepts:['B-roll can provide evidence, context, texture, or visual metaphor.','Shot duration should follow the speech idea being illustrated.','A B-roll shot should earn its place by adding something.','The best B-roll often changes the viewer’s understanding of a sentence.'],recommendedResources:[
{title:'How to Edit Your Talking Head Videos — Denz Creates',url:'https://www.youtube.com/watch?v=6JcrJzLOe-g',type:'Watch',free:true},
{title:'How I Edit Smooth Transitions! — Daniel Schiffer',url:'https://www.youtube.com/watch?v=5hJOdQ1zhX8',type:'Watch',free:true},
{title:'Pexels free video library',url:'https://www.pexels.com/videos/',type:'Practice',free:true},
] as Resource[],practicalExercise:'20 min. Take 30s of dialogue. Collect 6–10 B-roll shots. Map each shot to a spoken idea. Cover only the sections where the visual adds information. Remove two shots that are attractive but irrelevant. Output: B-roll map + 60s cut.'},
{id:'s7',title:'Split for platform',objective:'Edit deliberately for horizontal long-form and vertical short-form instead of simply cropping one into the other.',keyConcepts:['Long-form needs structure, context, and sustained narrative payoff.','Short-form needs faster context, stronger early promise, and denser information.','Vertical framing changes safe areas and the usefulness of wide shots.','A short should feel authored for 9:16, not like a 16:9 export with the sides removed.'],recommendedResources:[
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'Hayden Hillier-Smith — Watch',url:'https://www.haydenhilliersmith.com/watch',type:'Read',free:true},
{title:'Mixkit free vertical video',url:'https://mixkit.co/free-vertical-videos/',type:'Practice',free:true},
] as Resource[],practicalExercise:'20–30 min. Take one 60–90s source. Build a 16:9 version with context and pacing, then a 9:16 30–45s version with a faster hook and reframed subject. Output: one horizontal edit + one vertical edit + a list of three deliberate differences.'},
],checkpoint:{
brief:'Client needs a 60-second YouTube/social story from 5 minutes of raw footage. The client wants a strong hook and a clear payoff, not a montage of random “cool” shots.',
technicalConstraints:['Final runtime: 55–65 seconds.','Structure: Hook 0–5s, Build 5–45s, Payoff 45–60s.','No flashy transitions; use straight cuts, J/L cuts, B-roll, and timing.','Maximum 3 consecutive B-roll shots unless they form a purposeful montage.','The final 5 seconds must deliver or resolve the promise made in the hook.'],
freePracticeFootage:[
{title:'EditStock — The Hallway free sample',url:'https://editstock.com/products/the-hallway',type:'Practice',free:true},
{title:'EditStock — The Stick Up free sample',url:'https://editstock.com/products/editstock-free-sample-bingo-night',type:'Practice',free:true},
{title:'Pexels free video library',url:'https://www.pexels.com/videos/',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Hook establishes a clear reason to continue.','PASS — Middle section escalates or develops rather than repeats.','PASS — Payoff resolves the hook with visible or audible evidence.','PASS — No transition/effect is doing work that a better edit should do.']},
},
{
id:'audio',stageNumber:3,title:'Audio',subtitle:'Dialogue isolation, EQ/compression, loudness, music ducking, SFX, and foley',goal:'Make sound clean enough for professional delivery and intentional enough to support story and retention.',output:'A 60–90s mixed sequence with clear dialogue, controlled music/SFX, and verified loudness.',
lessons:[
{id:'a1',title:'Clean dialogue first',objective:'Build an intelligible dialogue track before styling the rest of the soundtrack.',keyConcepts:['Clipping is distortion, not a volume problem.','High-pass filtering can remove unnecessary low-frequency rumble.','Noise reduction should improve speech without creating watery artifacts.','Consistency matters more than making one word extremely loud.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'Curtis Judd — Sound for Video',url:'https://learn-light-and-sound.teachable.com/',type:'Read',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Choose a 30–60s voice clip. Identify the loudest peak and quietest phrase. Remove obvious rumble, apply conservative cleanup, then match the level across phrases. Output: before/after render and a short note naming each change.'},
{id:'a2',title:'EQ and compression',objective:'Use basic EQ and dynamics to make dialogue clearer and more controlled.',keyConcepts:['EQ changes tonal balance; compression reduces level variation.','Cut problem frequencies before boosting presence.','Compression should reduce peaks without making speech lifeless.','Processing should be subtle enough to preserve natural voice texture.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'Curtis Judd — Sound for Video',url:'https://learn-light-and-sound.teachable.com/',type:'Read',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20–25 min. Duplicate a dialogue clip. On version A apply only EQ; on B EQ + gentle compression. Compare loudness-matched results. Output: two renders + settings screenshot. Pass: choose the version that improves intelligibility without obvious pumping.'},
{id:'a3',title:'Hit a loudness target',objective:'Measure integrated loudness instead of guessing volume by ear.',keyConcepts:['Peak level and integrated loudness are different measurements.','A practical YouTube target is around -14 LUFS integrated; platform processing may vary.','True-peak headroom reduces clipping risk after encoding.','Always measure the final export, not just timeline meters.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'Kdenlive Exporting',url:'https://docs.kdenlive.org/en/exporting.html',type:'Read',free:true},
{title:'YouTube supported formats and encoding guidance',url:'https://support.google.com/youtube/answer/4603579',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Mix a 45–60s segment, export it, and measure integrated loudness with a loudness meter available in your workflow. Make one revision to approach -14 LUFS integrated without obvious clipping. Output: final file + measured loudness screenshot/note.'},
{id:'a4',title:'Ducking that keeps speech dominant',objective:'Balance music against dialogue so the soundtrack adds emotion without masking words.',keyConcepts:['Dialogue is usually the primary information channel in talking-head content.','Volume automation/ducking is better than leaving music at one static level.','Music changes should follow speech density and emotional moments.','Silence can be part of the mix.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Create a 60s dialogue + music mix. Set music clearly below speech, then automate two dips around key sentences. Compare static vs ducked versions. Output: final mix + two annotated timestamps where ducking helped clarity.'},
{id:'a5',title:'Design SFX and foley',objective:'Layer sound effects that reinforce movement, impact, and interface actions without becoming noise.',keyConcepts:['Foley recreates physical sounds; SFX can exaggerate emphasis.','Layer ambience, action, accent, and transition sounds at different roles.','Sync points should follow movement or story beats.','More sounds do not automatically create better sound design.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'Sound Design Masterclass | Full Course | Basic to Advanced Tutorial',url:'https://www.youtube.com/watch?v=UOMMyu__FTM',type:'Watch',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'25 min. Take a silent 20–30s action sequence. Add ambience, 3–5 foley sounds, and 2 accent effects. Mute each layer one at a time to verify its purpose. Output: final sound-designed sequence + layer list.'},
{id:'a6',title:'Build audio continuity',objective:'Use room tone, J/L cuts, fades, and ambience to make edits feel physically continuous.',keyConcepts:['Room tone hides background discontinuities between dialogue edits.','J-cuts and L-cuts can smooth picture changes with sound.','Short crossfades prevent clicks and abrupt changes.','Ambience should remain consistent with the location unless a shift is deliberate.'],recommendedResources:[
{title:'Curtis Judd — dialogue & production sound lessons',url:'https://www.youtube.com/@curtisjudd/videos',type:'Watch',free:true},
{title:'J-cuts and L-cuts — Adobe guide',url:'https://helpx.adobe.com/ie/premiere/desktop/edit-projects/trim-clips/perform-j-cuts-and-l-cuts.html',type:'Read',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20–25 min. Cut three dialogue sections. Add room tone underneath. Create two J-cuts and two L-cuts. Crossfade every discontinuity. Listen once with eyes closed and mark any cut you can hear. Output: seamless 45–60s conversation.'},
],checkpoint:{
brief:'Client gives you a 90-second interview with inconsistent dialogue, background noise, music, and basic footage. Deliver a broadcast-ready-feeling web mix.',
technicalConstraints:['Final runtime: 60–90 seconds.','Integrated loudness target: approximately -14 LUFS for the completed web export.','Dialogue must remain intelligible at normal listening volume.','Music must duck under speech; no section may allow music to mask important words.','Add at least 5 purposeful SFX/foley layers where the story benefits.'],
freePracticeFootage:[
{title:'EditStock — Steward of the Land free sample',url:'https://editstock.com/products/editstock-free-sample-built-by-life',type:'Practice',free:true},
{title:'EditStock free editing practice footage',url:'https://editstock.com/collections/free-projects',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Dialogue is clear and consistent from start to finish.','PASS — Loudness is measured and the export is near the target without obvious clipping.','PASS — Music/SFX support rather than compete with speech.','PASS — Room tone/J/L cuts/fades prevent audible edit seams.']},
},
{
id:'visual',stageNumber:4,title:'Visual Language',subtitle:'Continuity, shot matching, color balance, typography, and platform framing',goal:'Develop visual consistency and hierarchy so the finished edit looks deliberate, readable, and commercially useful.',output:'A visually coherent 60–90s edit with matched exposure/color and restrained graphics.',
lessons:[
{id:'v1',title:'Match shots before styling',objective:'Correct exposure, white balance, contrast, and color relationships before adding a look.',keyConcepts:['Correction makes shots consistent; grading adds a creative interpretation.','Exposure and white balance mismatches are often more distracting than saturation differences.','Skin tones are an important reference in people footage.','Use scopes as measurement tools, not decoration.'],recommendedResources:[
{title:'Cullen Kelly — color grading & color science',url:'https://www.youtube.com/@CullenKelly/videos',type:'Watch',free:true},
{title:'The simple thing most colorists never learn — Cullen Kelly',url:'https://www.youtube.com/watch?v=FB3lXE41R5k',type:'Watch',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20–25 min. Pick three mismatched clips. Normalize exposure and white balance first, then compare skin tone and contrast. Export before/after. Output: matched trio + notes describing the corrections.'},
{id:'v2',title:'Build a restrained grade',objective:'Create a consistent look that supports the story instead of overpowering it.',keyConcepts:['A look should be repeatable.','Contrast and color separation are often more important than extreme saturation.','Primary correction comes before secondaries.','A good grade remains believable when the viewer stops noticing the color treatment.'],recommendedResources:[
{title:'Cullen Kelly — color grading & color science',url:'https://www.youtube.com/@CullenKelly/videos',type:'Watch',free:true},
{title:'The simple thing most colorists never learn — Cullen Kelly',url:'https://www.youtube.com/watch?v=FB3lXE41R5k',type:'Watch',free:true},
{title:'What is Color Grading? — Cullen Kelly',url:'https://www.youtube.com/watch?v=vg8_KS900fE',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Make three looks from the same corrected shots: neutral, warm, cool. Keep skin natural in all three. Choose one and apply it consistently. Output: 3 looks + final selected sequence.'},
{id:'v3',title:'Protect visual continuity',objective:'Match brightness, direction, movement, scale, and visual weight across cuts.',keyConcepts:['Continuity extends beyond action to color, brightness, movement, and lens feel.','A cut can be technically continuous but still feel visually wrong.','Reframing can fix poor matching when source footage is limited.','Continuity should serve story clarity; purposeful discontinuity is a separate decision.'],recommendedResources:[
{title:'Thomas Flight — visual storytelling & editing essays',url:'https://www.youtube.com/@ThomasFlight/videos',type:'Watch',free:true},
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'Cullen Kelly — color grading & color science',url:'https://www.youtube.com/@CullenKelly/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Choose five cuts from your existing project. Identify one continuity problem per cut and repair it using trim, crop, shot order, or color correction. Output: before/after contact sheet or timeline notes.'},
{id:'v4',title:'Use typography as information',objective:'Design titles, captions, and lower thirds that improve comprehension.',keyConcepts:['Typography needs hierarchy: primary message, supporting label, optional detail.','Legibility beats decoration.','Timing should follow speech or visual information.','Safe placement matters, especially on vertical platforms.'],recommendedResources:[
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'Arkengheist 2.0 — Kdenlive tutorials',url:'https://www.youtube.com/@arkengheist20/videos',type:'Watch',free:true},
{title:'Mixkit free vertical video',url:'https://mixkit.co/free-vertical-videos/',type:'Practice',free:true},
] as Resource[],practicalExercise:'20 min. Create one title card, one lower third, and one key-caption style. Limit yourself to one font family and two weights. Test on both 16:9 and 9:16 mock frames. Output: three reusable styles.'},
{id:'v5',title:'Frame for 16:9 and 9:16',objective:'Recompose footage for platform geometry rather than relying on automatic crop.',keyConcepts:['9:16 frames provide less horizontal context.','Subject placement and text-safe areas change in vertical video.','A crop should preserve the important action or face.','Background detail can be removed when it does not support the vertical story.'],recommendedResources:[
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'6 Ways to Edit Any Scene — StudioBinder',url:'https://www.youtube.com/watch?v=FVR8zz8ci2k',type:'Watch',free:true},
{title:'Mixkit free vertical video',url:'https://mixkit.co/free-vertical-videos/',type:'Practice',free:true},
] as Resource[],practicalExercise:'20 min. Take three 16:9 clips. Reframe each manually for 9:16. Create one version with a centered face and another with a side subject. Keep text away from top/bottom interface areas. Output: 3 reframed clips + safe-area check.'},
{id:'v6',title:'Polish without overprocessing',objective:'Perform a final visual pass that removes distractions while preserving the edit’s natural hierarchy.',keyConcepts:['Finishing is subtraction as often as addition.','Remove unnecessary effects, graphics, and color extremes.','A final pass should inspect consistency, spelling, alignment, and timing.','Professional polish should not draw attention to itself.'],recommendedResources:[
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
{title:'The simple thing most colorists never learn — Cullen Kelly',url:'https://www.youtube.com/watch?v=FB3lXE41R5k',type:'Watch',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Open your best existing project and run a 10-point visual QC: exposure, white balance, skin, continuity, typography, alignment, spelling, crop, effect count, final frame. Fix only problems you can identify. Output: final export + checklist.'},
],checkpoint:{
brief:'Client provides three clips from different cameras plus branded text. Deliver a 75-second sequence that looks like one coherent production.',
technicalConstraints:['Final runtime: 60–90 seconds.','All three cameras must be visually matched before creative grading.','Skin tones must remain natural where people are visible.','Use no more than 2 graphic styles in the entire piece.','For any vertical version, text must remain inside a safe central area.'],
freePracticeFootage:[
{title:'Pexels free video library',url:'https://www.pexels.com/videos/',type:'Practice',free:true},
{title:'Mixkit free stock video',url:'https://mixkit.co/free-stock-video/',type:'Practice',free:true},
{title:'EditStock — Steward of the Land free sample',url:'https://editstock.com/products/editstock-free-sample-built-by-life',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Exposure/white-balance mismatch is no longer distracting.','PASS — Skin tones remain natural and consistent.','PASS — Typography is readable, aligned, and restrained.','PASS — The vertical crop, where used, preserves the important subject/action.']},
},
{
id:'kdenlive',stageNumber:5,title:'Kdenlive & Performance',subtitle:'Keyboard shortcuts, proxy workflow, nested sequences, effects, and rendering',goal:'Make Kdenlive fast and dependable on real client work, including low-end hardware. Master the craft here while understanding that some teams may later require proprietary project files in their own NLE.',output:'A complete Kdenlive project that can be navigated, edited, optimized, and exported with a repeatable workflow.',
lessons:[
{id:'k1',title:'Set up Kdenlive for real work',objective:'Create projects with predictable settings, media organization, and reusable defaults.',keyConcepts:['Project profile should match the intended delivery.','Bins/folders should separate footage, audio, graphics, and exports.','Templates reduce repetitive setup mistakes.','A project should be recoverable by another editor from the folder structure.'],recommendedResources:[
{title:'Learn Kdenlive in 30 Minutes — Nuxttux Creative Studio',url:'https://www.youtube.com/watch?v=zYD0b8LpiQA',type:'Watch',free:true},
{title:'Kdenlive Quick Start',url:'https://docs.kdenlive.org/en/getting_started/quickstart.html',type:'Read',free:true},
{title:'Nuxttux Creative Studio — Kdenlive tutorials',url:'https://www.youtube.com/@nuxttux/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Create a project called CLIENT_TEST_01. Set the correct resolution/frame rate. Create bins for Footage, Audio, Graphics, and Exports. Import at least 10 assets and rename the important ones clearly. Save and reopen the project. Output: clean project structure screenshot.'},
{id:'k2',title:'Cut with the keyboard',objective:'Build editing fluency around repeatable keyboard actions instead of mouse-only cutting.',keyConcepts:['Fast editing comes from reducing pointer travel and decision friction.','Trim, split, ripple/spacer, snapping, and navigation should become muscle memory.','Keyboard workflows should be adapted to the editor’s own dominant tasks.','Speed matters only when accuracy remains high.'],recommendedResources:[
{title:'Learn Kdenlive in 30 Minutes — Nuxttux Creative Studio',url:'https://www.youtube.com/watch?v=zYD0b8LpiQA',type:'Watch',free:true},
{title:'Kdenlive Editing',url:'https://docs.kdenlive.org/en/cutting_and_assembling/editing.html',type:'Read',free:true},
{title:'How Professional Hollywood Editors Set Up a Timeline — Film Editing Pro',url:'https://www.filmeditingpro.com/tutorial-how-professional-hollywood-editors-set-up-a-timeline/',type:'Read',free:true},
] as Resource[],practicalExercise:'20–30 min. Pick a 60s source. Perform 20 intentional cuts using keyboard commands for navigation and trimming wherever practical. Repeat once and aim to reduce time without increasing mistakes. Output: rough cut + personal 8-command shortcut cheat sheet.'},
{id:'k3',title:'Edit through proxies',objective:'Keep high-resolution footage workable on limited hardware without changing the final media.',keyConcepts:['Proxy media is lower-resolution editing media linked to original sources.','Proxy workflows trade temporary quality for responsiveness.','Proxy generation settings should fit the machine and media.','The final render must reference the original media when available.'],recommendedResources:[
{title:'Kdenlive Proxy Clips',url:'https://docs.kdenlive.org/en/getting_started/configure_kdenlive/configuration_proxy_clips.html',type:'Read',free:true},
{title:'Kdenlive installation / system requirements',url:'https://docs.kdenlive.org/en/getting_started/installation.html',type:'Read',free:true},
{title:'Nuxttux Creative Studio — Kdenlive tutorials',url:'https://www.youtube.com/@nuxttux/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'25 min. Enable proxy generation for a test batch. Compare playback and timeline responsiveness before/after. Edit 30–60s while proxies are enabled, then toggle them off before final export. Output: proxy setting screenshot + playback comparison notes.'},
{id:'k4',title:'Reuse nested sequences',objective:'Organize repeated sections and complex edits so changes can propagate cleanly.',keyConcepts:['Nested/sequence-based organization reduces timeline clutter.','Reusable sections help intros, title packages, and repeated segments stay consistent.','Nesting is useful when a group needs to move or be treated as one unit.','Over-nesting can make projects harder to debug, so use it intentionally.'],recommendedResources:[
{title:'Learn Kdenlive in 30 Minutes — Nuxttux Creative Studio',url:'https://www.youtube.com/watch?v=zYD0b8LpiQA',type:'Watch',free:true},
{title:'Arkengheist 2.0 — Kdenlive tutorials',url:'https://www.youtube.com/@arkengheist20/videos',type:'Watch',free:true},
{title:'Kdenlive Effects & Filters',url:'https://docs.kdenlive.org/en/effects_and_filters.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Build a 10–15s reusable intro with 3–5 layers. Nest or group it into one reusable sequence, place it twice, then change the master version and verify both instances update as expected. Output: reusable intro sequence.'},
{id:'k5',title:'Use effects, keyframes, and graphics deliberately',objective:'Add motion and effects that solve editorial problems without turning the timeline into a gimmick stack.',keyConcepts:['Effects should solve a visible problem or support meaning.','Keyframes control time-based changes in properties.','Masks/tracking/transform are tools, not genres.','A polished effect stack is usually smaller than a beginner expects.'],recommendedResources:[
{title:'Keyframe Animation — Linuceum',url:'https://docs.kdenlive.org/en/getting_started/tutorials/video_tutorials.html',type:'Watch',free:true},
{title:'Arkengheist 2.0 — Kdenlive tutorials',url:'https://www.youtube.com/@arkengheist20/videos',type:'Watch',free:true},
{title:'Victoriano de Jesus — Kdenlive tutorials',url:'https://www.youtube.com/@VictorianoDeJesus/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'25 min. Create three short drills: animated scale/position, one masked emphasis, and one readable title. Then duplicate the timeline and remove half the effects. Keep only changes that improve the message. Output: before/after comparison + final restrained version.'},
{id:'k6',title:'Render and verify',objective:'Produce platform-ready exports and verify the actual encoded file.',keyConcepts:['Container and codec choices affect compatibility and quality.','The timeline preview is not the delivered file.','Naming/versioning reduce client confusion.','Always inspect the exported file from start to finish before handoff.'],recommendedResources:[
{title:'Kdenlive Exporting',url:'https://docs.kdenlive.org/en/exporting.html',type:'Read',free:true},
{title:'Learn Kdenlive in 30 Minutes — Nuxttux Creative Studio',url:'https://www.youtube.com/watch?v=zYD0b8LpiQA',type:'Watch',free:true},
{title:'Kdenlive installation / system requirements',url:'https://docs.kdenlive.org/en/getting_started/installation.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Export one master and one web/social version. Use consistent filenames such as PROJECT_v1.0_MASTER and PROJECT_v1.0_SOCIAL. Watch both files for dropped frames, audio sync, wrong crop, and missing graphics. Output: delivery folder with two verified exports.'},
],checkpoint:{
brief:'You inherit a 1080p client project on a low-end machine. The client expects a clean 60–90s edit and two delivery versions.',
technicalConstraints:['Use proxies for high-resolution media during editing.','Complete the main cut using keyboard-driven editing for cuts/trims where practical.','Use at least one reusable nested sequence or grouped section.','Deliver one 16:9 master and one social export.','Open and verify both exported files before marking the checkpoint complete.'],
freePracticeFootage:[
{title:'EditStock — The Hallway free sample',url:'https://editstock.com/products/the-hallway',type:'Practice',free:true},
{title:'Pexels free video library',url:'https://www.pexels.com/videos/',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Project stays responsive enough to edit without constant playback failures.','PASS — Timeline organization is reusable and understandable.','PASS — Final exports have correct duration, framing, and audio sync.','PASS — No proxy/media-link error appears in the final delivered files.']},
},
{
id:'workflow',stageNumber:6,title:'Professional Workflow',subtitle:'Folder hierarchies, versioning, client notes, delivery codecs, and handoff',goal:'Work like a reliable editor: organized files, controlled revisions, predictable delivery, and clean communication.',output:'A complete client-ready project package that another editor can open and understand.',
lessons:[
{id:'w1',title:'Build the folder hierarchy',objective:'Make project folders predictable enough that media can be found without asking questions.',keyConcepts:['Use numbered folders so the order is obvious.','Separate source media from generated media and exports.','Names should describe content, not just dates or camera defaults.','Never mix client source files with disposable cache files.'],recommendedResources:[
{title:'How Professional Hollywood Editors Set Up a Timeline — Film Editing Pro',url:'https://www.filmeditingpro.com/tutorial-how-professional-hollywood-editors-set-up-a-timeline/',type:'Read',free:true},
{title:'Kdenlive Quick Start',url:'https://docs.kdenlive.org/en/getting_started/quickstart.html',type:'Read',free:true},
] as Resource[],practicalExercise:'15–20 min. Create: 01_Footage, 02_Audio, 03_Graphics, 04_Project, 05_Exports, 06_Deliveries, 07_Archive. Place a sample project into the structure and write a 5-line README explaining it.'},
{id:'w2',title:'Ingest and label like a pro',objective:'Turn messy source media into a searchable editing workspace before the creative edit begins.',keyConcepts:['Ingest means bringing source media into a controlled project system.','Selects reduce decision load later.','Consistent labels let another person understand the project quickly.','Backups protect both the work and the relationship with the client.'],recommendedResources:[
{title:'How Professional Hollywood Editors Set Up a Timeline — Film Editing Pro',url:'https://www.filmeditingpro.com/tutorial-how-professional-hollywood-editors-set-up-a-timeline/',type:'Read',free:true},
{title:'Kdenlive Editing',url:'https://docs.kdenlive.org/en/cutting_and_assembling/editing.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Take 20 clips. Rename or label 10 meaningfully. Mark selects for the best 8. Separate interview, B-roll, music, and SFX. Write one note describing your backup location. Output: organized bins + selects sequence.'},
{id:'w3',title:'Version without chaos',objective:'Create a simple versioning system that makes revisions reversible and traceable.',keyConcepts:['Version numbers should change when client-visible revisions occur.','Never overwrite a meaningful approval state.','Changelogs reduce confusion during feedback.','File names should identify project, version, and deliverable.'],recommendedResources:[
{title:'NEVER UPLOAD Your First Edit — Here\'s Why',url:'https://www.youtube.com/watch?v=KOQG1Js-4Mg',type:'Watch',free:true},
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
] as Resource[],practicalExercise:'15 min. Make v1.0, v1.1, and v2.0 of a 30s edit. Change one thing in each version and record it in CHANGELOG.md or README.txt. Output: versioned exports + changelog.'},
{id:'w4',title:'Process revision notes',objective:'Turn subjective client feedback into explicit edits with a controlled review pass.',keyConcepts:['Client notes need interpretation, prioritization, and confirmation.','Timecodes make revision requests concrete.','Separate “must fix” from “nice to explore.”','Scope changes should be identified before silently doing extra work.'],recommendedResources:[
{title:'How To Secure Your Video Editor Job With Good Client Chemistry',url:'https://www.filmeditingpro.com/the-3-types-of-editors/',type:'Read',free:true},
{title:'NEVER UPLOAD Your First Edit — Here\'s Why',url:'https://www.youtube.com/watch?v=KOQG1Js-4Mg',type:'Watch',free:true},
] as Resource[],practicalExercise:'20 min. Create 10 fake client notes with timecodes. Process them in priority order. Mark each as done, needs clarification, or scope change. Produce v1.1 and a concise revision summary. Output: notes tracker + revised export.'},
{id:'w5',title:'Choose delivery formats',objective:'Match codecs, containers, resolution, and versions to the client’s actual use.',keyConcepts:['Codec and container are separate decisions.','A master can preserve more quality than a web delivery copy.','Platform-specific versions may need different crops, captions, or bitrates.','Always ask what the client will do with the file when the requirement is unclear.'],recommendedResources:[
{title:'Kdenlive Exporting',url:'https://docs.kdenlive.org/en/exporting.html',type:'Read',free:true},
{title:'YouTube supported video formats',url:'https://support.google.com/youtube/troubleshooter/2888402',type:'Read',free:true},
{title:'Kdenlive exporting',url:'https://docs.kdenlive.org/en/exporting.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Export a master and a web version of the same project. Write a one-paragraph delivery note explaining codec/container, resolution, and intended use. Verify file sizes and playback.'},
{id:'w6',title:'Hand off and archive cleanly',objective:'Package a finished project so the client can download, review, and preserve it without confusion.',keyConcepts:['A handoff includes the deliverable plus the information needed to use it.','Archive only what is required, but do not delete source/project assets prematurely.','A README should explain versions, exports, and important project notes.','Reliability after delivery is part of professional value.'],recommendedResources:[
{title:'How To Secure Your Video Editor Job With Good Client Chemistry',url:'https://www.filmeditingpro.com/the-3-types-of-editors/',type:'Read',free:true},
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
{title:'Kdenlive Exporting',url:'https://docs.kdenlive.org/en/exporting.html',type:'Read',free:true},
] as Resource[],practicalExercise:'20–25 min. Package a completed project into a clean delivery folder. Include exports, README, changelog, and an archive note. Remove temporary cache files. Open the package from a clean location and verify that the documented files are present.'},
],checkpoint:{
brief:'A creator sends you a finished edit plus last-minute notes. Your job is to create a clean client package another editor could understand tomorrow.',
technicalConstraints:['Use folders: 01_Footage, 02_Audio, 03_Graphics, 04_Project, 05_Exports, 06_Deliveries, 07_Archive.','Create at least v1.0 and v1.1; never overwrite v1.0.','Include a changelog and README with deliverables and notes.','Include one master and one web/social export.','Remove caches and temporary files from the handoff package.'],
freePracticeFootage:[
{title:'EditStock — Steward of the Land free sample',url:'https://editstock.com/products/editstock-free-sample-built-by-life',type:'Practice',free:true},
{title:'EditStock free editing practice footage',url:'https://editstock.com/collections/free-projects',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Another editor can locate footage, audio, graphics, project, and exports without asking where they are.','PASS — Version history is understandable from filenames and changelog.','PASS — Delivery folder contains only intended client-facing files plus required project assets.','PASS — The package can be opened and understood from the README alone.']},
},
{
id:'money',stageNumber:7,title:'Money Path',subtitle:'Direct outreach, 30-second audits, offers, retainers, revision boundaries, and client pipeline',goal:'Turn editing skill into a clear commercial offer, targeted outreach process, and repeatable client relationship.',output:'A real service offer, portfolio package, outreach system, and repeatable client-delivery framework.',
lessons:[
{id:'m1',title:'Choose a sellable niche and offer',objective:'Define one service for one buyer type with a clear output and business outcome.',keyConcepts:['An offer should define audience, deliverable, scope, and turnaround.','“Video editor” is a role; a clear package is a productized service.','Choose a niche you can practice and show repeatedly.','The offer should be easy for a prospect to understand in one sentence.'],recommendedResources:[
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'How To Secure Your Video Editor Job With Good Client Chemistry',url:'https://www.filmeditingpro.com/the-3-types-of-editors/',type:'Read',free:true},
{title:'Freelance Video Editor Rates — Video Rate Lab',url:'https://videoratelab.com/guides/freelance-video-editor-rates/',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Write three possible offers for creators or small businesses. For each define buyer, deliverable, turnaround, included revisions, and what problem the edit solves. Choose one to test and publish as a one-paragraph offer.'},
{id:'m2',title:'Build proof that gets reviewed',objective:'Package portfolio pieces so a prospect can judge editing skill quickly.',keyConcepts:['Editors are often evaluated by complete pieces, not only montage reels.','Show work relevant to the service you sell.','Before/after examples can make invisible editing decisions visible.','A portfolio should reduce uncertainty about style, reliability, and scope.'],recommendedResources:[
{title:'The Editor\'s Guide to Demo Reels & Finding Work',url:'https://www.filmeditingpro.com/the-editors-guide-to-demo-reels-finding-work/',type:'Read',free:true},
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
] as Resource[],practicalExercise:'20–25 min. Select 3 strongest edits. For each add a one-sentence brief, your role, the editing problem, and the final link. Create one 30–45s reel only if it supports the pieces rather than replacing them. Output: portfolio page/folder.'},
{id:'m3',title:'Make the 30-second audit spec',objective:'Use a small custom edit to demonstrate value on a prospect’s own content.',keyConcepts:['A spec edit should demonstrate a problem you can solve, not free unlimited labor.','Keep the sample small and clearly labeled as a proof-of-concept.','Show the change: pacing, audio, captions, B-roll, or structure.','A concise comparison makes your value legible before a sales call.'],recommendedResources:[
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'Hayden Hillier-Smith — editing & storytelling breakdowns',url:'https://www.youtube.com/@hilliersmith/videos',type:'Watch',free:true},
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
] as Resource[],practicalExercise:'25–30 min. Find one public creator/business video. Take a 30–45s excerpt that clearly needs editing. Re-edit only that segment. Deliver a before/after view and one paragraph explaining three changes. Keep the spec private/unlisted unless permission allows public posting.'},
{id:'m4',title:'Run targeted outreach',objective:'Build a repeatable direct outreach system instead of sending generic spam.',keyConcepts:['Specific outreach references a real piece of the prospect’s content.','A useful observation is stronger than a generic “I can edit videos” pitch.','Track prospects, date contacted, follow-up, response, and next action.','Outreach volume matters, but relevance and consistency matter too.'],recommendedResources:[
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'How to hire a YouTube team in 2024 — creator hiring discussion',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'How To Secure Your Video Editor Job With Good Client Chemistry',url:'https://www.filmeditingpro.com/the-3-types-of-editors/',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Build a list of 10 prospects whose content matches your offer. For each write one personalized observation and a concise message offering the audit/spec. Log contact date, channel, next follow-up date, and status. Output: 10-row outreach tracker + 10 unique messages.'},
{id:'m5',title:'Package retainers and revision boundaries',objective:'Turn one-off editing into predictable recurring work without leaving scope undefined.',keyConcepts:['Retainers should define monthly deliverables, turnaround, revision rounds, and asset limits.','Revision limits protect both sides from uncontrolled scope.','Extra formats, rush work, and major script/concept changes should be explicit add-ons.','Pricing should reflect total workflow effort, not only the final runtime.'],recommendedResources:[
{title:'Freelance video editor rates & pricing guide (2026)',url:'https://www.videoeditorlist.com/blog/setting-freelance-video-editing-rates',type:'Read',free:true},
{title:'Freelance Video Editor Rates — Video Rate Lab',url:'https://videoratelab.com/guides/freelance-video-editor-rates/',type:'Read',free:true},
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
] as Resource[],practicalExercise:'25 min. Create two sample monthly packages: short-form batch and long-form YouTube. For each specify deliverables, turnaround, included revisions (e.g., up to two rounds), exclusions, and add-ons. Write a one-paragraph scope-change clause.'},
{id:'m6',title:'Operate the client pipeline',objective:'Combine prospecting, sales, delivery, follow-up, and retention into one weekly system.',keyConcepts:['A pipeline tracks where every prospect/client is in the process.','Follow-up should be scheduled rather than remembered.','Repeat clients come from predictable delivery and communication.','A simple tracker is enough until volume requires more tooling.'],recommendedResources:[
{title:'How To Secure Your Video Editor Job With Good Client Chemistry',url:'https://www.filmeditingpro.com/the-3-types-of-editors/',type:'Read',free:true},
{title:'George Blackman — Making It / creator team & hiring insights',url:'https://www.georgeblackman.com/podcast',type:'Read',free:true},
{title:'How to Perfect an Edit with Finishing Touches — Film Editing Pro',url:'https://www.filmeditingpro.com/how-to-perfect-an-edit-with-finishing-touches/',type:'Read',free:true},
] as Resource[],practicalExercise:'20 min. Create pipeline columns: Prospect → Contacted → Replied → Call/Chat → Trial/Spec → Active Client → Retainer → Past Client. Add your current 10 prospects and schedule one follow-up action for each. Output: live tracker + weekly review checklist.'},
],checkpoint:{
brief:'You are launching a small editing service. Your checkpoint is a real sales sprint, not a theoretical business plan.',
technicalConstraints:['Choose one buyer type and one primary offer.','Build a portfolio containing at least 3 relevant finished pieces.','Create one 30-second private audit/spec edit for a real prospect.','Send 10 personalized outreach messages to 10 different prospects.','Track every contact, follow-up date, and outcome in a simple pipeline.'],
freePracticeFootage:[
{title:'Pexels free video library',url:'https://www.pexels.com/videos/',type:'Practice',free:true},
{title:'Mixkit free stock video',url:'https://mixkit.co/free-stock-video/',type:'Practice',free:true},
] as Resource[] as Resource[],selfGradingChecklist:['PASS — Offer is specific enough that a prospect can understand the deliverable without explanation.','PASS — Portfolio pieces match the offer and show finished editing work.','PASS — 10 personalized outreach messages are actually sent and logged.','PASS — Each prospect has a next action/date; no lead is left without a status.']},
},

].map(stage=>stage)

export const allLessons=stages.flatMap(stage=>stage.lessons.map(lesson=>({...lesson,stageId:stage.id,stageNumber:stage.stageNumber,stageTitle:stage.title})))
