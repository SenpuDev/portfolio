import { scrollToSection } from '../helpers/scrollToSection'
import useToggleMenu from '../hooks/useToggleMenu'
import useLanguage from '../hooks/useContext/useLanguage'
import useScrollRefs from '../hooks/useContext/useScrollRefs'

const Navigation = ({ navBarShow }) => {
  // Custom Hook - NavBarLogic
  const [burguerMenu, toggle] = useToggleMenu(false)
  const { wellcome, skills, projects } = useScrollRefs()

  const { language, webContent } = useLanguage()
  const { navWellcome, navSkills, navProjects } = webContent[language]
  return (
    <>
      <ul className={'navigation ' + (navBarShow ? 'floating ' : '') + (burguerMenu ? 'show-burger-menu' : '')}>

        <li className='menu-mobile'>
          <input checked={burguerMenu} type='checkbox' className='menu-mobile__toggler' onChange={toggle} aria-label='Toggle menu' id='menu-mobile-toggler' />
          <div className='menu-mobile__burger-icon'>
            <div />
          </div>
        </li>

        <li className='nav-item' onClick={() => [scrollToSection(wellcome), burguerMenu && toggle()]}>
          <span />
          {navWellcome}
        </li>
        <li className='nav-item' onClick={() => [scrollToSection(skills), burguerMenu && toggle()]}>
          <span />
          {navSkills}
        </li>
        <li className='nav-item' onClick={() => [scrollToSection(projects), burguerMenu && toggle()]}>
          <span />
          {navProjects}
        </li>
      </ul>
    </>
  )
}

export default Navigation
