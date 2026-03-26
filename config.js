// config.js (Students edit only this file)
window.SITE_CONFIG = {
  pageTitle: "Academic Digital Twin Case Study | Student Showcase",
  homeUrl: "https://roadwayvr.com",

  hero: {
    profileImage: "assets/img/image1.jpg",

    // NEW: course code tag shown above the course project pill
    courseTag: "RWR 4016",

    // updated tagline text (big pill)
    tagline: "Workshop Project: Railway Engineering",

    studentName: "Ahmad Mohammadi",
    program: "Program / Department",
    university: "RoadwayVR University, Canada",
    email: "your.email@example.com"
  },

  disclaimer: {
    short:
      "Academic project for a university course. Educational purposes only. Not an official city analysis, consultation, or endorsement.",
    long:
      "This website presents a student academic project created for coursework. Any analyses, results, and potential improvements are simulation-based and provided for educational purposes only. They do not represent official work, endorsement, or consultation for any city or agency.",
    videoOverlaySuggestion:
      "Academic Project · Educational Use Only · Not Official City Work"
  },

  theme: {
    heroBg: "#111111",
    heroText: "#ffffff",
    pageBg: "#f8fafc",
    accent: "#7c3aed"
  },

  dividers: {
    dividerBg: "#f9f9f9",
    dividerText: "#ffffff"
  },

  footer: {
    footerBg: "#111111",
    footerText: "#ffffff",
    footerBorder: "#222222"
  },

  intro: {
    projectTitleLabel: "Project Title",
    projectTitle: "IEEE Toronto Section Railway Engineering: Design, Simulation & Immersive VR Visualization ",
    heroVideo: "assets/video/video.mp4",
    heroVideoPoster: "",
    heroVideoAlt: "Autoplay preview video (academic project)",
	videoCaption:
	  "Autoplay preview (≈20 seconds): OpenRail track design → SUMO scheduling and signaling → LumenRT VR visualization → results, figures, and showcase website."
  },

	caseStudy: {
		title: "Introduction",

		backgroundTitle: "Background",
		backgroundBullets: [
			"Global freight rail is growing and remains strategically important.",
			"Rail carries about 18% of EU inland freight, 36% in the U.S., and 27% in India.",
			"Road dominates many freight systems, so rail often receives less attention.",
			"In Canada, rail accounted for 10.5% of international merchandise trade value in 2024."
		],

		problemTitle: "Problem Statement",
		problemBullets: [
			"Limited hands-on practice with railway design tools.",
			"Little experience with rail simulation for scheduling and signaling.",
			"Minimal exposure to 3D visualization and VR workflows.",
			"Few opportunities to present work in a professional digital format."
		],

		objectivesTitle: "Project Objectives",
		objectivesBullets: [
			"Design a railway corridor in OpenRail ConceptStation.",
			"Simulate train scheduling, signaling, and capacity in SUMO.",
			"Create a 3D rail environment and VR video in LumenRT.",
			"Present results through KPIs, figures, and a showcase website."
		]
	},

	overview: {
		title: "Methodology",
		steps: [
			{
				title: "Step 1: Track Design (OpenRail Bentley)",
				text: "A real-world railway corridor is created using aerial imagery and elevation GIS data. This includes horizontal and vertical alignment, superelevation, turnouts, crossovers, yard layout, and bridge clearance.",
				image: "assets/img/image2.jpg"
			},
			{
				title: "Step 2: Train Scheduling and Signaling (SUMO Traffic Simulation)",
				text: "A simulated rail network is built in SUMO with train routing, fixed-block signal design, and operating speed settings. Scheduling logic, including timetables and headways, is then applied.",
				image: "assets/img/image3.jpg"
			},
			{
				title: "Step 3: Immersive VR Visualization (LumenRT Bentley)",
				text: "A 3D railway environment is developed with stations, surrounding buildings, trees, and rolling stock. This step concludes with a VR 360-degree video for immersive presentation.",
				image: "assets/img/image4.jpg"
			},
			{
				title: "Step 4: Results & Communication (Figures + Showcase Website)",
				text: "Railway operations are evaluated using running time, dwell time, scheduled departures, and headway. Tables and plots are then used to communicate the findings through the project showcase website.",
				image: "assets/img/image5.jpg"
			}
		]
	},

  implementation: {
    title: "Methodology Steps (Demo Modules)",
    modules: [
      {
        title: "Module 1: Track Design (Bentley OpenRail)",
        bullets: [
          { text: "Create a real-world railway corridor using aerial imagery and elevation terrain inputs." },
          { text: "Design horizontal and vertical alignment, superelevation, turnouts, crossovers, and bridge clearance." },
          { text: "Build a complete yard layout following industry standards (Transport Canada, AREMA)." }
        ],
        image: "assets/img/image2.jpg"
      },
      {
        title: "Module 2: Train Scheduling & Signaling (SUMO)",
        bullets: [
          { text: "Build a simulated rail network in SUMO with train routing and maximum operating speed." },
          { text: "Design fixed-block rail signals and define station stops along the corridor." },
          { text: "Configure timetable, scheduled departures, running time, dwell time, and headway." }
        ],
        image: "assets/img/image3.jpg"
      },
      {
        title: "Module 3: Immersive VR Visualization (LumenRT)",
        bullets: [
          { text: "Develop a 3D railway environment including stations, buildings, trees, and rolling stock." },
          { text: "Configure visualization fundamentals: lighting, camera position, time of day, and scene composition." },
          { text: "Produce a VR 360-degree video output for immersive presentation and portfolio use." }
        ],
        image: "assets/img/image4.jpg"
      },
      {
        title: "Module 4: Results & Communication",
        bullets: [
          { text: "Generate engineering figures including KPI tables, capacity plots, and simulation screenshots." },
          { text: "Compile outputs from all three phases into a structured project narrative." },
          { text: "Publish a professional showcase website as a portfolio deliverable for IEEE certificate submission." }
        ],
        image: "assets/img/image5.jpg"
      }
    ]
  },

	results: {
			title: "Results & Potential Improvements",
			subtitle:
				"Train schedule simulation outputs across two scenarios showing arrivals, departures, and dwell time across four stations. Results are for educational purposes only.",

			charts: {
				left: {
					title: "Scenario 1 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image6.jpg",
					alt: "Scenario 1 train schedule chart showing arrivals and departures across S1 to S4"
				},
				right: {
					title: "Scenario 2 — Train Schedule: Arrivals, Departures & Dwell Time",
					src: "assets/img/image7.jpg",
					alt: "Scenario 2 train schedule chart showing arrivals and departures across S1 to S4"
				}
			},

			discussionTitle: "Discussion",
			discussionBullets: [
				"Both scenarios simulate train arrivals and departures across four stations (S1–S4) under five frequency levels (f_0.0 to f_0.4), showing how increased frequency compresses the schedule.",
				"Scenario 2 produces significantly lower travel times across all frequency levels — dwell time at S2 drops from ~1,389s to ~191s, indicating a more efficient scheduling configuration.",
				"Higher frequency trains (f_0.3, f_0.4) consistently show earlier arrivals and tighter headways, demonstrating the operational benefit of increased service frequency.",
				"Tradeoffs exist between frequency and dwell time — higher frequency reduces station dwell but increases scheduling complexity and potential conflicts.",
				"Real-world implementation would require validation against field conditions, agency constraints, and safety review."
			]
		},

  team: {
    title: "Team & Acknowledgments",
    subtitle:
      "This section clarifies academic context, roles, tools, and sources. Clear attribution improves credibility and shows ethical data handling.",

    members: [
      { name: "Your Name", role: "Computer Vision + Simulation + KPI Analysis + Reporting" }
    ],

    acknowledgments: [
      "Course: Digital Twins for Smart Cities",
      "Institution: RoadwayVR University",
      "Instructor: Ahmad Mohammadi",
      "Tools: SUMO, Python, CV models, and visualization tools"
    ],

    repoLabel: "Project Repository",
    repoUrl: "https://github.com/USERNAME/REPO"
  }
};
