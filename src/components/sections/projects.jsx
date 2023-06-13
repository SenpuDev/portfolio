import { useContext } from 'react'
import { FiltersContext } from './../../context/filters'
import { LanguageContext } from '../../context/translate'

import Project from '../project'

const Projects = () => {
  const { filters, setFilters } = useContext(FiltersContext)
  const { language, projectsContent, webContent } = useContext(LanguageContext)
  const { skillFilterWeb, skillFilterDesign, skillFilterInspire } = webContent[language]
  const projects = projectsContent[language]

  const handleClick = (filterToActivate) => {
    setFilters(filterToActivate)
  }

  return (
    <>
      <div className='projects-list'>
        <div className='filters'>
          <button className={filters === 1 ? 'active' : ''} onClick={() => handleClick(1)}>{skillFilterWeb}</button>
          <button className={filters === 2 ? 'active' : ''} onClick={() => handleClick(2)}>{skillFilterDesign}</button>
          <button className={filters === 3 ? 'active' : ''} onClick={() => handleClick(3)}>{skillFilterInspire}</button>
        </div>

        {projects.map((project) => {
          if (project.category === filters || filters === 0) { // 0 = no filter applied, for future implementations
            return (
              <Project project={project} key={project.title} />
            )
          }
          return null
        })}
      </div>
    </>
  )
}

export default Projects
