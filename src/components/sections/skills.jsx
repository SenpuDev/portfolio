import CodeLogo from './../../img/icons/build-skill.svg'
import DesignLogo from './../..//img/icons/design-skill.svg'
import LearnLogo from './../../img/icons/inspire-skill.svg'

import Skill from '../skill'
import useInViewShow from '../../hooks/useInViewShow'

const Skills = () => {
  const { elementToObserve, isInView } = useInViewShow()

  const skills = [
    { logo: CodeLogo, title: 'Frontend Developer Vanilla JS, React', id: 1, content: 'Developing focused on Vanilla JS, React and styling with CSS & SASS. Creating user-friendly web applications with attention to detail and clean code.' },
    { logo: DesignLogo, title: '3D Modelling & Design', id: 2, content: 'As I have mentioned before my passion is creation. While I often design interfaces, I also delve into 3D character and asset design. Take a look at my portfolio to explore my design creations.' },
    { logo: LearnLogo, title: 'Software Development Teacher', id: 3, content: 'Experienced software development teacher specializing in 3D design and programming. Guiding and mentoring students in the exciting realms of digital experiences, imparting skills in both 3D modeling and programming.' }
  ]
  return (
    <>
      <h2 className='title'>My skills</h2>
      <div className={'skill-list ' + (isInView ? 'show' : '')} ref={elementToObserve}>

        {skills.map(skill =>
          <Skill skill={skill} key={skill.id} />
        )}
      </div>
    </>
  )
}

export default Skills
