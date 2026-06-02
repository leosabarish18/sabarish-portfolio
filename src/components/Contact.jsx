import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-28 text-center px-6"
    >
      <h2 className="text-5xl font-bold mb-8">
        Contact
      </h2>

      <p className="text-gray-400">
        Let's build something amazing.
      </p>

      <div className="flex justify-center gap-8 text-4xl mt-10">

        <a
          href="https://github.com/leosabarish18"
          target="_blank"
        >
          <FaGithub className="hover:text-cyan-400" />
        </a>

        <a
          href="https://www.linkedin.com/in/sreesabarish/"
          target="_blank"
        >
          <FaLinkedin className="hover:text-cyan-400" />
        </a>

      </div>
    </section>
  );
}

export default Contact;