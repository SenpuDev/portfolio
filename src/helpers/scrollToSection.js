export const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: 'smooth'
  })
}
