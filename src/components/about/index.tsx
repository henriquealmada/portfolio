import perfil from '../../assets/perfil.png'
import { motion } from 'framer-motion'
import Heading from '../ui/Heading'

const About = () => {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Tailwind CSS',
    'Git',
    'Github'
  ]

  return (
    <section id="sobre" className="py-[8rem] px-[1rem]">
      <div className="max-w-[1400px] mx-auto">
        <Heading text={'sobre'} />
        <div className="lg:flex gap-8 items-center">
          <div className="md:flex-1 lg:flex-none mb-8 md:mb-0">
            <motion.img
              initial={{ translateX: -100, opacity: 0 }}
              whileInView={{
                translateX: 0,
                opacity: 1,
                transition: { duration: 0.8 }
              }}
              viewport={{ once: true }}
              className="w-[90%] md:w-full max-h-[600px] max-w-[612px] mx-auto rounded-lg"
              src={perfil}
              alt="perfil"
            />
          </div>
          <motion.div
            initial={{ translateX: 100, opacity: 0 }}
            whileInView={{
              translateX: 0,
              opacity: 1,
              transition: { duration: 0.8 }
            }}
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h3 className="text-[1.7rem] text-white">Sobre mim</h3>
            <p className="max-w-[600px] mx-auto lg:mx-0 text-[#9799a1]">
              Sou Henrique Almada, tenho 21 anos e sou estudante de Análise e
              Desenvolvimento de Sistemas na UNESC. Ao longo do curso, tive a
              oportunidade de criar alguns projetos, com os quais pude aprimorar
              minhas habilidades e aprender novas tecnologias.
            </p>
            <br />
            <p className="max-w-[600px] mx-auto lg:mx-0 text-[#9799a1]">
              Meu foco principal é o desenvolvimento front-end, onde gosto de
              trabalhar com React e Next.js. No entanto, também possuo
              conhecimentos em ferramentas back-end, como Node.js e o banco de
              dados MongoDB.
            </p>
            <br />
            <h3 className="text-[1.7rem] text-white mb-2">Skills</h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start max-w-[600px] mx-auto lg:mx-0">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="py-2 px-4 rounded-[5px] border-[1px] border-sea-green text-sea-green hover:translate-y-[-3px] duration-300"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
