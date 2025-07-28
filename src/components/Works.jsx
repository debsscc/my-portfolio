import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
  <a href={source_code_link} target="_blank" rel="noopener noreferrer">
    <Tilt
      options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className="bg-black border border-green-400 p-5 rounded-2xl sm:w-[360px] w-full shadow-lg hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt="project_image"
          className="w-full h-full object-cover rounded-2xl border border-green-600"
        />

        <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
          <div
            onClick={(e) => {
              e.preventDefault();
              window.open(source_code_link, "_blank");
            }}
            className="bg-green-700 hover:bg-green-500 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer transition"
          >
            <img
              src={github}
              alt="source code"
              className="w-1/2 h-1/2 object-contain invert"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-green-400 font-mono text-[24px]">{name}</h3>
        <p className="mt-2 text-green-200 text-[14px] font-mono">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[14px] font-mono ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </Tilt>
  </a>
</motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`${styles.sectionSubText} text-center`}
          style={{ fontFamily: "monospace" }}
        >
          Exemplos
        </p>
        <h2
          className={`${styles.sectionHeadText} text-center`}
          style={{ fontFamily: "monospace" }}
        >
          Portfolio
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-green-300 text-[17px] max-w-3xl leading-[30px] font-mono mx-auto text-center"
        >
            Conecte-se com minhas criações. Aqui estão missões concluídas, sistemas desenvolvidos, interfaces funcionais, APIs integradas, e soluções arquitetadas com precisão. Cada projeto é um log de progresso técnico e criativo no meu repositório de experiências.

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
