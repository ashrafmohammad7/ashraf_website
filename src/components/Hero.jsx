import profile from "../assets/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#020b1f] pt-36">

      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT */}

        <div>

          <p className="text-cyan-400 text-xl mb-5">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-none text-white">
            Mohammad
            <br />
            <span className="text-cyan-400">
              Ashraf
            </span>
          </h1>

          <div className="mt-6">

            <p className="text-slate-400 text-lg">
              📍 Hyderabad, India
            </p>

            <p className="text-slate-400 mt-2 max-w-xl">
              Open to Software Engineer, Full Stack Developer and AI/ML opportunities.
            </p>

          </div>

          <TypeAnimation
            sequence={[
              "Software Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "AI & ML Engineer",
              2000,
              "Backend Developer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="h2"
            className="text-cyan-400 text-3xl md:text-5xl font-bold mt-10"
          />

          <p className="mt-8 text-slate-300 text-xl leading-9 max-w-2xl">
            Final-Year Computer Science Engineering (AIML) student passionate about building scalable web applications, AI-powered SaaS products, machine learning solutions and modern software systems that solve real-world problems.
          </p>

          {/* BUTTONS */}

          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://drive.google.com/file/d/1BOg6CGW0W0slvyK_mZamTuU-MuQsbu9L/view"
              target="_blank"
              rel="noreferrer"
              className="
              bg-cyan-500
              hover:bg-cyan-600
              px-8 py-4
              rounded-xl
              text-white
              font-semibold
              transition
              "
            >
              Resume
            </a>

            <a
              href="https://github.com/ashrafmohammad7"
              target="_blank"
              rel="noreferrer"
              className="
              border border-cyan-400
              px-8 py-4
              rounded-xl
              text-white
              hover:bg-cyan-500/10
              transition
              "
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/mohammadashraf7"
              target="_blank"
              rel="noreferrer"
              className="
              border border-cyan-400
              px-8 py-4
              rounded-xl
              text-white
              hover:bg-cyan-500/10
              transition
              "
            >
              LinkedIn
            </a>

          </div>

          {/* SOCIALS */}

          {/* SOCIALS */}

<div className="flex gap-4 mt-8">

  <a
    href="https://github.com/ashrafmohammad7"
    target="_blank"
    rel="noreferrer"
    className="
    w-12 h-12
    flex items-center justify-center
    rounded-xl
    bg-[#081327]
    border border-cyan-500/10
    text-xl text-white
    hover:border-cyan-400
    hover:text-cyan-400
    transition
    "
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/mohammadashraf7"
    target="_blank"
    rel="noreferrer"
    className="
    w-12 h-12
    flex items-center justify-center
    rounded-xl
    bg-[#081327]
    border border-cyan-500/10
    text-xl text-white
    hover:border-cyan-400
    hover:text-cyan-400
    transition
    "
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:ashrafmohammed07557@gmail.com"
    className="
    w-12 h-12
    flex items-center justify-center
    rounded-xl
    bg-[#081327]
    border border-cyan-500/10
    text-xl text-white
    hover:border-cyan-400
    hover:text-cyan-400
    transition
    "
  >
    <FaEnvelope />
  </a>

</div>

        </div>

        {/* RIGHT SIDE */}

<motion.div
  animate={{
    y: [0, -10, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="flex flex-col items-center"
>
  {/* IMAGE */}

  <div className="relative">

  {/* Glow */}

  <div
    className="
    absolute
    inset-0
    rounded-full
    bg-cyan-500/20
    blur-[120px]
    scale-125
    "
  />

  {/* Circle */}

  <div
    className="
    w-[400px]
    h-[400px]
    md:w-[500px]
    md:h-[500px]
    rounded-full
    overflow-hidden
    border-[5px]
    border-cyan-400
    shadow-[0_0_80px_rgba(34,211,238,0.35)]
    bg-white
    relative
    z-10
    flex
    items-center
    justify-center
    "
  >
    <img
      src={profile}
      alt="Mohammad Ashraf"
      className="
      w-[100%]
      h-[125%]
      object-contain
      scale-[1.02]
      translate-y-12
      "
    />
  </div>

</div>

  {/* STATS CARD */}

  <div
    className="
    mt-8
    w-full
    max-w-[650px]
    bg-[#081327]
    border
    border-cyan-500/10
    rounded-3xl
    p-8
    grid
    grid-cols-4
    gap-4
    shadow-lg
    "
  >

    <div className="text-center">
      <h3 className="text-cyan-400 text-4xl font-bold">
        4+
      </h3>
      <p className="text-slate-400 mt-1">
        Projects
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-cyan-400 text-4xl font-bold">
        8.73
      </h3>
      <p className="text-slate-400 mt-1">
        CGPA
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-cyan-400 text-4xl font-bold">
        5+
      </h3>
      <p className="text-slate-400 mt-1">
        Certifications
      </p>
    </div>

    <div className="text-center">
      <h3 className="text-cyan-400 text-4xl font-bold">
        1
      </h3>
      <p className="text-slate-400 mt-1">
        Internship
      </p>
    </div>

  </div>

</motion.div>

      </div>
    </section>
  );
}