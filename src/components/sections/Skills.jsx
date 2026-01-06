import Skill from '../Skill'
import useInViewShow from '../../hooks/useInViewShow'
import useLanguage from '../../hooks/useLanguage'

const Skills = () => {
  const { elementToObserve, isInView } = useInViewShow()
  const { language, webContent } = useLanguage()
  const { skills } = webContent[language]

  return (
    <>
      <div className='skills-list' ref={elementToObserve}>
        <div className='skills-header'>
          <h2>{webContent[language].navSkills}</h2>
        </div>
        <div className={'skill-list ' + (isInView ? 'show' : '')}>
          {skills.map(skill =>
            <Skill skill={skill} key={skill.id} />
          )}
        </div>
      </div>
    </>
  )
}

export default Skills
