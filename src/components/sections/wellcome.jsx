import useInViewShow from '../../hooks/useInViewShow'
import { Suspense, lazy } from 'react'
import useLanguage from '../../hooks/useContext/useLanguage'
import Lottie from 'lottie-react'
import ScrollLottie from './../../img/lotties/scroll.json'
import MailLottie from './../../img/lotties/mail.json'
import GitHubIcon from './../../img/icons/github.svg'
import LinkedInIcon from './../../img/icons/linkedin.svg'

const Wellcome = () => {
  const { elementToObserve, isInView } = useInViewShow()
  const { language, webContent } = useLanguage()

  const { wellHi, wellShortDescription, wellLongDescription, wellLetsColaborate, contactSendEmail } = webContent[language]
  const Spline = lazy(() => import('@splinetool/react-spline'))
  return (
    <>
      <div className='content container' ref={elementToObserve}>
        <div className='portrait'>
          {isInView && (
            <Suspense fallback={<div className='lds-dual-ring' />}>
              <Spline scene='https://prod.spline.design/PjCKAcWVerz6O85s/scene.splinecode' />
            </Suspense>
          )}
        </div>

        <div className={'presentation ' + (isInView ? 'show' : '')}>
          <p className='hello'>{wellHi}</p>
          <h1>Senpuu DEV</h1>
          <h2>{wellShortDescription}</h2>
          <p>{wellLongDescription}</p>
          <p className='break'>{wellLetsColaborate}</p>
          <div className='links'>
            <a target='_blank' href='https://www.linkedin.com/in/senpudev/' aria-label='Visit my page on linkedIn' rel='noreferrer' className='link'>
              <img src={LinkedInIcon} alt='' />
            </a>
            <a target='_blank' href='https://github.com/SenpuDev' aria-label='Visit my page on Github' rel='noreferrer' className='link'>
              <img src={GitHubIcon} alt='' />
            </a>
            <div className='button-wrap'>
              <a href='mailto:contact@senpudev.com'>
                <button className='button-contact'>
                  <p>{contactSendEmail}</p>
                  <div className='icon-email'>
                    <Lottie animationData={MailLottie} loop />
                  </div>
                </button>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className='scroll-icon'>
        <Lottie animationData={ScrollLottie} loop />
      </div>
    </>
  )
}

export default Wellcome
