import { motion } from "framer-motion";

const stats = [
  { value: "8.73", label: "CGPA" },
  { value: "4", label: "Live Projects" },
  { value: "5+", label: "Certifications" },
  { value: "1", label: "Internship" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-slate-950">

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-8">

        {stats.map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
            }}
            className="rounded-3xl bg-slate-900 border border-slate-800 p-8 text-center"
          >

            <h3 className="text-4xl font-bold text-sky-400">
              {item.value}
            </h3>

            <p className="mt-2 text-slate-400">
              {item.label}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}