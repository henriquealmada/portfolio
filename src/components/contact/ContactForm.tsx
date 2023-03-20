import { useForm } from 'react-hook-form'
import { SubmitHandler } from 'react-hook-form/dist/types'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2
    }
  }
}

const formItem = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0
  }
}

interface IFormInput {
  nome: string
  email: string
  mensagem: string
}

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>()

  const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
    const templateParams = {
      from_name: data.nome,
      message: data.mensagem,
      email: data.email
    }

    emailjs
      .send(
        'service_cweqquo',
        'template_zzoe2zt',
        templateParams,
        'lXj05eGBUrh8qr4mT'
      )
      .then(() => {
        e?.target.reset()
      })
      .catch(err => console.log('ERROR ', err))
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-[860px] mx-auto flex flex-col gap-8 py-4 sm:px-[4rem] shadow-xl rounded-[5px] text-white"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div variants={formItem} viewport={{ once: true }}>
        <label htmlFor="nome" className="block">
          Nome
        </label>
        <input
          id="nome"
          className={`w-full p-4 border-b-[1px] outline-none rounded-[5px] bg-[#2B2B2B] ${
            errors.nome ? 'border-[red]' : 'border-b-lemon-yellow'
          }`}
          type="text"
          {...register('nome', { required: 'Preencha este campo.' })}
        />
      </motion.div>
      <motion.div variants={formItem} viewport={{ once: true }}>
        <label htmlFor="email" className="block">
          Email
        </label>
        <input
          id="email"
          className={`w-full p-4 border-b-[1px] outline-none rounded-[5px] bg-[#2B2B2B] ${
            errors.email ? 'border-[red]' : 'border-b-lemon-yellow'
          }`}
          type="email"
          {...register('email', {
            required: 'Preencha este campo.',
            pattern:
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
          })}
        />
      </motion.div>
      <motion.div
        className="md:col-span-2"
        variants={formItem}
        viewport={{ once: true }}
      >
        <label htmlFor="mensagem" className="block">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          className={`w-full p-2 border-b-[1px] outline-none rounded-[5px] bg-[rgb(43,43,43)] ${
            errors.mensagem ? 'border-[red]' : ' border-b-lemon-yellow'
          }`}
          cols={30}
          rows={5}
          {...register('mensagem', { required: 'Preencha este campo.' })}
        ></textarea>
      </motion.div>
      <motion.div
        className="flex justify-center"
        variants={formItem}
        viewport={{ once: true }}
      >
        <button className="py-3 w-[200px] rounded-[2em] text-[1.2rem] border-[1px] border-sea-green text-sea-green hover:translate-y-[-3px] duration-300">
          ENVIAR
        </button>
      </motion.div>
    </motion.form>
  )
}

export default ContactForm
