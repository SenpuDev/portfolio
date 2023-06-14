import PortraitIMG from './../img/portrait/00_Portrait.webp'
import BuilIMG from './../img/portrait/01_Build.webp'
import BuildIcon from './../img/portrait/01_BuildIcon.svg'
import DesignIMG from './../img/portrait/02_Design.webp'
import DesignIcon from './../img/portrait/02_DesignIcon.svg'
import LearnIMG from './../img/portrait/03_Learning.webp'
import LearnIcon from './../img/portrait/03_LearningIcon.svg'

import { scrollToSection } from '../helpers/scrollToSection'
import useScrollRefs from '../hooks/useContext/useScrollRefs'

const Portrait = (isInView) => {
  const { skills } = useScrollRefs()
  return (
    <div className={'portrait ' + (isInView ? 'show' : '')}>
      <div className='skill'>
        <img className='background' src={PortraitIMG} alt='Photo of me' />
      </div>
      <div className='skill' onClick={() => scrollToSection(skills)}>
        <img className='background' src={BuilIMG} alt='Build and coding work' />
        <div className='over-skill'>
          <img className='logo' src={BuildIcon} alt='Build and coding icon' />
          <p>BUILD</p>
        </div>
      </div>
      <div className='skill' onClick={() => scrollToSection(skills)}>
        <img className='background' src={DesignIMG} alt='Design work' />
        <div className='over-skill'>
          <img className='logo' src={DesignIcon} alt='Design icon' />
          <p>DESIGN</p>
        </div>
      </div>
      <div className='skill' onClick={() => scrollToSection(skills)}>
        <img className='background' src={LearnIMG} alt='Teaching work' />
        <div className='over-skill'>
          <img className='logo' src={LearnIcon} alt='Teach icon' />
          <p>INSPIRE</p>
        </div>
      </div>
    </div>
  )
}

export default Portrait
