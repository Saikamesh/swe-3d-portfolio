import { motion, useInView } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useRef } from "react";
import { styles } from "../styles";
import { education } from "../constants";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={education.date}
    iconStyle={{ background: education.icon }}
    icon={
      <div className="flex justify-center items-center w-full h-full rounded-full overflow-hidden">
        <img
          src={education.icon}
          alt={education.major}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
    }
  >
    <div>
      <div className="flex justify-between">
        <h3 className="text-white text-[24px]">{education.degree}</h3>
        <span className="flex items-center">{education.gpa}</span>
      </div>
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {education.major} | {education.university}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {education.course_work.map((point, index) => (
        <li
          key={`education-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Education = ({ isWork }) => {
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1.0 }}
        >
          <p className={styles.sectionSubText}>My Academic Background</p>
          <h2 className={styles.sectionHeadText}>Education</h2>
        </motion.div>
        <div className="mt-20 flex flex-col">
          <VerticalTimeline>
            {education.map((edu, index) => (
              <EducationCard key={index} education={edu} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </>
  );
};

export default Education;
