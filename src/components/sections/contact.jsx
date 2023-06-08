import GitHubIcon from './../../img/icons/github.svg'
import LinkedInIcon from './../../img/icons/linkedin.svg'
import useInViewShow from '../../hooks/useInViewShow'

const Contact = () => {
  const { elementToObserve, isInView } = useInViewShow()
  return (
    <>
      <div className={isInView ? 'container-80 show' : 'container-80'} ref={elementToObserve}>
        <h2 className='title'>Get in touch</h2>
        <div className='container'>
          <div className='get-in-touch'>
            <p className='get-in-touch__content'>Feel free to reach out by sending me an email or saying hello on my social networks. Let's discuss your project and bring your vision to life together.</p>
            <p className='break'>I look forward to connecting with you and exploring how we can collaborate!🙂</p>
            <div className='links'>
              <a target='_blank' href='https://www.linkedin.com/in/senpudev/' aria-label='Visit my page on linkedIn' rel='noreferrer' className='link'>
                <img src={LinkedInIcon} alt='' />
              </a>
              <a target='_blank' href='https://github.com/SenpuDev' aria-label='Visit my page on Github' rel='noreferrer' className='link'>
                <img src={GitHubIcon} alt='' />
              </a>
            </div>

          </div>
          <p className='get-in-touch__faster'>or</p>
          <div className='button-wrap'>
            <a href='mailto:senpuudev@gmail.com'>
              <button className='button-contact'>
                <p>Send me an email!</p>
                <div className='lord-icon-email'>
                  <lord-icon
                    src='https://cdn.lordicon.com/rhvddzym.json'
                    trigger='loop'
                    delay='2000'
                    colors='primary:#ffffff,secondary:#08a88a'
                    style={{ width: 50, height: 50, margin: 0, padding: 0 }}
                  />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
