import { motion } from 'framer-motion'

type Props = {
  project: {
    title: string
    tools: { category: string; icon: string }[]
    image: string
    liveLink: string
    githubLink: string
  }
  loadMoreClicked: boolean
}

const ProjectItem = ({ project, loadMoreClicked }: Props) => {
  const listItemAnimation = {
    hidden: { opacity: loadMoreClicked ? 1 : 0, y: loadMoreClicked ? 0 : 50 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.li
      className="max-h-[400px] flex flex-col gap-2 justify-between shadow-md rounded-md overflow-hidden bg-[#2B2B2B]"
      variants={listItemAnimation}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      viewport={{ once: true }}
    >
      <img
        className="w-full h-[70%] max-h-[234px]"
        src={project.image}
        alt="pizza project"
      />
      <span className="text-[1.5rem] text-center text-white">
        {project.title}
      </span>
      <div className="flex gap-4 justify-center bg-lemon-yellow p-2 font-bold">
        {project.tools.map((tool, index) => (
          <img
            key={index}
            src={tool.icon}
            alt={tool.category}
            className="w-[30px]"
          />
        ))}
      </div>
      <div className="flex justify-center gap-4 pt-2 pb-4">
        <a
          className="py-2 border-[1px] border-sea-green text-sea-green hover:bg-sea-green hover:text-black w-[75px] text-center"
          href={project.liveLink}
          target="_blank"
        >
          LIVE
        </a>
        <a
          className="py-2 border-[1px] border-white text-white hover:bg-white hover:text-black w-[75px] text-center"
          href={project.githubLink}
          target="_blank"
        >
          GITHUB
        </a>
      </div>
    </motion.li>
  )
}

export default ProjectItem
