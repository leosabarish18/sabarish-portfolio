function Projects() {
  const projects = [
    {
      title: "AI Chatbot Web Application",
      description:
        "AI-powered chatbot built using React, FastAPI, Python and Groq API. Supports multiple chat sessions and intelligent responses.",
      image: "/projects/AIchatbot.jpg",
      github: "https://github.com/leosabarish18/ai-chatbot-project",
      demo: "https://ai-chatbot-project-orcin.vercel.app/",
    },

    {
      title: "AI Football Analytics Dashboard",
      description:
        "Advanced football analytics platform with player heatmaps, passing networks, match statistics and AI-powered insights.",
      image: "/projects/football.png",
      github:
        "https://github.com/leosabarish18/AI-Football-Analytics-Dashboard",
      demo:
        "https://ai-football-analytics-dashboard-appzsyrtcssdlmrpzuqj8af.streamlit.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-400 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h3 className="text-3xl font-bold text-cyan-400 mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-cyan-500 hover:bg-cyan-600 px-5 py-2 rounded-lg font-semibold"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-cyan-500 hover:bg-cyan-500 hover:text-black px-5 py-2 rounded-lg font-semibold"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;