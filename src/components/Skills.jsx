const skills = [
  "Python",
  "Machine Learning",
  "React",
  "FastAPI",
  "MongoDB",
  "MySQL",
  "Java",
  "Git",
  "Figma",
];

function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto py-28 px-6"
    >
      <h2 className="text-5xl font-bold text-center mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center hover:border-cyan-400 hover:scale-105 transition"
          >
            <h3 className="text-xl font-semibold">
              {skill}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Skills;