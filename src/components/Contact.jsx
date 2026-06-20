import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFilePdf,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-8 bg-slate-900"
    >
      <div className="max-w-5xl mx-auto">

        <p className="text-cyan-400 text-center uppercase tracking-widest">
          CONTACT
        </p>

        <h2 className="text-5xl font-bold text-center mb-12">
          Let's Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">

            <h3 className="text-2xl font-bold mb-6">
              Contact Information
            </h3>

            <div className="space-y-5">

              <div>
                <p className="text-cyan-400">Email</p>
                <p className="text-slate-300">
                  ashrafmohammed07557@gmail.com
                </p>
              </div>

              <div>
                <p className="text-cyan-400">GitHub</p>
                <p className="text-slate-300">
                  github.com/ashrafmohammad7
                </p>
              </div>

              <div>
                <p className="text-cyan-400">LinkedIn</p>
                <p className="text-slate-300">
                  linkedin.com/in/mohammadashraf7
                </p>
              </div>

              <div>
                <p className="text-cyan-400">Location</p>
                <p className="text-slate-300">
                  Hyderabad, India
                </p>
              </div>

            </div>

          </div>

          <div className="bg-slate-950 p-8 rounded-3xl border border-slate-800">

            <h3 className="text-2xl font-bold mb-6">
              Connect With Me
            </h3>

            <div className="flex gap-5 flex-wrap">

              <a
                href="mailto:ashrafmohammed07557@gmail.com"
                className="bg-slate-900 p-5 rounded-2xl text-2xl hover:text-cyan-400"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/ashrafmohammad7"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-5 rounded-2xl text-2xl hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohammadashraf7"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-5 rounded-2xl text-2xl hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://drive.google.com/file/d/1BOg6CGW0W0slvyK_mZamTuU-MuQsbu9L/view"
                target="_blank"
                rel="noreferrer"
                className="bg-slate-900 p-5 rounded-2xl text-2xl hover:text-cyan-400"
              >
                <FaFilePdf />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}