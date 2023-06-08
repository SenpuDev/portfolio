import { useState } from 'react'
import { useInViewEffect } from 'react-hook-inview'

// Custom Hook using "react-hook-inview" library

const useInViewShow = (unobserve = true) => {
  // Observes the target and activate "show" only once
  const [isInView, setIsInView] = useState(false)

  const elementToObserve = useInViewEffect(
    ([entry], observer) => {
      // Observe once
      if (unobserve) {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      }
      setIsInView(entry.isIntersecting)
    },
    { rootMargin: '-15%', threshold: 0 }
  )
  return { elementToObserve, isInView }
}

export default useInViewShow
