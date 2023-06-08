import './styles/styles.scss'

import { useContext } from 'react'
import { ScrollRefsContext } from './context/scrollRefs'

// Sections - Components
import Header from './components/header'
import Navigation from './components/navigation'
import Wellcome from './components/sections/wellcome'
import Projects from './components/sections/projects'
import Contact from './components/sections/contact'
import Skills from './components/sections/skills'
import Footer from './components/footer'
import ParticlesBG from './components/particles-bg.jsx'

function App () {
  const { wellcome, skills, projects, contact } = useContext(ScrollRefsContext)
  return (
    <>
      <Header />
      <Navigation />

      <main>
        <section className='wellcome' ref={wellcome}>
          <Wellcome />
        </section>

        <section className='skills' ref={skills}>
          <Skills />
        </section>

        <section className='projects' ref={projects}>
          <Projects />
        </section>

        <section className='contact' ref={contact}>
          <Contact />
        </section>
      </main>

      <Footer />
      <ParticlesBG />
    </>
  )
}

export default App
