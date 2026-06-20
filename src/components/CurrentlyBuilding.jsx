export default function CurrentlyBuilding() {

return(

<section
id="building"
className="py-28 bg-slate-950 px-8"
>

<div className="max-w-6xl mx-auto">

<p className="text-sky-400 text-center">
CURRENTLY BUILDING
</p>

<h2 className="text-5xl font-bold text-center mb-16">
Ongoing Projects
</h2>

<div className="grid md:grid-cols-2 gap-8">

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

<h3 className="text-2xl font-bold">
🚀 Nexora AI
</h3>

<p className="mt-4 text-slate-300">
AI-powered placement intelligence platform designed
to help students analyze resumes, identify skill gaps,
track progress, and prepare for interviews.
</p>

<div className="flex flex-wrap gap-2 mt-4">
  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    React
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    Spring Boot
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    FastAPI
  </span>
</div>

</div>

<div className="bg-slate-900 rounded-3xl p-8 border border-slate-800">

<h3 className="text-2xl font-bold">
🚗 RAPIFIX
</h3>

<p className="mt-4 text-slate-300">
Fleet and vehicle maintenance management system
that enables organizations to track service records,
maintenance schedules, fuel usage, and operational efficiency.
</p>
<div className="flex flex-wrap gap-2 mt-4">
  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    React
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    Spring Boot
  </span>

  <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400">
    PostgreSQL
  </span>
</div>

</div>

</div>

</div>

</section>

)

}