function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center px-6">
      <div>
        <h1 className="text-6xl md:text-8xl font-extrabold mb-6">
          Sree <span className="text-cyan-400">Sabarish</span>
        </h1>

        <h2 className="text-3xl md:text-4xl text-slate-300 mb-6">
          AI / ML Engineer
        </h2>

        <p className="max-w-3xl mx-auto text-slate-400 text-xl">
          Building AI-powered applications, Machine Learning solutions,
          Generative AI systems and intelligent software products.
        </p>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="#projects"
            className="bg-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-600"
          >
            View Projects
          </a>

          <a
            href="/resume/Sree_Sabarish_AI_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-cyan-500 px-8 py-4 rounded-xl hover:bg-cyan-500 hover:text-black transition"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;