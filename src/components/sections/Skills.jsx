import Skill from '../skill'
import useInViewShow from '../../hooks/useInViewShow'
import useLanguage from '../../hooks/useContext/useLanguage'

const Skills = () => {
  const { elementToObserve, isInView } = useInViewShow()
  const { language, webContent } = useLanguage()
  const { skills, skillsTitle } = webContent[language]

  return (
    <>
      <h2 className='title'>{skillsTitle}</h2>
      <div className={'skill-list ' + (isInView ? 'show' : '')} ref={elementToObserve}>
        {skills.map(skill =>
          <Skill skill={skill} key={skill.id} />
        )}
      </div>
    </>
  )
}

export default Skills
