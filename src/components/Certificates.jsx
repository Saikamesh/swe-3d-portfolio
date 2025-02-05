import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { certificates } from "../constants";
import { Tilt } from "react-tilt";
import { link } from "../assets";

const CertificateCard = ({
  index,
  name,
  issuer,
  issue_date,
  credential_url,
}) => {
  return (
    <Tilt className="w-[50%]]">
      <motion.div
        variants={fadeIn("down", "spring", 0.33 * index, 0.33)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-3 px-8 w-auto h-28 flex justify-between items-center"
        >
          {/* Place to add image in future if deemed necessary */}
          {/* <img src={icon} alt={name} className="w-16 h-16 object-contain" /> */}
          <h3 className="text-white text-[0.80rem] font-medium text-center flex-1">
            {name}
          </h3>
          {/* <div className="m-3 absolute inset-0 flex justify-end card-img_hover"> */}
            <div
              onClick={() => window.open(credential_url, "_blank")}
              className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-4"
            >
              <img
                src={link}
                alt="external-link"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        {/* </div> */}
      </motion.div>
    </Tilt>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          This section highlights my certifications and credentials, showcasing
          my expertise in various technologies and domains. Each certification
          demonstrates my commitment to continuous learning and professional
          growth. Where applicable, links to verification are provided. More
          certifications will be added as I continue to expand my knowledge and
          skill set.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...certificate}
          />
        ))}
        {/* {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))} */}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
