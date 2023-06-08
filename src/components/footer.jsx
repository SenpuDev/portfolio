import GitHubIcon from './../img/icons/github.svg'
const Footer = () => {
  return (
    <footer className='footer'>
      <a
        href='https://github.com/SenpuDev/hello'
        target='_blank'
        rel='noreferrer'
        aria-label='Visit this project source code'
      >
        Designed & Built by Germán Pérez - {new Date().getFullYear()}
        <img src={GitHubIcon} alt='Github Icon' />
      </a>
    </footer>
  )
}

export default Footer
