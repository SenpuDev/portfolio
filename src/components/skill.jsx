import { scrollToSection } from '../helpers/scrollToSection'
import useFilters from '../hooks/useContext/useFilters'
import useScrollRefs from '../hooks/useContext/useScrollRefs'
import useLanguage from '../hooks/useContext/useLanguage'

const Skill = ({ skill }) => {
  const { title, content, logo, id } = skill
  const { filters, setFilters } = useFilters()
  const { projects } = useScrollRefs()

  const { language, webContent } = useLanguage()
  const { showingProjects, showMeProjects } = webContent[language]

  const handleClick = (skillId) => {
    setFilters(skillId)
    scrollToSection(projects)
  }

  return (
    <div className='skill'>
      <img className='image-skill' src={logo} alt='Skill icon' />
      <h2>{title}</h2>
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
