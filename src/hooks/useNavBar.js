import { useEffect, useState } from 'react'

export const useNavBar = () => {

  const [scrollTop, setScrollTop] = useState(0)
  const [navBarShow, setNavBarShow] = useState(false)

  // on scroll
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
