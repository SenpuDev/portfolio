import './styles/styles.scss'

// Sections - Components
import Header from './components/header'
import Wellcome from './components/sections/wellcome'
import Projects from './components/sections/projects'
import Contact from './components/sections/contact'
import Skills from './components/sections/skills'
import Footer from './components/footer'
import ParticlesBG from './components/particles-bg.jsx'
import useScrollRefs from './hooks/useContext/useScrollRefs'

function App () {
  const { skills, projects, contact } = useScrollRefs()
  return (
    <>
      <Header />

      <main>
        <section className='wellcome'>
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
