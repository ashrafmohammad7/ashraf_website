import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ project }) => {
  return (
    <div
      className="
      group
      bg-[#081327]
      rounded-3xl
      overflow-hidden
      border
      border-cyan-500/10
      hover:border-cyan-400
      hover:-translate-y-3
      transition-all
      duration-500
      hover:shadow-[0_0_40px_rgba(0,255,255,0.15)]
      "
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-72
          object-cover
          transition-transform
          duration-700
          group-hover:scale-110
          "
        />
      </div>

      <div className="p-8">
        <h3 className="text-3xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((item) => (
            <span
              key={item}
              className="
              px-4
              py-2
              rounded-full
              text-sm
              bg-cyan-500/10
              text-cyan-400
              "
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="
            bg-cyan-500
            text-white
            px-5
            py-3
            rounded-xl
            hover:bg-cyan-600
            transition
            flex items-center gap-2
            "
          >
            <FiExternalLink />
            Live Demo
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="
            border
            border-cyan-400
            text-white
            px-5
            py-3
            rounded-xl
            hover:bg-cyan-500/10
            transition
            flex items-center gap-2
            "
          >
            <FaGithub />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;