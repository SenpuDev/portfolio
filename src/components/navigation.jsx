
import { useNavBar } from './../hooks/useNavBar'
import { scrollToSection } from '../helpers/scrollToSection'
import useToggleMenu from '../hooks/useToggleMenu'
import useLanguage from '../hooks/useContext/useLanguage'
import useScrollRefs from '../hooks/useContext/useScrollRefs'

const Navigation = () => {
  // Custom Hook - NavBarLogic
  const [burguerMenu, toggle] = useToggleMenu(false)
  const { navBarShow } = useNavBar()
  const { wellcome, skills, projects, contact } = useScrollRefs()

  const { language, webContent } = useLanguage()
  const { navWellcome, navSkills, navProjects, navContact } = webContent[language]
  return (
    <>
      <ul className={'navigation ' + (navBarShow ? 'floating ' : '') + (burguerMenu ? 'show-burger-menu' : '')}>

        <li className='menu-mobile'>
          <input checked={burguerMenu} type='checkbox' className='menu-mobile__toggler' onChange={toggle} aria-label='Toggle menu' />
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
        <li className='nav-item' onClick={() => [scrollToSection(contact), burguerMenu && toggle()]}>
          <span />
          {navContact}
        </li>
      </ul>
    </>
  )
}

export default Navigation
