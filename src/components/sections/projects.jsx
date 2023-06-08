import { useContext } from 'react'
import { FiltersContext } from './../../context/filters'

import Project from '../project'

// JSON
import projects from './../../json/projects.json'

const Projects = () => {
  const { filters, setFilters } = useContext(FiltersContext)

  const handleClick = (filterToActivate) => {
    setFilters(filterToActivate)
  }

  return (
    <>
      <div className='projects-list'>
        <div className='filters'>
          <button className={filters === 1 ? 'active' : ''} onClick={() => handleClick(1)}>Web Develop</button>
          <button className={filters === 2 ? 'active' : ''} onClick={() => handleClick(2)}>3D & Design</button>
          <button className={filters === 3 ? 'active' : ''} onClick={() => handleClick(3)}>Learning Achievements</button>
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
