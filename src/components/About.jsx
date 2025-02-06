import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services, technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, name, icon }) => {
  return (
    <Tilt className="xs:w-[114px] w-auto">
      <motion.div
        variants={fadeIn("right", "spring", 0.32 * index, 0.32)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-3 px-8 w-28 h-28 flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={name} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[0.80rem] font-medium text-center">
            {name}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a passionate Software Engineer who enjoys learning and creating
        innovative and efficient solutions! I have experience with various
        programming languages, including Java, Python, C#, and
        JavaScript/TypeScript. I have hands-on experience working with popular
        frameworks like Angular, Spring & SpringBoot, React, Django, ASP.NET,
        and Nodejs. Additionally, I am well-versed in tools and technologies
        like Git, Linux, Docker, and Apache Kafka.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {technologies.map((tech, index) => (
          <ServiceCard key={tech.name} index={index} {...tech}/>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
