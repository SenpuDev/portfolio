import { useContext } from 'react'
import { scrollToSection } from '../helpers/scrollToSection'
import { FiltersContext } from './../context/filters'
import { ScrollRefsContext } from './../context/scrollRefs'

const Skill = ({ skill }) => {
  const { title, content, logo, id } = skill
  const { filters, setFilters } = useContext(FiltersContext)
  const { projects } = useContext(ScrollRefsContext)

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
        <button className={'button-shine ' + (filters === id ? 'active' : '')} onClick={() => handleClick(id)}>{(filters === id ? 'Showing Projects!' : 'Show me projects')}</button>
      </div>

    </div>
  )
}

export default Skill
