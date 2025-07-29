import React, { useState, useEffect } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

// Componente que simula o efeito de digitação
const TypingEffect = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayedText}<span className="blinking-cursor">|</span></span>;
};

// Estilo simples para o cursor piscante
const cursorStyle = `
  .blinking-cursor {
    font-weight: 100;
    font-size: 1rem;
    color: #4ade80; /* verde */
    animation: blink 1s step-start infinite;
  }
  @keyframes blink {
    50% { opacity: 0; }
  }
`;

const TerminalHeader = () => (
  <>
    <style>{cursorStyle}</style>
    <div className="flex items-center gap-2 mb-4">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
      <span className="text-green-400 font-mono text-sm ml-2">
        <TypingEffect text="terminal --user=debs" speed={100} />
      </span>
    </div>
  </>
);

const ServiceCard = ({ index, title, icon }) => (
  <Tilt
    options={{
      max: 45,
      scale: 1,
      speed: 450,
    }}
    className='xs:w-[250px] w-full'
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full border-2 border-green-400 p-[1px] rounded-[20px] shadow-lg shadow-green-400/20'
    >
      <div
        className='bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col group hover:bg-gray-900 transition-all duration-300'
      >
        <img
          src={icon}
          alt={`Ícone representando ${title}`}
          className='w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-300 filter-green'
        />

        <h3 className='text-green-400 font-mono text-[18px] font-bold text-center tracking-wider'>
          &gt;_{title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <TerminalHeader />
        <p className={styles.sectionSubText}>Introdução</p>
        <h2 className={styles.sectionHeadText}>Visão Geral</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Sou desenvolvedora multidisciplinar, graduanda em Análise e Desenvolvimento de Sistemas e em Design de Jogos. Além disso, atuo com design, web design, criação de identidade visual e desenvolvimento de jogos, unindo técnica e criatividade para entregar soluções completas.

        Tenho foco em criar produtos funcionais, escaláveis e com ótima experiência para o usuário. Sou aprendiz constante, valorizo a colaboração e busco transformar ideias em projetos reais que geram impacto.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
