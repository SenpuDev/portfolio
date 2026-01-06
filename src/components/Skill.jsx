import { scrollToSection } from '../helpers/scrollToSection'
import useFilters from '../hooks/useFilters'
import useScrollRefs from '../hooks/useScrollRefs'
import useLanguage from '../hooks/useLanguage'
import useModal from '../hooks/useModal'

import Lottie from 'lottie-react'

import BuildLottie from './../img/lotties/build.json'
import DesignLottie from './../img/lotties/design.json'
import TeachLottie from './../img/lotties/teach.json'

import { useRef } from 'react'

const Skill = ({ skill }) => {
  const { title, content, logo, id } = skill
  const { filters, setFilters } = useFilters()
  const { projects } = useScrollRefs()
  const { setModal, setUrl } = useModal()

  const { language, webContent } = useLanguage()
  const { showMeProjects, watchVideo, readNews } = webContent[language]

  const convertYouTubeUrlToEmbed = (url) => {
    if (!url) return ''
    // Convert YouTube watch URL to embed format
    const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]
    if (videoId) {
      return `https://www.youtube.com/embed/${videoId}`
    }
    // If already in embed format, return as is
    if (url.includes('youtube.com/embed')) {
      return url
    }
    return url
  }

  const handleVideoClick = () => {
    if (skill.urlVideo) {
      const embedUrl = convertYouTubeUrlToEmbed(skill.urlVideo)
      setUrl(embedUrl)
      setModal(true)
    }
  }

  const handleLinkClick = () => {
    if (skill.url) {
      window.open(skill.url, '_blank', 'noopener,noreferrer')
    }
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

      <div className='button-wrap skill-buttons'>
        {skill.urlVideo && (
          <button
            className='button-shine skill-button'
            onClick={handleVideoClick}
            aria-label="Ver video"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M10 8L16 12L10 16V8Z" fill="currentColor"/>
            </svg>
            {watchVideo}
          </button>
        )}
        {skill.url && (
          <button
            className='button-shine skill-button'
            onClick={handleLinkClick}
            aria-label="Ver noticia"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 20H5C4.44772 20 4 19.5523 4 19V5C4 4.44772 4.44772 4 5 4H16L20 8V19C20 19.5523 19.5523 20 19 20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15 4V9H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 16H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {readNews}
          </button>
        )}
      </div>

    </div>
  )
}

export default Skill
