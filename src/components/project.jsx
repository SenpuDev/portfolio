// Logos IMGs
import SassIcon from './../img/icons/sass.svg'
import ReactIcon from './../img/icons/react.svg'
import Html5Icon from './../img/icons/html.svg'
import CssIcon from './../img/icons/css3.svg'
import JsIcon from './../img/icons/javascript.svg'
import ExternalLinkIcon from './../img/icons/external-link.svg'
import GitHubIcon from './../img/icons/github.svg'
import StrapiIcon from './../img/icons/strapi.svg'
import StyledIcon from './../img/icons/styled.svg'
import PostgreSQLIcon from './../img/icons/postgresql.svg'
import RemixIcon from './../img/icons/remix.svg'
import MysqlIcon from './../img/icons/mysql.svg'
import PhpIcon from './../img/icons/php.svg'
import UnrealIcon from './../img/icons/unreal.svg'
import AutodesKIcon from './../img/icons/autodesk.svg'

import useInViewShow from '../hooks/useInViewShow'
import { preventAction } from '../helpers/preventDefault'

const Project = ({ project }) => {
  const { title, type, description, cardimage, cardtext, techicons, github, deploy, extracomment } = project

  // Dictionary for icons
  const technologiesDictionary = {
    javascript: JsIcon,
    sass: SassIcon,
    react: ReactIcon,
    html5: Html5Icon,
    css3: CssIcon,
    remix: RemixIcon,
    strapi: StrapiIcon,
    postgresql: PostgreSQLIcon,
    styledcomponents: StyledIcon,
    unreal: UnrealIcon,
    autodesk: AutodesKIcon,
    php: PhpIcon,
    mysql: MysqlIcon
  }

  const { elementToObserve, isInView } = useInViewShow(false)

  return (
    <div className={'project ' + (isInView ? 'shine' : '')} ref={elementToObserve} key={title}>
      <div className='project__title'>
        <h3>{title}</h3>
        <span>{type}</span>
      </div>

      <a className='project__card' target='_blank' href={deploy} aria-label='Visit project or news' onClick={!deploy ? preventAction : undefined} rel='noreferrer'>
        <img className='card-background ' src={cardimage} alt='Project screenshot' />
        <div className='card-inside'>
          <p>{cardtext}</p>
        </div>
      </a>

      <div className='project__info'>
        <div className='project-description'>
          <p>{description}</p>
          {extracomment?.length && <p className='extra-comment'>{extracomment}</p>}
        </div>
        <div className='project-icons'>
          <div className='tecnologies'>
            {techicons.map(icon => (

              <div className='tecnology' key={technologiesDictionary[icon]}>
                <img src={technologiesDictionary[icon]} alt={`Tecnology used ${icon}`} />
                <span />
                <p>{icon.toUpperCase()}</p>
              </div>
            ))}
          </div>

          <div className='links'>
            {github && (
              <a target='_blank' href={github} rel='noreferrer' aria-label='Visit source project on github' className='link'>
                <img src={GitHubIcon} alt='Github icon' />
              </a>
            )}
            {deploy && (
              <a target='_blank' href={deploy} rel='noreferrer' aria-label='Visit project or news' className='link'>
                <img src={ExternalLinkIcon} alt='External link icon' />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Project
