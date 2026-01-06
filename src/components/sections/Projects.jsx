import Project from '../Project'
import useLanguage from '../../hooks/useLanguage'
import useFilters from '../../hooks/useFilters'
import { FILTER_OPTIONS } from '../../context/Filters'
import useInViewShow from '../../hooks/useInViewShow'
import useModal from '../../hooks/useModal'
import Modal from '../Modal'

const Projects = () => {
  const { filters, setFilters } = useFilters()
  const { language, projectsContent, webContent } = useLanguage()
  const { modal } = useModal()
  const { skillFilterWeb, skillFilterDesign, skillFilterInspire } = webContent[language]
  const projects = projectsContent[language]
  const { elementToObserve, isInView } = useInViewShow()
  const handleClick = (filterToActivate) => {
    setFilters(filterToActivate)
  }

  return (
    <>
      {modal && (
        <Modal />
      )}

      <div className='projects-list' ref={elementToObserve}>
        <div className='filters'>
          <button
            className={filters === FILTER_OPTIONS.WORK_EXPERIENCE ? 'active' : ''}
            onClick={() => handleClick(FILTER_OPTIONS.WORK_EXPERIENCE)}
          >
            {skillFilterWeb}
          </button>
          <button
            className={filters === FILTER_OPTIONS.SIDE_PROJECTS ? 'active' : ''}
            onClick={() => handleClick(FILTER_OPTIONS.SIDE_PROJECTS)}
          >
            {skillFilterDesign}
          </button>
          
        </div>
        {isInView && (
          <>
            {projects.map((project) => {
              if (project.category === filters || filters === FILTER_OPTIONS.ALL) {
                return <Project project={project} key={project.title} />
              }
              return null
            })}
          </>
        )}
      </div>
    </>
  )
}

export default Projects
