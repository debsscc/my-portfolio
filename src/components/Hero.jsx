import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className='absolute inset-0 top-[120px] max-w-7xl mx-auto px-6 sm:px-16 flex flex-row items-start gap-5'
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-4 h-4 rounded-full bg-green-400' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-green-400 to-transparent' />
        </div>

        <div>
          <h1 className='text-white font-mono text-[32px] sm:text-[42px] leading-tight'>
            <span className='text-green-400'></span> Olá, eu sou <span className='text-green-400'>Debs</span>
          </h1>
          <p className='mt-3 text-[#A0FFA0] font-mono text-[18px] sm:text-[22px]'>
            Desenvolvedora Full Stack, <br className='sm:block hidden' />
            Designer & Game Developer.
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-green-400 flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-green-400 mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
