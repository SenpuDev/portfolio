import Logo from './../img/senpuLogo.webp'
import Navigation from './navigation'
import useLanguage from '../hooks/useContext/useLanguage'

const Header = () => {
  const { language, toggleLanguage } = useLanguage()

  const handleChange = () => {
    toggleLanguage()
  }

  return (
    <header className='header'>
      <div className='header-wrap'>
        <img src={Logo} alt='Senpudev logo' />
        <Navigation />
        <div className='switch-button'>
          <input className='switch-button__checkbox' type='checkbox' id='checkbox' onChange={handleChange} />
          <label className={language === 'en' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>En</label>
          <span>/</span>
          <label className={language === 'es' ? 'switch-button__label selected' : 'switch-button-label'} htmlFor='checkbox'>Es</label>
        </div>

      </div>

    </header>
  )
}

export default Header
