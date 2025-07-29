import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#0f0f0f",
        color: "#00ff88",
        fontFamily: "monospace",
        border: "1px solid #00ff88",
      }}
      contentArrowStyle={{ borderRight: "7px solid #00ff88" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, border: "2px solid #00ff88" }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-[24px] font-bold' style={{ color: "#00ff88", fontFamily: "monospace" }}>
          {experience.title}
        </h3>
        <p
          className='text-[16px] font-semibold'
          style={{ margin: 0, color: "#88ffcc", fontFamily: "monospace" }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[14px] pl-1 tracking-wider'
            style={{ color: "white", fontFamily: "monospace" }}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={styles.sectionSubText}>Áreas de Atuação</p>
        <h2 className={styles.sectionHeadText}>Projetos em destaque</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
