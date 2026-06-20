import { FaCertificate } from "react-icons/fa";

const certs = [
  {
    title: "Microsoft Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
  },
  {
    title: "AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
  },
  {
    title: "Programming in Java",
    issuer: "NPTEL",
  },
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
  },
  {
    title: "SQL (Basic)",
    issuer: "HackerRank",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="py-28 bg-slate-900 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <p className="text-cyan-400 text-center uppercase tracking-widest">
          ACHIEVEMENTS
        </p>

        <h2 className="text-5xl font-bold text-center mb-16">
          Professional Certifications
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-6 hover:border-cyan-400 transition duration-300"
            >
              <FaCertificate className="text-cyan-400 text-3xl mb-4" />

              <p className="font-semibold text-white">
                {cert.title}
              </p>

              <p className="text-sm text-slate-400 mt-2">
                {cert.issuer}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}