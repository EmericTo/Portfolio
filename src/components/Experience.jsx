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
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
 
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
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
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
        Expériences.
        </h2>
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
      <br></br>
      <br></br>
      <br></br>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Compétences.
        </h2>
      <br></br>
      <br></br>
      <br></br>
        <p className={`${styles.sectionSubText} text-center`}> 
        <span className="underline">Frontend </span> : HMTL / TAILWINDCSS / TYPESCRIPT / JAVASCRIPT / REACT
        </p>
        <br></br>
        <p className={`${styles.sectionSubText} text-center`}>  
        <span className="underline">API </span> : GRAPHQL / REST
        </p>
        <br></br>
        <p className={`${styles.sectionSubText} text-center`}> 
        <span className="underline">Backend </span> : PYTHON / NODEJS / EXPRESS / PHP
        </p>
        <br></br>
        <p className={`${styles.sectionSubText} text-center`}> 
        <span className="underline">BASE DE DONNEES </span> : POSTGRES / MYSLQ / MONGODB
        </p>
        <br></br>
        <p className={`${styles.sectionSubText} text-center`}> 
        <span className="underline">Gestion </span> : DOCKER
        </p>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Experience, "work");