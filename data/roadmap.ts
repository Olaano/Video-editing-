export interface Lesson {
  id: string;
  title: string;
  objective: string;
  keyConcepts: string[];
  kdenliveTool: string;
  recommendedResources: { title: string; channel: string; url: string }[];
  practicalExercise: string;
}

export interface Checkpoint {
  brief: string;
  technicalConstraints: string[];
  practiceFootageUrl: string;
  practiceFootageName: string;
  checklist: string[];
}

export interface Stage {
  id: string;
  stageNumber: string;
  title: string;
  subtitle: string;
  goal: string;
  output: string;
  lessons: Lesson[];
  checkpoint: Checkpoint;
}

export const ROADMAP_STAGES: Stage[] = [
  {
    id: "foundation",
    stageNumber: "01",
    title: "Editorial Mindset & Kdenlive Fundamentals",
    subtitle: "Rhythm, cut motivation, proxy setup, and keyboard-first cutting",
    goal: "Learn why and when to cut while configuring a blazing-fast Kdenlive editing environment on low-resource hardware.",
    output: "A tight 60-second scene cut using keyboard-only workflow and proxies.",
    lessons: [
      {
        id: "1-1",
        title: "The Motivation of the Cut",
        objective: "Understand Walter Murch's Rule of Six to ensure every cut serves meaning.",
        keyConcepts: [
          "Emotion over technical continuity",
          "Eye trace and audience attention tracking",
          "Cutting on action to disguise edits"
        ],
        kdenliveTool: "Razor tool ('C'), Timeline Splice, Ripple Delete ('Shift + Del')",
        recommendedResources: [
          {
            title: "Learn Kdenlive in 30 Minutes - Video Editing Basics",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          },
          {
            title: "Cutting on Action Explained by Hollywood Editor",
            channel: "This Guy Edits",
            url: "https://www.youtube.com/@ThisGuyEdits"
          }
        ],
        practicalExercise: "Take two angles of a person walking through a door. Cut on the exact frame the hand turns the knob."
      },
      {
        id: "1-2",
        title: "Low-Spec Optimization & Proxy Workflow",
        objective: "Configure Kdenlive for zero timeline lag on older PCs.",
        keyConcepts: [
          "Proxy clips vs. raw footage decoding",
          "Preview resolution scaling (1/2 and 1/4 timeline render)",
          "Timeline Zone Rendering for real-time playback"
        ],
        kdenliveTool: "Project Settings -> Proxy Clips (Automatic Generation) & Timeline Zone Render ('Shift + I/O')",
        recommendedResources: [
          {
            title: "Beginner Editing Advice - Edit Like a Pro in Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Import three 1080p clips, configure 540p proxy generation, and verify 60fps fluid scrubbing."
      },
      {
        id: "1-3",
        title: "Three-Point Editing & J/L Cuts",
        objective: "Master seamless dialogue transitions using split audio/video cuts.",
        keyConcepts: [
          "J-Cut: Hearing dialogue before seeing the speaker",
          "L-Cut: Seeing reaction while dialogue continues",
          "Keyboard 3-point edits using In ('I'), Out ('O'), and Insert"
        ],
        kdenliveTool: "Audio/Video Track Decoupling, Split Audio Trimming, In/Out Monitor Marking",
        recommendedResources: [
          {
            title: "Video Editing Basics - Trimming and Snapping",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Cut a 2-person dialogue sequence using at least three J-cuts and two L-cuts to eliminate robotic ping-pong cutting."
      }
    ],
    checkpoint: {
      brief: "Take 3 minutes of raw dialogue footage. Deliver a coherent 60-second scene cut using proxies and keyboard commands only.",
      technicalConstraints: [
        "Maximum runtime: 60 seconds",
        "No visual transitions (straight cuts only)",
        "Minimum 3 J/L cuts to hide audio splices",
        "Zero mouse-based blade cuts (keyboard hotkeys only)"
      ],
      practiceFootageName: "EditStock — The Hallway Free Rushes",
      practiceFootageUrl: "https://editstock.com/products/the-hallway",
      checklist: [
        "Proxies generated and verified with 0 dropped frames",
        "Dialogue flows naturally without audible gaps or breath cuts",
        "Every cut matches eye trace from previous frame",
        "Rendered clean H.264 export in under 60 seconds"
      ]
    }
  },
  {
    id: "story",
    stageNumber: "02",
    title: "Narrative Structure & Retention Pacing",
    subtitle: "Hooks, pattern interrupts, micro-tension, and time remapping",
    goal: "Shape rambling footage into structured content that retains attention using deliberate pacing and speed dynamics.",
    output: "A 60-second narrative sequence with a 3-second hook and clear escalation.",
    lessons: [
      {
        id: "2-1",
        title: "The 3-Second Hook & Retention Graph",
        objective: "Hook the viewer immediately and eliminate drop-off points.",
        keyConcepts: [
          "Information gap theory (open loops)",
          "Removing throat-clearing and preamble",
          "Audio-first hook design"
        ],
        kdenliveTool: "Timeline Markers (colored notes for pacing beats), Ripple Trim",
        recommendedResources: [
          {
            title: "Why You Click and Why You Stay",
            channel: "Hayden Hillier-Smith",
            url: "https://www.youtube.com/@HillierSmith"
          }
        ],
        practicalExercise: "Condense a 30-second rambling introduction down to a punchy 3.5-second hook that states the core stakes."
      },
      {
        id: "2-2",
        title: "Pacing Dynamics & Time Remapping",
        objective: "Use speed ramping and beat matching to alter viewer perception of time.",
        keyConcepts: [
          "Linear vs. exponential speed ramps",
          "Speeding through transition movements, slowing on impact",
          "Cutting on rhythm without becoming a slave to music beats"
        ],
        kdenliveTool: "Time Remapping Effect (Speed & Slow Curves), Clip Speed change",
        recommendedResources: [
          {
            title: "Speed and Slow with Time Remapping in Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Create a 15-second dynamic action sequence incorporating two smooth speed ramps to accentuate movement."
      }
    ],
    checkpoint: {
      brief: "Transform raw footage into a 60–90s story edit featuring an immediate hook, pattern interrupts, and controlled pacing.",
      technicalConstraints: [
        "Hook resolves within first 4 seconds",
        "At least one speed-ramped action transition",
        "No visual clutter or pointless memes; pacing must carry the energy"
      ],
      practiceFootageName: "Cinestudy Narrative Rushes",
      practiceFootageUrl: "https://cinestudy.org/category/interactive-projects/",
      checklist: [
        "First 3 seconds create an open narrative question",
        "Energy escalates in the middle third without dragging",
        "Ending delivers a clean resolution"
      ]
    }
  },
  {
    id: "audio",
    stageNumber: "03",
    title: "Audio Engineering & Sound Design",
    subtitle: "Noise cleanup, EQ, compression, -14 LUFS, and ducking in Kdenlive",
    goal: "Make voice recordings clean, punchy, and balanced against layered music and sound effects.",
    output: "A fully mixed audio stem hitting broadcast and streaming loudness standards.",
    lessons: [
      {
        id: "3-1",
        title: "Dialogue Repair & Noise Suppression",
        objective: "Clean hum, hiss, and room echo using Kdenlive's audio filters.",
        keyConcepts: [
          "High-pass filtering (cutting sub-80Hz rumble)",
          "Noise gate threshold tuning to cut room tone between words",
          "Subtle noise reduction without robotic phase artifacts"
        ],
        kdenliveTool: "High Pass Filter, Noise Suppressor (RNNoise/LADSPA), Gate effect",
        recommendedResources: [
          {
            title: "How To Reduce Background Noise In Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          },
          {
            title: "Dialogue EQ & Cleaning Masterclass",
            channel: "Curtis Judd",
            url: "https://www.youtube.com/@curtisjudd"
          }
        ],
        practicalExercise: "Clean a noisy voice recording, removing air conditioning hum while keeping vocal clarity natural."
      },
      {
        id: "3-2",
        title: "Audio Mixing, Ducking & LUFS Normalization",
        objective: "Balance dialogue, music, and SFX to hit YouTube's -14 LUFS standard.",
        keyConcepts: [
          "Dialogue sitting between -12dB and -6dB peak",
          "Music ducking (-18dB to -24dB beneath dialogue)",
          "Integrated loudness vs. true peak (-1.0dB true peak safety)"
        ],
        kdenliveTool: "Audio Mixer panel, Volume (Keyframeable Ducking), Master Limiter, Loudness Meter",
        recommendedResources: [
          {
            title: "Audio Mixing and Track Management in Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Mix a sequence with speech, background music, and 5 distinct sound effects; verify -14 LUFS export."
      }
    ],
    checkpoint: {
      brief: "Take poor raw production audio and build a pristine, 3-track mix (Dialogue, Music, Foley/SFX) adhering to web loudness specs.",
      technicalConstraints: [
        "Integrated loudness must hit -14 LUFS (+/- 1 LUFS)",
        "True Peak must not exceed -1.0 dB",
        "Dialogue must remain intelligible through all music sections"
      ],
      practiceFootageName: "Freesound.org & Free Production Dialogue Rushes",
      practiceFootageUrl: "https://freesound.org/",
      checklist: [
        "Low-frequency rumble eliminated via High Pass filter",
        "Music ducks smoothly when dialogue speaks",
        "No audio clipping or distortion on master output"
      ]
    }
  },
  {
    id: "color",
    stageNumber: "04",
    title: "Color Correction, Grading & Visual Polish",
    subtitle: "Scopes, white balance, Lift/Gamma/Gain wheels, and stylized looks",
    goal: "Correct exposure, match shots from different cameras, and apply deliberate mood grading using Kdenlive scopes.",
    output: "A multi-shot sequence with balanced skin tones, uniform contrast, and a filmic look.",
    lessons: [
      {
        id: "4-1",
        title: "Reading Scopes & Primary Correction",
        objective: "Normalize exposure and color balance using objective scopes rather than uncalibrated monitors.",
        keyConcepts: [
          "RGB Parade for balancing white and black points",
          "Vectorscope for skin tone line calibration",
          "Lift (Shadows), Gamma (Midtones), Gain (Highlights)"
        ],
        kdenliveTool: "RGB Parade, Vectorscope, Color Wheels (Lift/Gamma/Gain), White Balance effect",
        recommendedResources: [
          {
            title: "Color Correction & Grading - Kdenlive Effects Tutorial",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          },
          {
            title: "How to Read Scopes for Color Grading",
            channel: "Cullen Kelly",
            url: "https://www.youtube.com/@CullenKelly"
          }
        ],
        practicalExercise: "Take an underexposed, orange-tinted clip and balance black points to 0, white points to 100, and align skin tones to the vectorscope line."
      },
      {
        id: "4-2",
        title: "Stylized Looks, Bloom & Halation",
        objective: "Create filmic depth and subtle dreamy glows using secondary effects.",
        keyConcepts: [
          "Soft halation and dreamy bloom on highlights",
          "Vignettes for directing viewer focus",
          "Applying and adjusting 3D LUTs cleanly"
        ],
        kdenliveTool: "Blur / Blend modes (Screen/Softlight), Apply LUT, Vignette effect",
        recommendedResources: [
          {
            title: "Create Dreamy Look Effect - Kdenlive Tutorial",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Grade a daylight scene to create a soft filmic glow around highlights without crushing shadow details."
      }
    ],
    checkpoint: {
      brief: "Color match 3 mismatched camera clips shot under different lighting and deliver a consistent, calibrated visual grade.",
      technicalConstraints: [
        "All 3 clips must share identical black level and skin tone hue on vectorscope",
        "Zero crushed shadows (< 0) or clipped whites (> 100) on RGB parade",
        "Grade must feel cohesive and natural across cuts"
      ],
      practiceFootageName: "EditStock Color Practice Footage",
      practiceFootageUrl: "https://editstock.com/collections/free-projects",
      checklist: [
        "RGB parade shows balanced channels across highlights and shadows",
        "Skin tones land squarely on vectorscope indicator line",
        "No digital banding or artifacting from over-grading"
      ]
    }
  },
  {
    id: "motion",
    stageNumber: "05",
    title: "Motion Graphics, Masking & Animation",
    subtitle: "Transform easing, rotoscope transitions, Glaxnimate vectors, and kinetic text",
    goal: "Create high-retention 2D motion graphics, animated document highlights, and seamless masking transitions.",
    output: "A 30-second motion-led explainer with zero live-action camera footage.",
    lessons: [
      {
        id: "5-1",
        title: "Keyframe Dynamics & Velocity Easing",
        objective: "Eliminate robotic linear movement using smooth Bezier curves and overshoots.",
        keyConcepts: [
          "Linear vs. Smooth keyframe interpolation",
          "Speed curves: fast acceleration, cushioned arrival (ease-out)",
          "Dynamic zooms and punch-ins for emphasis"
        ],
        kdenliveTool: "Transform Effect (Keyframe curves: Smooth/Exponential), Zoom Keyframes",
        recommendedResources: [
          {
            title: "Zoom Keyframes & Transform Motion in Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          },
          {
            title: "The Principles of Animation in Motion Design",
            channel: "Ben Marriott",
            url: "https://www.youtube.com/@BenMarriott"
          }
        ],
        practicalExercise: "Animate an image punching in with a fast snap and cushioned stop, timed with an audio whoosh effect."
      },
      {
        id: "5-2",
        title: "Masking Transitions & Object Isolations",
        objective: "Wipe between scenes using foreground objects and rotoscoping.",
        keyConcepts: [
          "Using foreground pillars, walls, or bodies as natural wipes",
          "Rotoscoping subjects to sandwich text and graphics behind them",
          "Split-view and multi-frame compositions"
        ],
        kdenliveTool: "Rotoscoping Effect, Mask Apply, Split Screen / Crop effects",
        recommendedResources: [
          {
            title: "Masking & Transition Effects Editing - Kdenlive Tutorial",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          },
          {
            title: "Split View - Kdenlive Effects",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Create a seamless transition where an actor walking across the frame reveals the next scene behind their back."
      },
      {
        id: "5-3",
        title: "Vector Animation with Glaxnimate & Friction",
        objective: "Build lightweight vector icons, arrows, and shape morphs that render instantly on low-spec PCs.",
        keyConcepts: [
          "Vector graphics vs. heavy raster video rendering",
          "Animated path drawing (highlighter strokes across documents)",
          "Exporting Lottie/SVG paths directly into Kdenlive timelines"
        ],
        kdenliveTool: "Kdenlive Animation Clip (Glaxnimate integration), Shape Morphing",
        recommendedResources: [
          {
            title: "Shape Morphing & Animation for Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Create a digital yellow highlighter animation that underlines a newspaper sentence as voiceover reads it."
      }
    ],
    checkpoint: {
      brief: "Build a 30-second documentary or tech explainer snippet containing animated text, a document highlight, and sound-accented motion.",
      technicalConstraints: [
        "Zero raw camera footage allowed (graphics, documents, text, and b-roll only)",
        "Every graphic element must use smooth easing curves (no linear stops)",
        "Minimum 1 vector path animation (Glaxnimate highlighter or shape)",
        "All visual movements must have corresponding subtle sound effects"
      ],
      practiceFootageName: "Wikimedia Commons & Library of Congress Archival Assets",
      practiceFootageUrl: "https://commons.wikimedia.org/",
      checklist: [
        "Text and graphic pop-ins feel snappy with cushioned stops",
        "Document highlight accurately tracks voiceover pacing",
        "SFX pops and whooshes sync precisely to visual keyframes"
      ]
    }
  },
  {
    id: "workflow",
    stageNumber: "06",
    title: "Production Speed, Templates & Delivery",
    subtitle: "Project structures, subtitle automation, custom templates, and render master",
    goal: "Double your editing speed through organized file structures, reusable presets, and clean client delivery exports.",
    output: "A client-ready master project directory with versioned exports and automated subtitles.",
    lessons: [
      {
        id: "6-1",
        title: "Taxonomy & Asset Management",
        objective: "Establish an unbreakable project folder structure so projects never break or lose paths.",
        keyConcepts: [
          "Standardized folder numbering (01_Footage, 02_Audio, 03_Graphics, 04_Exports)",
          "Relative vs. absolute pathing in Kdenlive project files (.kdenlive)",
          "Managing disk cache and cleaning render bloat"
        ],
        kdenliveTool: "Kdenlive Project Archive tool, Cache Data Manager",
        recommendedResources: [
          {
            title: "Professional Project Organization for Video Editors",
            channel: "Film Editing Pro",
            url: "https://www.youtube.com/@FilmEditingPro"
          }
        ],
        practicalExercise: "Build an automated bash folder template and test archiving a project without broken file links."
      },
      {
        id: "6-2",
        title: "Automated Subtitling & Master Encoding",
        objective: "Generate synchronized captions and export optimized web masters.",
        keyConcepts: [
          "Speech-to-text automated transcription",
          "Styling subtitles for high readability on mobile devices",
          "Exporting high-quality, lightweight H.264/MP4 files (CRF encoding)"
        ],
        kdenliveTool: "Kdenlive Subtitle Tool (VOSK / Whisper speech-to-text), Render Dialog (CRF quality settings)",
        recommendedResources: [
          {
            title: "Add Text & Subtitles to Videos in Kdenlive",
            channel: "Nuxttux Creative Studio",
            url: "https://www.youtube.com/@nuxttux"
          }
        ],
        practicalExercise: "Transcribe a 60-second video automatically, format styling to yellow/white bold, and export with CRF 21."
      }
    ],
    checkpoint: {
      brief: "Package and export a full client project: structured folders, stylized captions, and two version-controlled deliverables (v1.0 and v1.1).",
      technicalConstraints: [
        "Project folder must contain no orphaned files outside the root directory",
        "Subtitles must be burnt in or exported as clean SRT without spelling flaws",
        "Delivery files must follow naming: ClientName_Project_v1.0_1080p.mp4"
      ],
      practiceFootageName: "Personal Portfolio Multi-Cam Session",
      practiceFootageUrl: "https://github.com/Olaano/Video-editing-",
      checklist: [
        "Directory conforms strictly to standardized numerical structure",
        "Subtitles are centered, styled, and timed to voice cadence",
        "Exported file balances crisp 1080p quality with a compact file size"
      ]
    }
  },
  {
    id: "money",
    stageNumber: "07",
    title: "Client Acquisition & The High-Ticket Money Path",
    subtitle: "The 30s spec audit, retainer packages, revision contracts, and direct outreach",
    goal: "Package your editing and motion skills into a compelling service that wins recurring monthly clients.",
    output: "A live portfolio, a 30-second custom spec edit, and 10 sent outreach pitches.",
    lessons: [
      {
        id: "7-1",
        title: "The 30-Second Spec Audit Strategy",
        objective: "Pitch creators and brands with undeniable proof rather than generic cold messages.",
        keyConcepts: [
          "Why generic resumes get ignored",
          "Finding creators with weak pacing, bad audio, or static b-roll",
          "Re-editing 30 seconds of their content with motion, sound, and retention hooks"
        ],
        kdenliveTool: "Side-by-side comparison sequence (Split View effect)",
        recommendedResources: [
          {
            title: "How to Actually Land Video Editing Clients",
            channel: "Finzar",
            url: "https://www.youtube.com/@Finzar"
          },
          {
            title: "How Top Creators Hire Editors",
            channel: "Think Media",
            url: "https://www.youtube.com/@ThinkMediaTV"
          }
        ],
        practicalExercise: "Pick a creator in your target niche, download 60 seconds of their video, and build a high-retention 30-second re-edit."
      },
      {
        id: "7-2",
        title: "Packaging Retainers & Managing Revision Scope",
        objective: "Charge flat monthly retainers and establish strict revision boundaries.",
        keyConcepts: [
          "Why hourly rates penalize fast editors",
          "Retainer structure (e.g., $800/mo for 8 polished short-form videos)",
          "The 2-revision limit rule and change-order pricing"
        ],
        kdenliveTool: "Exporting review cuts with timecode overlays",
        recommendedResources: [
          {
            title: "The Business of Freelance Video Editing",
            channel: "George Blackman",
            url: "https://www.youtube.com/@GeorgeBlackman"
          }
        ],
        practicalExercise: "Draft a 1-page service agreement outlining deliverable count, turnaround time (48 hours), and revision limits."
      }
    ],
    checkpoint: {
      brief: "Produce a custom 30-second spec edit for a target creator or business, package your portfolio, and execute 10 direct outreach pitches.",
      technicalConstraints: [
        "Spec edit must feature: dynamic hook, clean audio ducking, kinetic text, and document/motion callouts",
        "Pitch message must be under 150 words and include a private Loom or unlisted YouTube link",
        "Minimum 10 personalized pitches sent to real creators/brands"
      ],
      practiceFootageName: "Target Creator Public VOD / Podcast Clip",
      practiceFootageUrl: "https://youtube.com",
      checklist: [
        "Portfolio showcases 3 distinct proof pieces (Story, Motion Explainer, Spec Edit)",
        "Outreach pitch highlights viewer retention and time saved rather than software",
        "Outreach tracker log created with date, contact, and follow-up schedule"
      ]
    }
  }
];
