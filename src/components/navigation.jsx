import { useContext } from 'react'
import { ScrollRefsContext } from './../context/scrollRefs'

import { useNavBar } from './../hooks/useNavBar'
import { scrollToSection } from '../helpers/scrollToSection'
import useToggleMenu from '../hooks/useToggleMenu'

const Navigation = () => {
  // Custom Hook - NavBarLogic
  const [burguerMenu, toggle] = useToggleMenu(false)
  const { navBarShow } = useNavBar()
  const { wellcome, skills, projects, contact } = useContext(ScrollRefsContext)

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
          Wellcome
        </li>
        <li className='nav-item' onClick={() => [scrollToSection(skills), burguerMenu && toggle()]}>
          <span />
          Skills
        </li>
        <li className='nav-item' onClick={() => [scrollToSection(projects), burguerMenu && toggle()]}>
          <span />
          Projects
        </li>
        <li className='nav-item' onClick={() => [scrollToSection(contact), burguerMenu && toggle()]}>
          <span />
          Contact
        </li>
      </ul>
    </>
  )
}

export default Navigation
