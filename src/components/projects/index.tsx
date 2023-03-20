import { projects } from '../../utils/projects'
import ProjectItem from '../../components/projects/ProjectItem'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Heading from '../ui/Heading'

let loadMoreClicked = false

const categories = ['Todos', 'HTML/CSS', 'JavaScript', 'React']

const listAnimation = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.2
    }
  }
}

const Projects = () => {
  const [projectsList, setProjectsList] = useState(projects)

  const [index, setIndex] = useState(6)

  const [selectedCategorie, setSelectedCategorie] = useState('Todos')

  const loadMoreProjects = () => {
    setIndex(index + 3)
    loadMoreClicked = true
  }

  const filterProjects = (tool: string) => {
    setSelectedCategorie(tool)
    if (tool === 'Todos') {
      setProjectsList([...projects])
    } else if (tool === 'HTML/CSS') {
      tool = 'HTML'
      setProjectsList(
        projects.filter(
          project =>
            project.tools?.some(t => t.category === tool) &&
            project.tools?.every(t => t.category !== 'JavaScript')
        )
      )
    } else {
      setProjectsList(
        projects.filter(project =>
          project.tools?.some(t => t.category === tool)
        )
      )
    }
    loadMoreClicked = true
    setIndex(6)
  }

  return (
    <section id="projetos" className="py-[4rem] px-8">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8">
        <Heading text={'projetos'} />
        <div className="flex flex-wrap gap-2">
          {categories.map((categorie, listIndex) => (
            <button
              key={listIndex}
              className={`border-[1px] text-[0.8rem] sm:text-[1rem] border-lemon-yellow text-lemon-yellow p-2 hover:bg-lemon-yellow hover:text-black ${
                selectedCategorie === categorie
                  ? 'bg-lemon-yellow text-[black]'
                  : ''
              }`}
              onClick={() => filterProjects(categorie)}
            >
              {categorie}
            </button>
          ))}
        </div>
        <motion.ul
          className="w-full grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
          variants={listAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projectsList.slice(0, index).map((project, listIndex) => (
            <ProjectItem
              key={listIndex}
              project={project}
              loadMoreClicked={loadMoreClicked}
            />
          ))}
        </motion.ul>
        {index < projectsList.length && (
          <button
            className="border-[1px] border-lemon-yellow text-lemon-yellow p-2 hover:translate-y-[-3px] duration-300"
            onClick={loadMoreProjects}
          >
            Ver mais
          </button>
        )}
      </div>
    </section>
  )
}

export default Projects
