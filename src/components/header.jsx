import Logo from './../img/senpuLogo.webp'
import Navigation from './navigation'
import useLanguage from '../hooks/useContext/useLanguage'
import useScrollRefs from '../hooks/useContext/useScrollRefs'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()
  const { wellcome } = useScrollRefs()
  const handleChange = () => {
    toggleLanguage()
  }

  return (
    <header className='header' ref={wellcome}>
      <img src={Logo} alt='Senpudev logo' />
      <Navigation />
      <div className='switch-button'>
        <input className='switch-button__checkbox' type='checkbox' id='checkbox' onChange={handleChange} />
        <label className={language === 'en' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>En</label>
        <span>/</span>
        <label className={language === 'es' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>Es</label>
      </div>
    </header>
  )
}

export default Header
