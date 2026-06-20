const skillCategories = [

{
title:"Programming Languages",
skills:["Java","Python","JavaScript"]
},

{
title:"Web Development",
skills:["HTML","CSS","React","Node.js","Express.js"]
},

{
title:"Database & Cloud",
skills:["MongoDB","MySQL","AWS Basics","GitHub"]
},

{
title:"AI & Machine Learning",
skills:["Machine Learning","Deep Learning","OpenCV"]
},

{
title:"Tools & Technologies",
skills:["Git","VS Code","Render","Vercel"]
}

];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 px-8 bg-slate-900"
    >

      <div className="max-w-6xl mx-auto">

        <p className="text-sky-400 text-center">
          TECH STACK
        </p>

        <h2 className="text-5xl font-bold text-center mb-16">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((item,index)=>(

            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-sky-500 transition"
            >

              <h3 className="text-sky-400 text-xl font-bold mb-5">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {item.skills.map((skill,i)=>(

                  <span
                    key={i}
                    className="bg-sky-500/10 text-sky-400 px-3 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}