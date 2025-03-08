import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { experiences } from "../constants";
import { useState } from "react";
import Education from "./Education";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.icon }}
    icon={
      <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-white text-[24px]">{experience.title}</h3>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });
  const [isWork, setIsWork] = useState(true);

  return (
    <>
      <div className="flex justify-start items-center">
        <div className="w-fit green-pink-gradient p-[2px] rounded-[10px] shadow-card mb-4">
          <button
            className="bg-[#151131] text-white px-4 py-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-95"
            onClick={() => {
              setIsWork(!isWork);
            }}
          >
            {isWork ? "View Education" : "View Work"}
          </button>
        </div>
      </div>
      {isWork ? (
        <div ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 1.0 }}
          >
            <p className={styles.sectionSubText}>What I have done so far</p>
            <h2 className={styles.sectionHeadText}>Work Experience</h2>
          </motion.div>
          <div className="mt-20 flex flex-col">
            <VerticalTimeline>
              {experiences.map((exp, index) => (
                <ExperienceCard key={index} experience={exp} />
              ))}
            </VerticalTimeline>
          </div>
        </div>
      ) : (
        <Education isWork={isWork} />
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");
