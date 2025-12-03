import Logo from './../img/senpuLogo.webp'
import Navigation from './Navigation'
import useLanguage from '../hooks/useContext/useLanguage'
import useScrollRefs from '../hooks/useContext/useScrollRefs'
import { useNavBar } from '../hooks/useNavBar'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const { welcome } = useScrollRefs()
  const { navBarShow } = useNavBar()
  const handleChange = () => {
    toggleLanguage()
  }

  return (
    <header className='header' ref={welcome}>
      <img src={Logo} alt='Senpudev logo' />
      <Navigation navBarShow={navBarShow} />
      <div className={'switch-button ' + (navBarShow ? 'floating ' : '')}>
        <input className='switch-button__checkbox' type='checkbox' id='checkbox' onChange={handleChange} />
        <label className={language === 'en' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>En</label>
        <span>/</span>
        <label className={language === 'es' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>Es</label>
      </div>
    </header>
  )
}

export default Header
