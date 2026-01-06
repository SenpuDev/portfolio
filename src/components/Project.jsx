// Logos IMGs
import SassIcon from './../img/icons/sass.svg'
import ReactIcon from './../img/icons/react.svg'
import Html5Icon from './../img/icons/html.svg'
import CssIcon from './../img/icons/css3.svg'
import JsIcon from './../img/icons/javascript.svg'
import TypescriptIcon from './../img/icons/typescript.svg'
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
import TailwindIcon from './../img/icons/tailwind.svg'
import MongoDBIcon from './../img/icons/mongodb.svg'
import NodeIcon from './../img/icons/node.svg'
import ZbrushIcon from './../img/icons/zbrush.svg'
import NextjsIcon from './../img/icons/nextjs.svg'
import PythonIcon from './../img/icons/python.svg'
import DockerIcon from './../img/icons/docker.svg'
import AwsIcon from './../img/icons/aws.svg'
import CIcon from './../img/icons/c++.svg'
import LuaIcon from './../img/icons/lua.svg'
import useModal from '../hooks/useModal'
import { capitalizeFirstChar } from '../helpers/capitalizeFirstChar'
import useInViewShow from '../hooks/useInViewShow'
import { useState } from 'react'

const Project = ({ project }) => {
  const { setModal, setUrl } = useModal()
  const { title, type, description, cardimage, cardtext, techicons, github, deploy, extracomment, demovideo, duration } = project

  const [activeActions, setActiveActions] = useState(false)

  const handleHoverActiveActions = (e) => {
    setTimeout(() => {
      setActiveActions(true)
    }, 200)
  }
  const handleLeaveActiveActions = (e) => {
    setActiveActions(false)
  }

  // Dictionary for icons
  const technologiesDictionary = {
    javascript: JsIcon,
    typescript: TypescriptIcon,
    sass: SassIcon,
    nextjs: NextjsIcon,
    python: PythonIcon,
    docker: DockerIcon,
    aws: AwsIcon,
    'c++': CIcon,
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
    mysql: MysqlIcon,
    tailwind: TailwindIcon,
    mongodb: MongoDBIcon,
    node: NodeIcon,
    zbrush: ZbrushIcon,
    lua: LuaIcon
  }

  const { elementToObserve, isInView } = useInViewShow(false)

  return (
    <>
      <div className={'project ' + (isInView ? 'shine' : '')} ref={elementToObserve} key={title}>
        <div className='project__title'>
          <h3>  
            {title}
            <span>
              ({duration})
            </span>
          </h3>
         
          <span>{type}</span>
        </div>

        {/* Mobile hover better user experience */}
        <div 
          className='project__card-wrapper'
          onMouseEnter={handleHoverActiveActions}
          onMouseLeave={handleLeaveActiveActions}
          onTouchStart={handleHoverActiveActions}
        >
          <div
            className={`project__card ${activeActions ? 'active-actions' : ''}`}
          >
            <img className='card-background ' src={cardimage} alt='Project screenshot' />
            <div className='card-inside'>
              {demovideo && (
                <div className='button-wrap'>
                  <button className='button-shine' onClick={() => [setModal(true), setUrl(demovideo)]}>Demo Video</button>
                </div>
              )}
              {cardtext && (
                <a className='button-wrap' target='_blank' href={deploy} aria-label='Visit project or news' rel='noreferrer'>
                  <button className='button-shine'>{cardtext}</button>
                </a>
              )}
            </div>
          </div>
        </div>

        <div className='project__info'>
          <div className='project-description'>
            <p>{description}</p>
            {extracomment?.length && (
              extracomment.startsWith('http://') || extracomment.startsWith('https://') ? (
                <a href={extracomment} target="_blank" rel="noopener noreferrer" className="extra-comment">
                  {extracomment}
                </a>
              ) : (
                <p className='extra-comment'>{extracomment}</p>
              )
            )}
          </div>
          <div className='project-icons'>
            <div className='tecnologies'>
              {techicons.map(icon => (

                <div className='tecnology' key={technologiesDictionary[icon]}>
                  <img src={technologiesDictionary[icon]} alt={`Tecnology used ${icon}`} />
                  <span />
                  <p>{capitalizeFirstChar(icon)}</p>
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
    </>
  )
}

export default Project
