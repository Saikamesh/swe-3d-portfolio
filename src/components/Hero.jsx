import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row item-start gap-5`}
      >

        <div className="flex flex-col justify-start items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div style={{ zindex: 1}}>
            
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m{" "}
              <span className="text-[#915eff]">Sai Dwibhashyam</span>
            </h1>
            
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              I am a passionate Software Engineer{" "}
              <br className="sm:block hidden" /> who enjoys learning and
              creating innovative and efficient solutions!
            </p>

            <div className="flex sm:flex-row mt-7">
              <a
                href="https://github.com/Saikamesh"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
              >
                <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                  GitHub
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/saidwibhashyam/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
              >
                <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                  LinkedIn
                </button>
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4 sm:mb-0 sm:mr-4 green-pink-gradient p-[2px] rounded-[10px] shadow-card"
              >
                <button className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95">
                  <strong>CV</strong>
                </button>
              </a>
            </div>

          </div>
        </div>
      
      <ComputersCanvas />
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
