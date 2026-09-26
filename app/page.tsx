export interface Resource {
  title: string;
  url: string;
  type: string;
  free?: boolean;
}

export interface Lesson {
  id: string;
  title: string;
  objective: string;
  keyConcepts: string[];
  practicalExercise: string;
  recommendedResources: Resource[];
}

export interface Checkpoint {
  brief: string;
  technicalConstraints: string[];
  freePracticeFootage: { title: string; url: string }[];
  selfGradingChecklist: string[];
}

export interface Stage {
  id: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  goal: string;
  output: string;
  lessons: Lesson[];
  checkpoint: Checkpoint;
}

export const stages: Stage[] = [
  {
    id: "foundation",
    stageNumber: 1,
    title: "Editorial Mindset & Kdenlive Fundamentals",
    subtitle: "Rhythm, cut motivation, low-spec proxies, and keyboard-first cutting",
    goal: "Build core editorial judgment while mastering Kdenlive navigation and low-resource proxies.",
    output: "A tight 60-second dialogue scene cut using keyboard-only shortcuts and proxies.",
    lessons: [
      {
        id: "1-1",
        title: "The Motivation of the Cut",
        objective: "Understand Walter Murch's Rule of Six so every cut has purpose.",
        keyConcepts: [
          "Emotion and story drive cuts before technical continuity",
          "Eye trace: guiding the viewer's attention across frames",
          "Cutting on action to conceal edits invisibly"
        ],
        practicalExercise: "Take two camera angles of someone opening a door and cut on the exact frame the hand turns the handle.",
        recommendedResources: [
          {
            title: "Learn Kdenlive in 30 Minutes - Video Editing Basics",
            url: "https://www.youtube.com/watch?v=zYD0b8LpiQA",
            type: "YouTube",
            free: true
          },
          {
            title: "Cutting on Action Explained by Hollywood Editor",
            url: "https://www.youtube.com/watch?v=5_G_E4k4c0s",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "1-2",
        title: "Low-Spec Optimization & Proxy Workflow",
        objective: "Configure Kdenlive to run at 60fps with zero timeline lag on older PCs.",
        keyConcepts: [
          "Automatic 540p/720p proxy generation for smooth scrubbing",
          "Timeline preview scaling (1/2 and 1/4 resolution)",
          "Timeline Zone Rendering (Shift+I / Shift+O) for real-time preview"
        ],
        practicalExercise: "Import three 1080p clips, generate 540p proxies, and verify stutter-free timeline playback.",
        recommendedResources: [
          {
            title: "Kdenlive Tutorial for Beginners - Proxy Setup",
            url: "https://www.youtube.com/watch?v=YnSE9qgGui4",
            type: "YouTube",
            free: true
          },
          {
            title: "Official Kdenlive Manual — Proxy Clips Configuration",
            url: "https://docs.kdenlive.org/en/project_and_asset_management/project_settings/proxy_clips.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "1-3",
        title: "Three-Point Editing & J/L Cuts",
        objective: "Master seamless dialogue transitions using split audio/video cutting.",
        keyConcepts: [
          "J-Cut: Dialogue begins before cutting to the speaker",
          "L-Cut: Visual cuts to reaction while speech carries over",
          "Setting In (I) and Out (O) markers for keyboard-only assembly"
        ],
        practicalExercise: "Cut a 2-person dialogue sequence utilizing at least two J-cuts and two L-cuts to eliminate robotic back-and-forth edits.",
        recommendedResources: [
          {
            title: "Trimming, Splitting, and J/L Cuts in Video Editing",
            url: "https://www.youtube.com/watch?v=5_G_E4k4c0s",
            type: "YouTube",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Take 3 minutes of raw dialogue footage. Deliver a coherent 60-second scene cut using proxies and keyboard commands only.",
      technicalConstraints: [
        "Maximum runtime: 60 seconds",
        "No visual transitions (straight cuts only)",
        "Minimum 2 J-cuts and 2 L-cuts to smooth dialogue splices",
        "No mouse-based cutting tool (keyboard hotkeys only)"
      ],
      freePracticeFootage: [
        {
          title: "EditStock — The Hallway Free Rushes",
          url: "https://editstock.com/products/the-hallway"
        },
        {
          title: "EditStock Free Project Library",
          url: "https://editstock.com/collections/free-projects"
        }
      ],
      selfGradingChecklist: [
        "Proxies generated and verified with 0 dropped frames",
        "Dialogue flows naturally without audible breath cuts or pops",
        "Cuts match eye trace from previous shot",
        "Exported clean 1080p MP4 using CRF 21"
      ]
    }
  },
  {
    id: "story",
    stageNumber: 2,
    title: "Narrative Structure & Retention Pacing",
    subtitle: "Hooks, pattern interrupts, micro-tension, and vertical layout setup",
    goal: "Transform raw footage into structured content that retains audience attention using pacing dynamics and format adaptability.",
    output: "A 60-second vertical or horizontal story edit with an immediate 3-second hook and clear escalation.",
    lessons: [
      {
        id: "2-1",
        title: "The 3-Second Hook & Retention Graph",
        objective: "Hook the viewer immediately and eliminate drop-off points.",
        keyConcepts: [
          "Information gap theory (creating an open loop)",
          "Eliminating preamble and throat-clearing",
          "Leading with high-stakes visual or sound before introducing context"
        ],
        practicalExercise: "Take a 30-second rambling introduction and trim it down to a 3.5-second hook that compels the viewer to stay.",
        recommendedResources: [
          {
            title: "Why You Click and Why You Stay - Editing Retention",
            url: "https://www.youtube.com/watch?v=uT347dZf_4c",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "2-2",
        title: "Kdenlive Vertical Setup & Time Remapping",
        objective: "Configure high-retention 9:16 workspaces and execute speed ramps.",
        keyConcepts: [
          "Custom 9:16 vertical workspace profiles in Kdenlive for Shorts/TikTok",
          "Time remapping curves (fast transitions into slow-motion impacts)",
          "Using timeline colored markers to rhythmically map cut beats"
        ],
        practicalExercise: "Build a vertical workspace preset in Kdenlive and create a 15-second dynamic action sequence with two speed ramps.",
        recommendedResources: [
          {
            title: "Create Vertical Workspace Layout - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=Qdm7rppCjz8",
            type: "YouTube",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Transform raw unedited footage into a 60–90s story edit featuring an immediate hook, pattern interrupts, and controlled pacing.",
      technicalConstraints: [
        "Core narrative hook resolves within the first 4 seconds",
        "At least one speed ramp to accentuate motion",
        "No decorative memes; pacing alone must maintain attention"
      ],
      freePracticeFootage: [
        {
          title: "Cinestudy Narrative Scene Rushes",
          url: "https://cinestudy.org/category/interactive-projects/"
        }
      ],
      selfGradingChecklist: [
        "Opening 3 seconds establish clear narrative question",
        "Pacing tightens during the middle build-up",
        "Clean resolution with no lingering dead air"
      ]
    }
  },
  {
    id: "audio",
    stageNumber: 3,
    title: "Audio Engineering & Sound Design",
    subtitle: "Noise cleanup, vocal EQ, -14 LUFS, and dynamic music ducking",
    goal: "Make dialogue clean, punchy, and balanced against layered music and sound effects using Kdenlive native audio filters.",
    output: "A 3-stem mixed sequence (Dialogue, Music, SFX) hitting streaming loudness standards.",
    lessons: [
      {
        id: "3-1",
        title: "Dialogue Repair & Noise Suppression",
        objective: "Clean hiss, air conditioning hum, and room noise in Kdenlive.",
        keyConcepts: [
          "High-pass filtering (cutting low-end room rumble under 80Hz)",
          "Noise Suppressor (RNNoise/LADSPA) threshold tuning",
          "Subtle noise reduction without creating robotic vocal artifacts"
        ],
        practicalExercise: "Clean a noisy voice recording, eliminating air conditioner hum while preserving vocal richness.",
        recommendedResources: [
          {
            title: "Boost Your Sound Quality - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=rDGv8WEF87c",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "3-2",
        title: "Loudness Standards & Keyframed Ducking",
        objective: "Balance dialogue, music, and SFX to hit YouTube's -14 LUFS target.",
        keyConcepts: [
          "Dialogue sitting between -12dB and -6dB peak",
          "Music ducking (-18dB to -24dB underneath spoken words)",
          "Master limiter protection (-1.0dB True Peak safety limit)"
        ],
        practicalExercise: "Mix a sequence with speech, background music, and 5 distinct sound effects; verify -14 LUFS export.",
        recommendedResources: [
          {
            title: "Audio Mixing and Metering in Kdenlive",
            url: "https://www.youtube.com/watch?v=rDGv8WEF87c",
            type: "YouTube",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Take poor raw production audio and build a pristine 3-track mix (Dialogue, Music, Foley/SFX) meeting web loudness standards.",
      technicalConstraints: [
        "Integrated loudness must hit -14 LUFS (+/- 1 LUFS)",
        "True Peak must never exceed -1.0 dB",
        "Dialogue must remain crisp and intelligible throughout music crescendos"
      ],
      freePracticeFootage: [
        {
          title: "Freesound.org — Creative Commons Audio Assets",
          url: "https://freesound.org/"
        }
      ],
      selfGradingChecklist: [
        "Low-frequency rumble removed with High Pass filter",
        "Music volume ducks automatically when voice is present",
        "Zero digital clipping or distortion on master output"
      ]
    }
  },
  {
    id: "color",
    stageNumber: 4,
    title: "Color Correction, Grading & Visual Polish",
    subtitle: "Scopes, white balance, Lift/Gamma/Gain wheels, and skin tone calibration",
    goal: "Correct exposure, balance white balance, and match multi-camera shots using Kdenlive's RGB Parade and Vectorscope.",
    output: "A 3-clip multi-camera sequence with uniform skin tones and consistent contrast.",
    lessons: [
      {
        id: "4-1",
        title: "Reading Scopes & Primary Correction",
        objective: "Balance exposure and white balance using objective scopes rather than uncalibrated displays.",
        keyConcepts: [
          "RGB Parade: balancing shadow and highlight channels",
          "Vectorscope: aligning skin tones along the 10 o'clock line",
          "Lift (Shadows), Gamma (Midtones), Gain (Highlights)"
        ],
        practicalExercise: "Take an underexposed, orange-tinted clip and balance black points to 0, white points to 100, and align skin tones.",
        recommendedResources: [
          {
            title: "Color Grading & Correction Basics - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=Gi5AETqAY48",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "4-2",
        title: "Stylized Looks, Bloom & Secondary Grading",
        objective: "Add filmic depth, dreamy highlight blooms, and subtle vignettes.",
        keyConcepts: [
          "Soft halation and highlight blooms using blend modes (Screen/Softlight)",
          "Guiding viewer eye trace with subtle vignettes",
          "Applying and dialing in 3D LUTs cleanly"
        ],
        practicalExercise: "Grade a scene to create a soft filmic glow around highlights without crushing shadow details.",
        recommendedResources: [
          {
            title: "Color Correction in Kdenlive — Nuxttux Masterclass",
            url: "https://www.youtube.com/watch?v=zKisJAr5noQ",
            type: "YouTube",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Color match 3 mismatched camera clips shot under different lighting and deliver a consistent, calibrated visual grade.",
      technicalConstraints: [
        "All 3 clips must share matching skin tone hue on vectorscope",
        "Zero crushed shadows (< 0) or clipped whites (> 100) on RGB parade",
        "Grade must feel cohesive across all cuts"
      ],
      freePracticeFootage: [
        {
          title: "EditStock Free Project Library",
          url: "https://editstock.com/collections/free-projects"
        }
      ],
      selfGradingChecklist: [
        "RGB parade shows balanced channels across highlights and shadows",
        "Skin tones land squarely on vectorscope indicator line",
        "No digital banding or artifacting from over-grading"
      ]
    }
  },
  {
    id: "motion",
    stageNumber: 5,
    title: "Motion Graphics, Masking & Animation",
    subtitle: "Transform easing, rotoscope transitions, Glaxnimate/Friction vectors, and kinetic text",
    goal: "Create high-retention 2D motion graphics, animated document highlights, and seamless masking transitions that run smoothly on low-spec PCs.",
    output: "A 30-second motion-led explainer with zero live-action camera footage.",
    lessons: [
      {
        id: "5-1",
        title: "Keyframe Dynamics & Velocity Easing",
        objective: "Eliminate stiff linear motion using smooth Bezier curves and overshoots.",
        keyConcepts: [
          "Linear vs. Smooth keyframe interpolation",
          "Velocity curves: snappy acceleration with cushioned stops (ease-out)",
          "Dynamic zooms and punch-ins synced to speech emphasis"
        ],
        practicalExercise: "Animate an image punching in with a fast snap and cushioned stop, timed with an audio whoosh effect.",
        recommendedResources: [
          {
            title: "Masking & Transition Effects Editing - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=tHzP9kJQJeg",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "5-2",
        title: "Masking Transitions & Object Isolations",
        objective: "Wipe between scenes using foreground objects and rotoscoping.",
        keyConcepts: [
          "Using foreground pillars, people, or walls as natural wipes",
          "Rotoscoping subjects to sandwich text and graphics behind them",
          "Split-view and multi-frame compositions"
        ],
        practicalExercise: "Create a seamless transition where an actor walking across the frame reveals the next scene behind their back.",
        recommendedResources: [
          {
            title: "Masking & Transition Effects Editing - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=tHzP9kJQJeg",
            type: "YouTube",
            free: true
          }
        ]
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
        practicalExercise: "Create a digital yellow highlighter animation that underlines a newspaper sentence as voiceover reads it.",
        recommendedResources: [
          {
            title: "Friction & Vector Animation Workflow for Kdenlive",
            url: "https://www.youtube.com/watch?v=tHzP9kJQJeg",
            type: "YouTube",
            free: true
          }
        ]
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
      freePracticeFootage: [
        {
          title: "Wikimedia Commons & Library of Congress Archival Assets",
          url: "https://commons.wikimedia.org/"
        }
      ],
      selfGradingChecklist: [
        "Text and graphic pop-ins feel snappy with cushioned stops",
        "Document highlight accurately tracks voiceover pacing",
        "SFX pops and whooshes sync precisely to visual keyframes"
      ]
    }
  },
  {
    id: "workflow",
    stageNumber: 6,
    title: "Production Speed, Templates & Delivery",
    subtitle: "Project taxonomies, subtitle automation, custom templates, and render masters",
    goal: "Double your editing speed through organized file structures, reusable presets, and clean client delivery exports.",
    output: "A client-ready master project directory with versioned exports and automated subtitles.",
    lessons: [
      {
        id: "6-1",
        title: "Taxonomy & Asset Management",
        objective: "Establish an unbreakable project folder structure so projects never lose media links.",
        keyConcepts: [
          "Standardized numerical folders (01_Footage, 02_Audio, 03_Graphics, 04_Exports)",
          "Relative vs. absolute pathing in Kdenlive project files (.kdenlive)",
          "Managing disk cache and cleaning render bloat"
        ],
        practicalExercise: "Build an automated project folder template and test archiving a project without broken file links.",
        recommendedResources: [
          {
            title: "Kdenlive Project Organization & Workspace Settings",
            url: "https://www.youtube.com/watch?v=zYD0b8LpiQA",
            type: "YouTube",
            free: true
          }
        ]
      },
      {
        id: "6-2",
        title: "Automated Subtitling & Master Encoding",
        objective: "Generate synchronized captions and export optimized web masters.",
        keyConcepts: [
          "Speech-to-text automated transcription in Kdenlive",
          "Styling subtitles for high readability on mobile devices",
          "Exporting lightweight H.264/MP4 files using CRF encoding"
        ],
        practicalExercise: "Transcribe a 60-second video automatically, format styling to yellow/white bold, and export with CRF 21.",
        recommendedResources: [
          {
            title: "Official Kdenlive Documentation — Subtitle Tool",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/subtitles.html",
            type: "Documentation",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Package and export a full client project: structured folders, stylized captions, and two version-controlled deliverables (v1.0 and v1.1).",
      technicalConstraints: [
        "Project folder must contain zero orphaned files outside the root directory",
        "Subtitles must be burnt in or exported as clean SRT without spelling flaws",
        "Delivery files must follow naming: ClientName_Project_v1.0_1080p.mp4"
      ],
      freePracticeFootage: [
        {
          title: "Personal Portfolio Practice Session",
          url: "https://github.com/Olaano/Video-editing-"
        }
      ],
      selfGradingChecklist: [
        "Directory conforms strictly to standardized numerical structure",
        "Subtitles are centered, styled, and timed to voice cadence",
        "Exported file balances crisp 1080p quality with a compact file size"
      ]
    }
  },
  {
    id: "money",
    stageNumber: 7,
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
          "Finding creators with weak pacing, flat audio, or static b-roll",
          "Re-editing 30 seconds of their content with motion, sound, and retention hooks"
        ],
        practicalExercise: "Pick a creator in your target niche, download 60 seconds of their video, and build a high-retention 30-second re-edit.",
        recommendedResources: [
          {
            title: "How to Actually Land Video Editing Clients",
            url: "https://www.youtube.com/watch?v=uT347dZf_4c",
            type: "YouTube",
            free: true
          }
        ]
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
        practicalExercise: "Draft a 1-page service agreement outlining deliverable count, turnaround time (48 hours), and revision limits.",
        recommendedResources: [
          {
            title: "Pricing & Retainer Strategies for Video Editors",
            url: "https://www.youtube.com/watch?v=uT347dZf_4c",
            type: "YouTube",
            free: true
          }
        ]
      }
    ],
    checkpoint: {
      brief: "Produce a custom 30-second spec edit for a target creator or business, package your portfolio, and execute 10 direct outreach pitches.",
      technicalConstraints: [
        "Spec edit must feature: dynamic hook, clean audio ducking, kinetic text, and document/motion callouts",
        "Pitch message must be under 150 words and include a private unlisted video link",
        "Minimum 10 personalized pitches sent to real creators/brands"
      ],
      freePracticeFootage: [
        {
          title: "Target Creator Public VOD / Podcast Clip",
          url: "https://youtube.com"
        }
      ],
      selfGradingChecklist: [
        "Portfolio showcases 3 distinct proof pieces (Story, Motion Explainer, Spec Edit)",
        "Outreach pitch highlights viewer retention and time saved rather than software",
        "Outreach tracker log created with date, contact, and follow-up schedule"
      ]
    }
  }
];

// This line fixes the line 5 import error in app/page.tsx:
export const allLessons: Lesson[] = stages.flatMap((stage) => stage.lessons);

export default stages;
