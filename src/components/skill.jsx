import { scrollToSection } from '../helpers/scrollToSection'
import useFilters from '../hooks/useContext/useFilters'
import useScrollRefs from '../hooks/useContext/useScrollRefs'
import useLanguage from '../hooks/useContext/useLanguage'
import { Suspense, lazy } from 'react'

const Skill = ({ skill, isInView }) => {
  const { title, content, logo, id } = skill
  const { filters, setFilters } = useFilters()
  const { projects } = useScrollRefs()

  const { language, webContent } = useLanguage()
  const { showingProjects, showMeProjects } = webContent[language]

  const handleClick = (skillId) => {
    setFilters(skillId)
    scrollToSection(projects)
  }

  const Spline = lazy(() => import('@splinetool/react-spline'))

  return (
    <div className='skill'>
      <div className='skill-header'>

        <div className='image-skill'>
          {isInView && (
            <Suspense fallback={<div className='lds-dual-ring' />}>
              <Spline scene={logo} />
            </Suspense>
          )}
        </div>
        <h2>{title}</h2>

      </div>

      <div>
        <p>{content}</p>
      </div>

      <div className='button-wrap'>
        <button className={'button-shine ' + (filters === id ? 'active' : '')} onClick={() => handleClick(id)}>{(filters === id ? showingProjects : showMeProjects)}</button>
      </div>

    </div>
  )
}

export default Skill
