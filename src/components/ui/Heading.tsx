import { motion } from 'framer-motion'

type Props = {
  text: string
}

const Heading = ({ text }: Props) => {
  const word = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08
      }
    }
  }

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.h2
      id={text}
      className="text-[2rem] text-sea-green text-center mb-8 font-bold"
      variants={word}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split('').map((char, index) => {
        return (
          <motion.span key={char + '-' + index} variants={letter}>
            {char.toUpperCase()}
          </motion.span>
        )
      })}
    </motion.h2>
  )
}

export default Heading
