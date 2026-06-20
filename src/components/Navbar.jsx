import { useState, useEffect } from "react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "About",
    "Skills",
    "Projects",
    "Experience",
    "Certifications",
    "Contact",
  ];

  return (
    <nav
      className={`
      fixed top-6 left-1/2 -translate-x-1/2
      z-50
      w-[92%]
      max-w-7xl
      rounded-2xl
      backdrop-blur-md
      bg-[#071225]/80
      border border-cyan-500/10
      transition-all duration-500
      ${
        scroll
          ? "shadow-[0_0_30px_rgba(34,211,238,0.15)]"
          : ""
      }
    `}
    >
      <div className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-white">
          Mohammad
          <span className="text-cyan-400"> Ashraf</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-slate-300">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="
                hover:text-cyan-400
                transition
                duration-300
                "
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}