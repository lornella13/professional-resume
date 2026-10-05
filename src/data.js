// Edit this file to update the CV. Replace the "#" links with your real URLs.
export const profile = {
  name: "Ornella Leilla Keza Kanani",
  title: "Software Engineer (Full-Stack & AI/ML)",
  photo: "/profile.jpg",
  about:
    "I am an entry-level software engineer who loves solving problems and building systems that make a real difference to people's lives. At AkiraChix I have worked on the frontend, the APIs behind it, and the devices that send data to the backend. That experience taught me to think about how each part connects, where the data comes from, and what happens when the internet fails. I hold my work to honest standards, documenting limitations rather than overselling results, and I thrive where problems are open-ended.",
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
        "I built Stanaland Tour and Travel in HTML, CSS and JavaScript. It books airport transfers, hotels and tour guides, and I also wrote the REST APIs staff use to manage the bookings.",
        "Connected ESP32 microcontrollers to cloud dashboards, so device status can be checked from a browser instead of a physical site visit.",
        "Prepared the data for a movie recommender: I filled in missing values, converted categories into numbers the model can read, and scaled the features before training.",
        "Built a Titanic survival classifier and other machine learning projects in Python, using scikit-learn, XGBoost and Streamlit.",
        "Wrote unit tests with Pytest in my projects to catch bugs before they reach users.",
        "Worked in two-week sprints, with planning sessions and code reviews from teammates.",
      ],
  },
  projects: [
    {
      name: "Skin Lesion Classifier",
      stack: "Python, scikit-learn, Streamlit",
      summary: "Flags suspicious skin marks for early review. Demo only, not a diagnostic tool.",
      bullets: [
        "Trained the model on 300 dermatologist-labelled images, balanced across classes. It reaches about 65% accuracy on held-out data, which I note openly; more training data is the next step.",
        "Used the same preprocessing steps for training and for the live Streamlit app, so what the demo predicts matches how the model learned.",
      ],
    },
    {
      name: "SmartMama",
      stack: "Flutter, Dart, FastAPI, PostgreSQL",
      summary: "Team project. Maternal-health mobile app connecting community health workers with expectant mothers in the field.",
      bullets: [
        "Built the mother registration and antenatal visit screens in Flutter, connected to a FastAPI backend that stores data in PostgreSQL.",
        "Worked on the pregnancy risk assessment part, which lets CHVs mark high-risk mothers during field visits so they can be followed up.",
      ],
    },
    {
      name: "Python POS System",
      stack: "Python, FastAPI, SQLAlchemy",
      summary: "Backend point-of-sale system built solo on a modular FastAPI architecture.",
      bullets: [
        "Built product registration, sales, user roles and inventory tracking as separate FastAPI routes, storing the data with SQLAlchemy.",
        "Kept the code in clear layers (routes, schemas, services, repositories) so the business rules don't depend on the API.",
      ],
    },
    {
      name: "La Kuku Chicken",
      stack: "React, Vite, PWA",
      summary: "Installable Progressive Web App for a chicken restaurant in Rubaga, Kampala.",
      bullets: [
        "Built the site with Vite and React and set it up as a PWA: pages you have already visited load offline, and the app installs on the home screen.",
        "Added an install prompt that asks visitors if they want to add the app to their phone's home screen, so they can open it like a normal app without going through the browser.",
      ],
    },
    {
      name: "House Price Prediction",
      stack: "Python, XGBoost, scikit-learn",
      summary: "",
      bullets: [
        "Predicted house sale prices from 1,460 public records. After feature work and comparing a few models, the predictions landed within about 11% of the real sale price.",
        "Tried a few models in Python and settled on XGBoost, then wrote a short summary of which features mattered most to the predictions.",
      ],
    },
  ],
};
