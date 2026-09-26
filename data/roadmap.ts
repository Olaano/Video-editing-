export interface Resource {
  title: string;
  url: string;
  type: 'YouTube' | 'Documentation' | 'Article' | 'Practice' | 'Tool';
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
    goal: "Build core editorial judgment while mastering Kdenlive navigation, timeline shortcuts, and low-resource proxy setups.",
    output: "A tight 60-second dialogue scene cut using keyboard-only shortcuts and proxies.",
    lessons: [
      {
        id: "1-1",
        title: "The Motivation of the Cut",
        objective: "Understand Walter Murch's Rule of Six so every cut serves narrative meaning.",
        keyConcepts: [
          "Emotion and story drive cuts before technical continuity",
          "Eye trace: guiding the viewer's attention across frames",
          "Cutting on action to conceal edits invisibly"
        ],
        practicalExercise: "Take two camera angles of someone opening a door and cut on the exact frame the hand turns the handle.",
        recommendedResources: [
          {
            title: "Beginner Editing Advice - Edit Like a Pro",
            url: "https://www.youtube.com/watch?v=tKNQv2GBRoc",
            type: "YouTube",
            free: true
          },
          {
            title: "Walter Murch's Rule of Six Tested by Hollywood Editor",
            url: "https://www.youtube.com/watch?v=0_rHsWleVmw",
            type: "YouTube",
            free: true
          },
          {
            title: "Walter Murch's Rule of Six for Film Editing",
            url: "https://www.studiobinder.com/blog/walter-murch-rule-of-six/",
            type: "Article",
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
          },
          {
            title: "Optimizing Video Editing on Low-Resource Linux Systems",
            url: "https://librearts.org/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "1-3",
        title: "Three-Point Editing & Timeline Hotkeys",
        objective: "Master keyboard assembly to double cutting speed without touching the mouse blade tool.",
        keyConcepts: [
          "Setting In ('I') and Out ('O') markers on source monitor",
          "Overwrite ('V') and Insert ('B') assembly commands",
          "Ripple delete hotkeys ('Shift + Del') to remove dead time"
        ],
        practicalExercise: "Assemble a 30-second sequence using only keyboard shortcuts without dragging clips with the mouse.",
        recommendedResources: [
          {
            title: "How to become a GREAT film editor",
            url: "https://www.youtube.com/watch?v=KTYvBOcIeIQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Kdenlive Default Keyboard Shortcuts Reference Guide",
            url: "https://docs.kdenlive.org/en/getting_started/shortcuts.html",
            type: "Documentation",
            free: true
          },
          {
            title: "Speed Editing Drills: Three-Point Assembly",
            url: "https://nofilmschool.com/3-point-editing",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "1-4",
        title: "Pacing Foundations & Shot Duration",
        objective: "Control how long each shot stays on screen to govern audience tension.",
        keyConcepts: [
          "Information density: cutting away once the viewer absorbs the visual",
          "Breathing room vs. fast-paced momentum",
          "Avoiding the monotony of uniform shot lengths"
        ],
        practicalExercise: "Take a 45-second scene and create two versions: one rushed (under 20s) and one balanced (30s); note the emotional difference.",
        recommendedResources: [
          {
            title: "Continuity Editing, Montage, the Rule of Six, and MORE!",
            url: "https://www.youtube.com/watch?v=iezpPhePim8",
            type: "YouTube",
            free: true
          },
          {
            title: "The Psychology of Film Pacing & Rhythm",
            url: "https://www.studiobinder.com/blog/film-pacing/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "1-5",
        title: "J-Cuts, L-Cuts & Audio Overlaps",
        objective: "Use split edits to make dialogue scenes sound natural and cinematic.",
        keyConcepts: [
          "J-Cut: Dialogue begins before cutting visually to the speaker",
          "L-Cut: Visual cuts to a reaction while the previous line finishes",
          "Decoupling audio and video tracks in Kdenlive for independent trimming"
        ],
        practicalExercise: "Edit an interview clip using two J-cuts and two L-cuts to eliminate unnatural ping-pong cuts.",
        recommendedResources: [
          {
            title: "Cuts and Transitions Breakdown",
            url: "https://www.youtube.com/watch?v=c_E_6Bst-DM",
            type: "YouTube",
            free: true
          },
          {
            title: "What is an L Cut & J Cut — Definition and Examples",
            url: "https://www.studiobinder.com/blog/j-cut-l-cut-video-editing/",
            type: "Article",
            free: true
          },
          {
            title: "Kdenlive Manual — Split Audio and Video Tracks",
            url: "https://docs.kdenlive.org/en/cutting_and_assembling/timeline.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "1-6",
        title: "The Radio Edit & First Assembly",
        objective: "Build an edit that works entirely on audio before placing b-roll or visual cutaways.",
        keyConcepts: [
          "The Radio Edit: cutting spoken dialogue until it sounds fluid with closed eyes",
          "Removing filler words ('um', 'uh', repetitions) without unnatural cadence breaks",
          "Establishing the narrative spine before adding visuals"
        ],
        practicalExercise: "Cut a 3-minute rambling voice recording down to a clean 60-second narrative spine with zero visuals attached.",
        recommendedResources: [
          {
            title: "When Editing Ruins Your Video | MasterClass on What NOT to Do",
            url: "https://www.youtube.com/watch?v=IROKEjmIIlM",
            type: "YouTube",
            free: true
          },
          {
            title: "The Assembly Edit Stage: From Raw Rushes to Rough Cut",
            url: "https://blog.frame.io/2017/09/27/stages-of-editing-assembly/",
            type: "Article",
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
        title: "The 3-Second Hook & Retention Psychology",
        objective: "Hook the viewer immediately and eliminate drop-off points.",
        keyConcepts: [
          "Information gap theory (creating an open loop)",
          "Eliminating preamble and throat-clearing",
          "Leading with high-stakes visual or sound before introducing context"
        ],
        practicalExercise: "Take a 30-second rambling introduction and trim it down to a 3.5-second hook that compels the viewer to stay.",
        recommendedResources: [
          {
            title: "Editing Secrets Hayden Hillier-Smith Uses To Hook You Forever",
            url: "https://www.youtube.com/watch?v=2MovKHjZxjY",
            type: "YouTube",
            free: true
          },
          {
            title: "The First 5 Seconds: Hook Mechanics for Online Video",
            url: "https://creatorhooks.com/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "2-2",
        title: "Open Loops & Narrative Escalation",
        objective: "Maintain engagement across the middle section of a video.",
        keyConcepts: [
          "Planting questions early and delaying the payoff",
          "Escalating stakes: each segment must deliver more value or intensity than the last",
          "Preventing flat mid-video retention dips"
        ],
        practicalExercise: "Outline and structure a 90-second script/edit where the final answer is withheld until the last 10 seconds.",
        recommendedResources: [
          {
            title: "Parallel Editing and Narrative Structure",
            url: "https://www.youtube.com/watch?v=os_JM7pE8gw",
            type: "YouTube",
            free: true
          },
          {
            title: "Open Loops: The Secret Weapon of Compelling Storytelling",
            url: "https://www.studiobinder.com/blog/open-loop-storytelling/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "2-3",
        title: "Pattern Interrupts & Visual Variation",
        objective: "Reset viewer attention every 4–7 seconds without annoying visual spam.",
        keyConcepts: [
          "Changing shot scale (wide to close-up punch)",
          "Audio drops and sudden silence to emphasize points",
          "Subtle speed changes and directional shifts"
        ],
        practicalExercise: "Take a 30-second static talking-head clip and introduce 4 purposeful pattern interrupts using zoom punch-ins and sound cues.",
        recommendedResources: [
          {
            title: "When Editing Ruins Your Video — Retention Case Studies",
            url: "https://www.youtube.com/watch?v=IROKEjmIIlM",
            type: "YouTube",
            free: true
          },
          {
            title: "Visual Variety: Changing Focal Lengths and Shot Scale",
            url: "https://www.premiumbeat.com/blog/visual-variety-shot-scale/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "2-4",
        title: "Kdenlive Vertical Setup (9:16 Shorts/Reels)",
        objective: "Configure high-retention 9:16 workspaces and project profiles.",
        keyConcepts: [
          "Custom 1080x1920 profile creation in Kdenlive",
          "Managing safe zones for platform UI overlays (TikTok/Reels icons)",
          "Repositioning 16:9 footage into 9:16 using Transform effects"
        ],
        practicalExercise: "Set up a vertical project in Kdenlive and re-frame a horizontal clip to track the subject cleanly.",
        recommendedResources: [
          {
            title: "Create Vertical Workspace Layout - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=Qdm7rppCjz8",
            type: "YouTube",
            free: true
          },
          {
            title: "Kdenlive Custom Project Profiles Guide",
            url: "https://docs.kdenlive.org/en/project_and_asset_management/project_settings.html",
            type: "Documentation",
            free: true
          },
          {
            title: "Mobile UI Safe Zones for TikTok, Instagram Reels, and YouTube Shorts",
            url: "https://buffer.com/resources/social-media-video-specs/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "2-5",
        title: "Time Remapping & Speed Ramping",
        objective: "Use speed curves to alter viewer perception of momentum.",
        keyConcepts: [
          "Linear vs. exponential speed ramps",
          "Speeding through transition movements, slowing on impact",
          "Using timeline markers to align speed peaks with audio hits"
        ],
        practicalExercise: "Create a 10-second sequence featuring two smooth speed ramps that accelerate into a cut.",
        recommendedResources: [
          {
            title: "Kdenlive | Speed and Slow with Time Remapping",
            url: "https://www.youtube.com/watch?v=ja9l_ba1HV8",
            type: "YouTube",
            free: true
          },
          {
            title: "Kdenlive Manual — Time Remapping & Curves",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/video_effects/motion/time_remapping.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "2-6",
        title: "Contextual B-Roll Placement",
        objective: "Use supplemental footage that advances the narrative rather than decorating it.",
        keyConcepts: [
          "Literal vs. metaphorical b-roll",
          "Cutting on subject gaze direction",
          "Avoiding generic stock footage clichés"
        ],
        practicalExercise: "Select and place 4 b-roll clips over a voiceover, ensuring each cut adds concrete information not stated in words.",
        recommendedResources: [
          {
            title: "Beginner Editing Advice - B-Roll and Cutaways",
            url: "https://www.youtube.com/watch?v=tKNQv2GBRoc",
            type: "YouTube",
            free: true
          },
          {
            title: "A-Roll vs B-Roll: Storytelling Hierarchy",
            url: "https://www.studiobinder.com/blog/a-roll-vs-b-roll/",
            type: "Article",
            free: true
          },
          {
            title: "Free High-Quality Archival B-Roll (Prelinger Archives)",
            url: "https://archive.org/details/prelinger",
            type: "Practice",
            free: true
          }
        ]
      },
      {
        id: "2-7",
        title: "The Climax & Ending Payoff",
        objective: "Deliver on the hook's promise and transition into a crisp call-to-action.",
        keyConcepts: [
          "Resolving the open loop set in the hook",
          "Cutting dead air before the ending so retention doesn't collapse",
          "Seamless loop endings for vertical short-form platforms"
        ],
        practicalExercise: "Edit an ending that links the final spoken sentence back into the opening hook word for a seamless loop.",
        recommendedResources: [
          {
            title: "Editing Secrets to Hook and Retain Viewers",
            url: "https://www.youtube.com/watch?v=2MovKHjZxjY",
            type: "YouTube",
            free: true
          },
          {
            title: "Crafting Seamless Loop Endings for Short-Form Video",
            url: "https://blog.hootsuite.com/how-to-make-reels-loop/",
            type: "Article",
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
          },
          {
            title: "Video Noise Reduction - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=dQNe1Dju3qs",
            type: "YouTube",
            free: true
          },
          {
            title: "Kdenlive Audio Effects & LADSPA Plugins",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/audio.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "3-2",
        title: "Vocal Equalization & Presence",
        objective: "Sculpt voice tracks to cut through busy background music.",
        keyConcepts: [
          "Notching out muddy boxy frequencies (300Hz–500Hz)",
          "Boosting vocal presence and intelligibility (2kHz–5kHz)",
          "Taming harsh sibilance with de-essers"
        ],
        practicalExercise: "Apply parametric EQ to a muffled dialogue track to restore clarity and presence.",
        recommendedResources: [
          {
            title: "Boost Your Sound Quality — Vocal EQ in Kdenlive",
            url: "https://www.youtube.com/watch?v=rDGv8WEF87c",
            type: "YouTube",
            free: true
          },
          {
            title: "Vocal EQ Cheat Sheet: Frequencies You Need to Know",
            url: "https://www.izotope.com/en/learn/how-to-eq-vocals.html",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "3-3",
        title: "Audio Compression & Dynamic Range",
        objective: "Even out whispers and shouts into a consistent, broadcast-ready volume.",
        keyConcepts: [
          "Threshold and ratio settings (3:1 to 4:1 for dialogue)",
          "Attack and release times to preserve natural vocal transients",
          "Makeup gain to restore volume after compression"
        ],
        practicalExercise: "Apply a compressor filter to a voice track with uneven volume levels, bringing peaks and valleys into a tight 4dB window.",
        recommendedResources: [
          {
            title: "Boost Your Sound Quality — Limiter and Loudness",
            url: "https://www.youtube.com/watch?v=rDGv8WEF87c",
            type: "YouTube",
            free: true
          },
          {
            title: "Audio Compression Explained: Threshold, Ratio, Attack, Release",
            url: "https://www.soundonsound.com/techniques/compression-made-easy",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "3-4",
        title: "Dynamic Music Ducking & Track Hierarchy",
        objective: "Automatically lower music volume whenever the speaker talks.",
        keyConcepts: [
          "Dialogue sitting between -12dB and -6dB peak",
          "Music ducking (-18dB to -24dB underneath spoken words)",
          "Smooth 200ms volume ramps to avoid jarring abrupt volume jumps"
        ],
        practicalExercise: "Keyframe music volume across a 45-second dialogue sequence with natural ramps at every pause.",
        recommendedResources: [
          {
            title: "Audio / Sound Basics - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=khVRbgWTMfU",
            type: "YouTube",
            free: true
          },
          {
            title: "Free Royalty-Free Background Music Stems (Free Music Archive)",
            url: "https://freemusicarchive.org/",
            type: "Practice",
            free: true
          }
        ]
      },
      {
        id: "3-5",
        title: "Foley, Risers & Sound Design Layering",
        objective: "Accentuate on-screen cuts, graphics, and transitions with layered SFX.",
        keyConcepts: [
          "Diegetic vs. non-diegetic sound effects",
          "Layering whooshes, clicks, impacts, and subtle room tone",
          "Pitch shifting sound effects to fit the mood of the edit"
        ],
        practicalExercise: "Add 6 layered sound effects to a 15-second sequence with 0 music; verify the scene feels alive and tactile.",
        recommendedResources: [
          {
            title: "Audio / Sound Basics — Audio Correction and Fades",
            url: "https://www.youtube.com/watch?v=khVRbgWTMfU",
            type: "YouTube",
            free: true
          },
          {
            title: "Freesound.org — Open Collaborative Sound Database",
            url: "https://freesound.org/",
            type: "Practice",
            free: true
          },
          {
            title: "Sound Design 101: Diegetic vs Non-Diegetic Audio",
            url: "https://www.studiobinder.com/blog/diegetic-sound-non-diegetic-sound/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "3-6",
        title: "Master Loudness Standards & -14 LUFS",
        objective: "Export audio that matches YouTube, TikTok, and Spotify loudness algorithms without penalization.",
        keyConcepts: [
          "Integrated LUFS vs. Peak dB",
          "Targeting -14 LUFS for web / -24 LUFS for broadcast",
          "True Peak limiter settings (-1.0 dB true peak ceiling)"
        ],
        practicalExercise: "Run a finished sequence through Kdenlive's loudness meter and master limiter to lock export at exactly -14 LUFS.",
        recommendedResources: [
          {
            title: "Boost Your Sound Quality — Loudness Control and Limiter",
            url: "https://www.youtube.com/watch?v=rDGv8WEF87c",
            type: "YouTube",
            free: true
          },
          {
            title: "EBU R128 and ITU-R BS.1770 Loudness Standards Overview",
            url: "https://tech.ebu.ch/loudness",
            type: "Documentation",
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
            title: "Color Correction | Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=zKisJAr5noQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Color Grading vs Color Correction",
            url: "https://www.youtube.com/watch?v=PEqiFq_Q-ow",
            type: "YouTube",
            free: true
          },
          {
            title: "Understanding Waveforms, Vectorscopes, and Histograms",
            url: "https://blog.frame.io/2017/09/20/video-scopes-lumetri-premiere-pro/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "4-2",
        title: "Exposure Normalization & Contrast Curves",
        objective: "Establish rich contrast without crushing shadow detail or blowing out skin highlights.",
        keyConcepts: [
          "S-Curves for natural tonal roll-off",
          "Toe (shadows) and Shoulder (highlights) control",
          "Color temperature and tint adjustment"
        ],
        practicalExercise: "Adjust a flat, washed-out clip using Bezier curves to achieve rich, cinematic contrast.",
        recommendedResources: [
          {
            title: "Color Correction | Kdenlive Tutorial — Exposure and Contrast",
            url: "https://www.youtube.com/watch?v=zKisJAr5noQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Mastering the S-Curve for Filmic Contrast",
            url: "https://wolfcrow.com/the-s-curve-in-color-grading/",
            type: "Article",
            free: true
          },
          {
            title: "Kdenlive Manual — Color and Image Correction",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/video_effects/color_image_correction.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "4-3",
        title: "Skin Tone Calibration & Secondary Color",
        objective: "Isolate and correct skin tones regardless of ethnicity or bad stage lighting.",
        keyConcepts: [
          "The Skin Tone Line on the vectorscope",
          "Isolating hues with color selection masks",
          "Preventing oversaturation on faces"
        ],
        practicalExercise: "Isolate an actor's face in an overly saturated scene and adjust hue until it aligns with the vectorscope reference.",
        recommendedResources: [
          {
            title: "THE PERFECT SKIN TONE : How Professionals Grade Skin Tones",
            url: "https://www.youtube.com/watch?v=rCJMnJ19Zic",
            type: "YouTube",
            free: true
          },
          {
            title: "Color Correction | Kdenlive Tutorial — Skin Tones and Rec709",
            url: "https://www.youtube.com/watch?v=zKisJAr5noQ",
            type: "YouTube",
            free: true
          },
          {
            title: "The Vectorscope Skin Tone Line Explained",
            url: "https://www.studiobinder.com/blog/vectorscope-skin-tone-line/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "4-4",
        title: "Shot Matching Across Cameras",
        objective: "Make footage from two completely different cameras look like they were filmed together.",
        keyConcepts: [
          "Matching black levels first, then midtones, then highlights",
          "Color matching chart workflows vs. manual matching",
          "Uniform grain structure across cuts"
        ],
        practicalExercise: "Match an iPhone clip to a DSLR camera shot until the cut between them is imperceptible in color tone.",
        recommendedResources: [
          {
            title: "Color Correction | Kdenlive Tutorial — Secondary Color Selection",
            url: "https://www.youtube.com/watch?v=zKisJAr5noQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Multi-Camera Color Matching Step-by-Step",
            url: "https://blog.frame.io/2019/04/15/shot-matching-premiere-pro/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "4-5",
        title: "Stylized Looks, Bloom & Halation",
        objective: "Add filmic depth, dreamy highlight blooms, and subtle vignettes.",
        keyConcepts: [
          "Soft halation and highlight blooms using blend modes (Screen/Softlight)",
          "Guiding viewer eye trace with subtle vignettes",
          "Applying and dialing in 3D LUTs cleanly without harsh banding"
        ],
        practicalExercise: "Grade a daylight scene to create a soft filmic glow around highlights without crushing shadow details.",
        recommendedResources: [
          {
            title: "How to Make CRT Effect - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=j7YpiLPG3CA",
            type: "YouTube",
            free: true
          },
          {
            title: "What is Film Halation and Why Does It Look Cinematic?",
            url: "https://www.studiobinder.com/blog/what-is-halation-film/",
            type: "Article",
            free: true
          },
          {
            title: "Official Kdenlive Manual — Applying 3D LUTs",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/video_effects/color_image_correction/apply_lut.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "4-6",
        title: "Vignettes & Focus Directing",
        objective: "Subtly darken and blur image edges to direct subconscious viewer focus to the subject.",
        keyConcepts: [
          "Feathered oval vignettes vs. harsh circular crops",
          "Color grading inverted masks",
          "Subtle depth of field enhancement"
        ],
        practicalExercise: "Apply an inverted luminance mask to guide viewer focus toward the center of an otherwise busy frame.",
        recommendedResources: [
          {
            title: "How to Make CRT Effect — Glow and Lens Correction in Kdenlive",
            url: "https://www.youtube.com/watch?v=j7YpiLPG3CA",
            type: "YouTube",
            free: true
          },
          {
            title: "Subtle Vignetting: Directing Viewer Attention Without Being Obvious",
            url: "https://www.premiumbeat.com/blog/subtle-vignettes-in-film/",
            type: "Article",
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
            title: "The Principles of Motion Design",
            url: "https://www.youtube.com/watch?v=0N0NHlvMEWs",
            type: "YouTube",
            free: true
          },
          {
            title: "Masking & Transition Effects Editing - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=tHzP9kJQJeg",
            type: "YouTube",
            free: true
          },
          {
            title: "Understanding Bezier Curves and Easing in Motion Design",
            url: "https://www.schoolofmotion.com/blog/easing-animation",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "5-2",
        title: "Kinetic Typography & Animated Text",
        objective: "Create animated titles, word-by-word pop-ins, and high-impact lower thirds.",
        keyConcepts: [
          "Font pairing and readability contrast for mobile screens",
          "Scale bounce and tracking expansion on key words",
          "Synchronizing text pop-ins to vocal plosives"
        ],
        practicalExercise: "Create an animated 3-line kinetic title sequence that snaps on screen with scale overshoot.",
        recommendedResources: [
          {
            title: "How to Create Smooth Subtitle Animation - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=44ufamHGIgQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Typography Rules for Video: Contrast, Tracking, Hierarchy",
            url: "https://www.typewolf.com/",
            type: "Article",
            free: true
          },
          {
            title: "Google Fonts — Clean Open Source Display & Sans-Serif Fonts",
            url: "https://fonts.google.com/",
            type: "Tool",
            free: true
          }
        ]
      },
      {
        id: "5-3",
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
          },
          {
            title: "Creative Masking Transitions: Using Practical Foreground Elements",
            url: "https://www.premiumbeat.com/blog/creative-masking-transitions/",
            type: "Article",
            free: true
          },
          {
            title: "Kdenlive Manual — Rotoscoping and Alpha Shapes",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/video_effects/alpha_mask_keying/rotoscoping.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "5-4",
        title: "Document Highlights & 2.5D Camera Tilt",
        objective: "Animate newspaper clippings, tweet pop-ups, and financial charts.",
        keyConcepts: [
          "Creating transparent SVG document assets in Inkscape",
          "Animating a digital yellow highlighter stroke across text",
          "Adding drop shadows and 2.5D perspective tilt"
        ],
        practicalExercise: "Animate a news article popping onto the screen, tilting in 3D space, and highlighting a key headline.",
        recommendedResources: [
          {
            title: "Learn Motion Tracking - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=LME1tJEaaC8",
            type: "YouTube",
            free: true
          },
          {
            title: "Inkscape — Open Source Vector Editor for Document Asset Prep",
            url: "https://inkscape.org/",
            type: "Tool",
            free: true
          },
          {
            title: "How to Animate Documents and Articles Like Vox",
            url: "https://nofilmschool.com/documentary-motion-graphics",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "5-5",
        title: "Vector Animation with Friction & Glaxnimate",
        objective: "Build lightweight vector icons, arrows, and shape morphs that render instantly on low-spec PCs.",
        keyConcepts: [
          "Vector graphics vs. heavy raster video rendering",
          "Animated path drawing (highlighter strokes across documents)",
          "Exporting Lottie/SVG paths directly into Kdenlive timelines"
        ],
        practicalExercise: "Create an animated line arrow in Friction or Glaxnimate that draws itself and points to an on-screen chart.",
        recommendedResources: [
          {
            title: "Basics of Friction Graphics - Friction Tutorial",
            url: "https://www.youtube.com/watch?v=M6o63QXsHiw",
            type: "YouTube",
            free: true
          },
          {
            title: "Bouncing Ball Animation - Friction Tutorial",
            url: "https://www.youtube.com/watch?v=F24OzPdf9qc",
            type: "YouTube",
            free: true
          },
          {
            title: "Official Glaxnimate User Manual & Kdenlive Plugin",
            url: "https://glaxnimate.org/manual/",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "5-6",
        title: "UI Mockups, Device Bezels & Split Views",
        objective: "Place app screen recordings into clean phone/laptop frames with simulated cursor clicks.",
        keyConcepts: [
          "Nesting screen recordings inside device PNG mockups",
          "Simulating smooth mouse cursor movement with keyframed bezier curves",
          "Split-screen comparison layouts"
        ],
        practicalExercise: "Take a raw software screen recording, frame it inside a clean laptop mockup, and add animated zoom-ins to active buttons.",
        recommendedResources: [
          {
            title: "Masking & Transition Effects Editing - Kdenlive Tutorial — Freeze Frame & Animate",
            url: "https://www.youtube.com/watch?v=tHzP9kJQJeg",
            type: "YouTube",
            free: true
          },
          {
            title: "Figma Community — Free Device Mockup Vectors (iPhone, MacBook)",
            url: "https://www.figma.com/community",
            type: "Tool",
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
            title: "Kdenlive Tutorial for Beginners - Media & Bin Organization",
            url: "https://www.youtube.com/watch?v=YnSE9qgGui4",
            type: "YouTube",
            free: true
          },
          {
            title: "Standardized Video Project Folder Structures",
            url: "https://blog.frame.io/2018/06/18/organize-post-production-projects/",
            type: "Article",
            free: true
          },
          {
            title: "Kdenlive Manual — Archiving and Backup Projects",
            url: "https://docs.kdenlive.org/en/project_and_asset_management/file_management.html",
            type: "Documentation",
            free: true
          }
        ]
      },
      {
        id: "6-2",
        title: "Automated Subtitling & Speech-to-Text",
        objective: "Generate synchronized captions and export styled subtitles.",
        keyConcepts: [
          "Configuring VOSK / Whisper speech-to-text models inside Kdenlive",
          "Editing subtitle timing and correcting transcription typos",
          "Styling subtitles for maximum contrast on mobile screens"
        ],
        practicalExercise: "Transcribe a 60-second video automatically in Kdenlive, format styling to yellow/white bold, and burn in.",
        recommendedResources: [
          {
            title: "How to Create Smooth Subtitle Animation - Kdenlive Tutorial",
            url: "https://www.youtube.com/watch?v=44ufamHGIgQ",
            type: "YouTube",
            free: true
          },
          {
            title: "Official Kdenlive Documentation — Subtitle Tool Setup",
            url: "https://docs.kdenlive.org/en/effects_and_compositions/subtitles.html",
            type: "Documentation",
            free: true
          },
          {
            title: "BBC Subtitle Guidelines for Readability and CPS",
            url: "https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "6-3",
        title: "Reusable Title & Effect Templates",
        objective: "Create preset libraries to avoid rebuilding titles and motion from scratch on every video.",
        keyConcepts: [
          "Saving custom effect stacks in Kdenlive",
          "Building reusable motion graphics templates",
          "Setting up default track layouts and audio routing"
        ],
        practicalExercise: "Build and save 3 custom effect presets in Kdenlive: a voice processing stack, a zoom punch, and an animated lower third.",
        recommendedResources: [
          {
            title: "How to Make CRT Effect — Save Preset Feature in Kdenlive",
            url: "https://www.youtube.com/watch?v=j7YpiLPG3CA",
            type: "YouTube",
            free: true
          },
          {
            title: "KDE Store — Free Community Kdenlive Presets and Titler Templates",
            url: "https://store.kde.org/browse?cat=333",
            type: "Practice",
            free: true
          }
        ]
      },
      {
        id: "6-4",
        title: "Pre-Rendering & Timeline Nesting",
        objective: "Keep complex timelines responsive on older hardware by baking heavy layers.",
        keyConcepts: [
          "Baking heavy multi-track animations into lightweight video clips",
          "Using nested sequences in Kdenlive to keep timelines uncluttered",
          "Managing cache storage on low-capacity SSDs"
        ],
        practicalExercise: "Build an 8-layer graphic sequence, render it as a single ProRes clip, and replace the layers with that single file.",
        recommendedResources: [
          {
            title: "How to Make CRT Effect — Preview Render Workflow",
            url: "https://www.youtube.com/watch?v=j7YpiLPG3CA",
            type: "YouTube",
            free: true
          },
          {
            title: "Why Pre-Rendering (Baking) Saves Low-Spec Systems",
            url: "https://nofilmschool.com/render-cache-video-editing",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "6-5",
        title: "Export Codecs & CRF Encoding",
        objective: "Export crisp 1080p web deliverables with minimal file size.",
        keyConcepts: [
          "Constant Rate Factor (CRF) vs. Constant Bitrate (CBR)",
          "Optimal CRF values (CRF 18–22 for web delivery)",
          "H.264 vs. H.265/HEVC decoding compatibility"
        ],
        practicalExercise: "Export the same 60-second video using CBR 20Mbps and CRF 20; compare file size and visual fidelity.",
        recommendedResources: [
          {
            title: "Kdenlive Tutorial for Beginners - Exporting MP4",
            url: "https://www.youtube.com/watch?v=YnSE9qgGui4",
            type: "YouTube",
            free: true
          },
          {
            title: "FFmpeg H.264 & CRF Encoding Documentation",
            url: "https://trac.ffmpeg.org/wiki/Encode/H.264",
            type: "Documentation",
            free: true
          },
          {
            title: "Bitrate vs. CRF: The Best Export Settings for Web Video",
            url: "https://streamable.com/blog/video-encoding-guide",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "6-6",
        title: "Version Control & Client Review Systems",
        objective: "Manage revision rounds without overwriting files or confusing deliverables.",
        keyConcepts: [
          "Standardized version stamping: Project_v1.0, Project_v1.1, Project_FINAL",
          "Exporting review cuts with timecode overlays for client feedback",
          "Using Frame.io or unlisted review links to collect timestamped notes"
        ],
        practicalExercise: "Export a project with a semi-transparent timecode burn-in across the bottom corner for review.",
        recommendedResources: [
          {
            title: "When Editing Ruins Your Video — Revisions and Deadlines",
            url: "https://www.youtube.com/watch?v=IROKEjmIIlM",
            type: "YouTube",
            free: true
          },
          {
            title: "How to Implement Numbered Version Stamping in Post-Production",
            url: "https://blog.frame.io/2018/02/05/version-control-video-post/",
            type: "Article",
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
        title: "Choosing a High-Ticket Editing Niche",
        objective: "Position yourself where clients have high budgets and recurring needs.",
        keyConcepts: [
          "Why low-tier freelancing sites create race-to-the-bottom pricing",
          "The three high-ticket categories: B2B SaaS explainers, high-retention YouTube creators, and short-form DTC repurposing",
          "Selecting a single niche to build focused authority"
        ],
        practicalExercise: "Identify 10 creators or brands in a single niche whose video editing is holding back their growth.",
        recommendedResources: [
          {
            title: "Editing Secrets Hayden Hillier-Smith Uses To Hook You Forever",
            url: "https://www.youtube.com/watch?v=2MovKHjZxjY",
            type: "YouTube",
            free: true
          },
          {
            title: "Why Freelancers Fail on Upwork/Fiverr and What to Do Instead",
            url: "https://www.indiehackers.com/post/freelance-services-positioning",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "7-2",
        title: "Building a Conversion-Focused Portfolio",
        objective: "Create a portfolio that answers 'What can you do for my business?' in 10 seconds.",
        keyConcepts: [
          "Why traditional showreels fail (they show aesthetics, not storytelling)",
          "Showcasing 3 hero case studies with side-by-side before/after breakdowns",
          "Hosting samples on a clean, ad-free page or unlisted YouTube playlist"
        ],
        practicalExercise: "Build a single-page portfolio layout featuring your 3 checkpoint projects (Story, Motion Explainer, and Audio Mix).",
        recommendedResources: [
          {
            title: "How to become a GREAT film editor",
            url: "https://www.youtube.com/watch?v=KTYvBOcIeIQ",
            type: "YouTube",
            free: true
          },
          {
            title: "How to Build a Video Editor Portfolio Without Past Clients",
            url: "https://editstock.com/blogs/news/demo-reel-guide",
            type: "Article",
            free: true
          },
          {
            title: "Bento.me — Minimalist Personal Link & Video Portfolio Builder",
            url: "https://bento.me/",
            type: "Tool",
            free: true
          }
        ]
      },
      {
        id: "7-3",
        title: "The 30-Second Spec Audit Strategy",
        objective: "Pitch creators and brands with undeniable proof rather than generic cold messages.",
        keyConcepts: [
          "Why resumes and 'hire me' DMs get deleted instantly",
          "Finding a 60-second weak point in a client's recent video",
          "Re-editing that exact 30 seconds with superior pacing, kinetic text, and audio design"
        ],
        practicalExercise: "Download 60 seconds from a target creator's video, re-edit it into a high-retention 30-second version, and upload as an unlisted video.",
        recommendedResources: [
          {
            title: "When Editing Ruins Your Video — Case Studies in Fixing Weak Edits",
            url: "https://www.youtube.com/watch?v=IROKEjmIIlM",
            type: "YouTube",
            free: true
          },
          {
            title: "The Loom Audit Strategy: Converting Prospects with Free Proof",
            url: "https://www.demandcurve.com/playbooks/cold-email-audits",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "7-4",
        title: "Direct Outreach Execution & Follow-Up",
        objective: "Send personalized, high-converting outreach messages that get opened and replied to.",
        keyConcepts: [
          "The 4-sentence outreach structure (Compliment, Diagnosis, Free Solution, Low-friction CTA)",
          "Avoiding spam: sending 5 thoughtful pitches instead of 100 generic ones",
          "The 3-day polite follow-up rule"
        ],
        practicalExercise: "Draft a personalized 120-word pitch email containing your unlisted re-edit link and send it to your first target lead.",
        recommendedResources: [
          {
            title: "How to become a GREAT film editor — Professional Client Communication",
            url: "https://www.youtube.com/watch?v=KTYvBOcIeIQ",
            type: "YouTube",
            free: true
          },
          {
            title: "The 4-Sentence Cold Email Framework That Converts",
            url: "https://goodworkguide.com/cold-email-framework",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "7-5",
        title: "Packaging Retainers vs. Hourly Rates",
        objective: "Establish recurring monthly income so you don't hunt for new clients every week.",
        keyConcepts: [
          "Why hourly rates penalize fast, skilled editors",
          "The Retainer Model: offering a monthly bundle (e.g. 4 long-form edits or 12 short-form reels for $800–$1,500/mo)",
          "Securing 50% upfront deposits for all non-retainer work"
        ],
        practicalExercise: "Write out two clear service tiers with deliverable counts, turnaround timelines, and monthly flat rates.",
        recommendedResources: [
          {
            title: "Continuity Editing, Montage, the Rule of Six, and MORE!",
            url: "https://www.youtube.com/watch?v=iezpPhePim8",
            type: "YouTube",
            free: true
          },
          {
            title: "Why Hourly Billing Penalizes Fast Editors (Value-Based Pricing)",
            url: "https://doubleyourfreelancing.com/value-based-pricing/",
            type: "Article",
            free: true
          }
        ]
      },
      {
        id: "7-6",
        title: "Contracts, Scope Creep & Revision Limits",
        objective: "Protect your time and profit margins with clear client boundaries.",
        keyConcepts: [
          "The 2-round revision limit policy",
          "Defining what counts as a revision vs. a scope change (script changes require a new fee)",
          "Kill fees: securing payment if a client cancels a project midway"
        ],
        practicalExercise: "Draft a simple 1-page service agreement covering payment terms, delivery deadlines, and revision rules.",
        recommendedResources: [
          {
            title: "When Editing Ruins Your Video — Avoiding Production Traps",
            url: "https://www.youtube.com/watch?v=IROKEjmIIlM",
            type: "YouTube",
            free: true
          },
          {
            title: "AIGA Standard Agreement for Professional Creative Services",
            url: "https://www.aiga.org/professional-development/standard-form-of-agreement",
            type: "Documentation",
            free: true
          },
          {
            title: "The 2-Revision Rule: Setting Boundaries with Creative Clients",
            url: "https://freelancersunion.org/blog/how-to-manage-client-revisions/",
            type: "Article",
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

export const allLessons: Lesson[] = stages.flatMap((stage) => stage.lessons);

export default stages;
