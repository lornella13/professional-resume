// Edit this file to update the CV. Replace the "#" links with your real URLs.
export const profile = {
  name: "Ornella Leilla Keza Kanani",
  title: "Software Engineer (Full-Stack & AI/ML)",
  photo: "/profile.jpg",
  about:
    "Software engineering trainee at AkiraChix (Class of 2026) with hands-on projects across web, APIs, IoT and machine learning. Shipped a skin-lesion classifier, a Flutter maternal-health app and an XGBoost pricing model; comfortable owning work from raw data to deployed app.",
  contact: {
    email: "ornellaleilla@gmail.com",
    phone: "+250 795 340 956",
    location: "Rwandan citizen based in Nairobi, Kenya",
    links: [
      { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/ornella-leilla-keza-kanani-8a86913b3/?isSelfProfile=true" },
      { label: "GitHub Profile", href: "https://github.com/lornella13" },
      { label: "Portfolio Website", href: "https://portfolio-lornella13s-projects.vercel.app/#about" },
    ],
  },
  education:
    "Diploma in Software Engineering, AkiraChix — Class of 2026. Project-based training across the full software development lifecycle.",
  skills: [
    ["Frontend (Mobile)", "Flutter, Dart"],
    ["Frontend (Web)", "React, Next.js, Node.js, JavaScript, TypeScript, HTML/CSS, Tailwind CSS"],
    ["Backend", "Python, FastAPI, SQL, SQLAlchemy, REST APIs, Ruff"],
    ["AI & ML", "scikit-learn, XGBoost, model training and evaluation, Streamlit deployment, data preprocessing"],
    ["IoT", "ESP32 microcontrollers, embedded systems"],
    ["QA", "unit testing with Pytest"],
    ["Developer Tools", "Git/GitHub, Docker"],
    ["Familiar with", "cybersecurity fundamentals, Playwright, project management practice"],
  ],
  references: [
    { name: "Linda Kamau", role: "Founder and Executive Director, AkiraChix", email: "lkamau@akirachix.com" },
    { name: "Sharon Obanda", role: "AI & ML Trainer, AkiraChix · AI Lead Engineer, Ona Insights", email: "sharonobanda@gmail.com" },
    { name: "James Mwai", role: "Backend Trainer, AkiraChix", email: "smartemwa@gmail.com" },
  ],
  experience: {
    role: "Software Engineering Intern, AkiraChix training programme",
    dates: "January 2026 – Present",
    org: "AkiraChix",
    bullets: [
      "Built Stanaland Tour and Travel solo: a booking platform for airport transfers, hotels and tour guides with REST APIs for staff, in HTML, CSS and JavaScript.",
      "Wired ESP32 microcontrollers to live cloud dashboards so device status checks ran from any browser instead of a site visit.",
      "Engineered the data pipeline for a movie recommender, cleaning raw user preferences into model-ready inputs.",
      "Shipped three machine learning projects in Python (scikit-learn, XGBoost, Streamlit), each documented on GitHub.",
      "Wrote Pytest unit tests across projects, catching regressions before release.",
      "Worked in two-week sprints with planning sessions and peer code reviews.",
    ],
  },
  projects: [
    {
      name: "Skin Lesion Classifier",
      stack: "Python, scikit-learn, Streamlit",
      summary: "Flags suspicious skin marks for early review. Demo only, not a diagnostic tool.",
      bullets: [
        "Trained on 300 dermatologist-labelled images, class-balanced; reached ~65% accuracy on held-out data and documented the limitation; next step is more training data.",
        "Shared one preprocessing pipeline between training and the live Streamlit app so deployed predictions match training behaviour.",
      ],
    },
    {
      name: "SmartMama",
      stack: "Flutter, Dart, FastAPI, PostgreSQL",
      summary: "Team project. Maternal-health mobile app connecting community health workers with expectant mothers in the field.",
      bullets: [
        "Built the mobile screens for mother registration and antenatal visit logging in Flutter, with data flowing into a FastAPI backend on PostgreSQL.",
        "Contributed the pregnancy risk assessment flow, letting CHVs flag high-risk mothers during field visits for follow-up.",
      ],
    },
    {
      name: "Python POS System",
      stack: "Python, FastAPI, SQLAlchemy",
      summary: "Backend point-of-sale system built solo on a modular FastAPI architecture.",
      bullets: [
        "Implemented product registration, sales processing, user roles and inventory tracking as separate FastAPI routers with SQLAlchemy persistence.",
        "Structured the codebase in layers (routers, schemas, services, repositories) so business logic stays independent of the API endpoints.",
      ],
    },
    {
      name: "La Kuku Chicken",
      stack: "React, Vite, PWA",
      summary: "Installable Progressive Web App for a chicken restaurant in Rubaga, Kampala.",
      bullets: [
        "Built the site with Vite and React, configured as a PWA so previously visited pages load offline and the app installs to the home screen.",
        "Added install prompts for eligible visitors, letting repeat customers launch the restaurant app like a native one.",
      ],
    },
    {
      name: "House Price Prediction",
      stack: "Python, XGBoost, scikit-learn",
      summary: "",
      bullets: [
        "Predicted sale prices from 1,460 public home records; feature engineering and model comparison delivered predictions within ~11% of true sale prices, with a factor-ranking summary for interpretability.",
        "Engineered features from 1,460 public home records and compared candidate models in Python, selecting XGBoost for accuracy and a factor-ranking summary for interpretability.",
      ],
    },
  ],
};
