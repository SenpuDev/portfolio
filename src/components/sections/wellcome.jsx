import Portrait from './../../components/portrait'
import useInViewShow from '../../hooks/useInViewShow'

import { useContext } from 'react'
import { LanguageContext } from '../../context/translate'
const Wellcome = () => {
  const { elementToObserve, isInView } = useInViewShow()
  const { language, webContent } = useContext(LanguageContext)
  const { wellHi, wellShortDescription, wellLongDescription, wellLetsColaborate } = webContent[language]
  return (
    <>
      <div className='content container' ref={elementToObserve}>
        <Portrait isVisible={isInView} />

        <div className={'presentation ' + (isInView ? 'show' : '')}>
          <p>{wellHi}</p>
          <h1>Senpuu DEV</h1>
          <h2>{wellShortDescription}</h2>
          <p>{wellLongDescription}</p>
          <p className='break'>{wellLetsColaborate}</p>
        </div>
      </div>

      <div className='scroll-icon'>
        <lord-icon
          src='https://cdn.lordicon.com/xwjtkymn.json'
          trigger='loop'
          colors='primary:#ffffff,secondary:#007aff'
          style={{ width: 100, height: 100 }}
        />
      </div>
    </>
  )
}

export default Wellcome
