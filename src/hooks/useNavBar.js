import { useEffect, useState } from 'react'

export const useNavBar = () => {
  // Identify distance since top for show navBar
  const [scrollTop, setScrollTop] = useState(0)
  // Show or not?
  const [navBarShow, setNavBarShow] = useState(false)

  // Logic on scroll
  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    // NavBar shows on scroll
    scrollTop > 600 && !navBarShow && setNavBarShow(true)
    scrollTop < 600 && navBarShow && setNavBarShow(false)

    return () => { // Al desmontarse el componente
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollTop])

  return { navBarShow }
}
