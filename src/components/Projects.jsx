import ProjectCard from "./ProjectCard";

import burnwise from "../assets/burnwise.png";
import forex from "../assets/forexml.png";
import wanderlust from "../assets/wanderlust.png";
import drowsy from "../assets/drowsiness.png";

const projects = [
  {
    title: "Burnwise AI",
    image: burnwise,
    tech: ["React", "TypeScript", "Tailwind", "Vite"],
    description:
      "AI Spend Audit Platform helping startups identify overspending across ChatGPT, Claude, Gemini, Cursor, GitHub Copilot and other AI subscriptions with optimization recommendations and estimated savings.",
    live: "https://burnwise-ai.vercel.app",
    github: "https://github.com/ashrafmohammad7/burnwise-ai",
  },

  {
    title: "ForexML",
    image: forex,
    tech: ["Python", "Django", "Machine Learning"],
    description:
      "Currency exchange prediction dashboard using Gradient Boosting and Linear Regression models with real-time forecasting, charts and analytics.",
    live: "https://currency-exchange-rate-prediction-using.onrender.com",
    github:
      "https://github.com/ashrafmohammad7/Currency-Exchange-Rate-Prediction-using-Django",
  },

  {
    title: "WanderLust",
    image: wanderlust,
    tech: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    description:
      "Full-stack Airbnb-inspired travel platform with authentication, image uploads, property listings, reviews, search functionality and responsive UI.",
    live: "https://wanderlust-8eyf.onrender.com",
    github: "https://github.com/ashrafmohammad7/WanderLust",
  },

  {
    title: "AI Drowsiness Detection",
    image: drowsy,
    tech: ["Python", "Flask", "TensorFlow", "OpenCV"],
    description:
      "Deep learning powered driver safety monitoring system that detects drowsiness using eye image analysis and machine learning models.",
    live: "https://drowsiness-detection-d8x1.onrender.com",
    github:
      "https://github.com/ashrafmohammad7/Drowsiness_Detection-",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-[#020b1d]"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-cyan-400 uppercase tracking-widest text-center">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold text-center text-white mt-3">
          Featured Projects
        </h2>

        <div className="grid lg:grid-cols-2 gap-10 mt-16">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;