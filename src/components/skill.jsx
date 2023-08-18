import { scrollToSection } from '../helpers/scrollToSection'
import useFilters from '../hooks/useContext/useFilters'
import useScrollRefs from '../hooks/useContext/useScrollRefs'
import useLanguage from '../hooks/useContext/useLanguage'

import Lottie from 'lottie-react'

import BuildLottie from './../img/lotties/build.json'
import DesignLottie from './../img/lotties/design.json'
import TeachLottie from './../img/lotties/teach.json'

import { useRef } from 'react'

const Skill = ({ skill }) => {
  const { title, content, logo, id } = skill
  const { filters, setFilters } = useFilters()
  const { projects } = useScrollRefs()

  const { language, webContent } = useLanguage()
  const { showMeProjects } = webContent[language]

  const handleClick = (skillId) => {
    setFilters(skillId)
    scrollToSection(projects)
  }

  const lottieDictionary = {
    build: BuildLottie,
    design: DesignLottie,
    teach: TeachLottie
  }

  const lottieRef = useRef(null)

  return (
    <div className='skill' onMouseEnter={() => lottieRef.current.play()} onMouseLeave={() => lottieRef.current.stop()} ref={lottieRef}>
      <div className='skill-header'>

        <div className='image-skill'>
          <Lottie animationData={lottieDictionary[logo]} autoplay={false} lottieRef={lottieRef} />
        </div>
        <h2>{title}</h2>

      </div>

      <div>
        <p>{content}</p>
      </div>

      <div className='button-wrap'>
        <button className={'button-shine ' + (filters === id ? 'active' : '')} onClick={() => handleClick(id)}>{showMeProjects}</button>
      </div>

    </div>
  )
}

export default Skill
