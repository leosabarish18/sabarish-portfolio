function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-8 py-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Sree Sabarish"
            className="w-96 h-96 object-cover rounded-3xl border-4 border-cyan-400 shadow-lg shadow-cyan-500/30"
          />
        </div>

        {/* About Content */}
        <div>
          <h2 className="text-6xl font-bold mb-10">
            About Me
          </h2>

          <p className="text-slate-300 text-xl leading-10 mb-8">
            I am Sree Sabarish, an aspiring AI/ML Engineer and Computer
            Science & Design Engineering student passionate about
            Artificial Intelligence, Machine Learning, Generative AI,
            and Data Analytics.
          </p>

          <p className="text-slate-300 text-xl leading-10 mb-8">
            I enjoy building intelligent applications, AI-powered
            solutions, analytics dashboards, recommendation systems,
            and machine learning models that solve real-world problems.
          </p>

          <p className="text-slate-300 text-xl leading-10">
            My goal is to contribute to innovative AI products and grow
            as an AI Engineer by continuously learning modern AI
            technologies and building impactful projects.
          </p>

          <div className="flex gap-20 mt-12">

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                2+
              </h3>
              <p className="text-slate-400 text-lg">
                AI Projects
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-bold text-cyan-400">
                10+
              </h3>
              <p className="text-slate-400 text-lg">
                Technologies
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;