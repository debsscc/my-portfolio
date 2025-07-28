import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Debs Carvalho",
          from_email: form.email,
          to_email: "dbndy3@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Mensagem enviada! // Aguardando resposta do sistema...");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Erro no sistema. Tente novamente, agente!");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black p-8 rounded-2xl border-2 border-green-400 shadow-lg font-mono'
      >
        <p className="text-green-400 font-mono text-lg mb-2"># Terminal de Contato</p>
        <h3 className="text-green-500 font-mono text-3xl mb-6">&gt;_ Fale comigo</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-8 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-green-300 font-mono mb-2'>[Nome de usuário]</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu codinome..."
              className='bg-black border border-green-400 py-3 px-5 placeholder:text-green-700 text-green-200 rounded-lg outline-none font-mono'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-green-300 font-mono mb-2'>[E-mail]</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="exemplo@matrix.com"
              className='bg-black border border-green-400 py-3 px-5 placeholder:text-green-700 text-green-200 rounded-lg outline-none font-mono'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-green-300 font-mono mb-2'>[Mensagem]</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Digite sua mensagem secreta...'
              className='bg-black border border-green-400 py-3 px-5 placeholder:text-green-700 text-green-200 rounded-lg outline-none font-mono'
            />
          </label>

          <button
            type='submit'
            className='bg-green-700 hover:bg-green-500 py-3 px-8 rounded-xl outline-none w-fit text-black font-bold font-mono shadow-md shadow-green-400 transition-all'
          >
            {loading ? "Enviando..." : "Enviar //"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");