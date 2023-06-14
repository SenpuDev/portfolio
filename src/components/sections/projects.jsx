import Project from '../project'
import useLanguage from '../../hooks/useContext/useLanguage'
import useFilters from '../../hooks/useContext/useFilters'

const Projects = () => {
  const { filters, setFilters } = useFilters()
  const { language, projectsContent, webContent } = useLanguage()
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
