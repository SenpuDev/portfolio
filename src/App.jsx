import './styles/styles.scss'

// Sections - Components
import Header from './components/header'
import Wellcome from './components/sections/wellcome'
import Projects from './components/sections/projects'
import Skills from './components/sections/skills'
import Footer from './components/footer'
import useScrollRefs from './hooks/useContext/useScrollRefs'
import { Suspense, lazy } from 'react'

function App () {
  const { skills, projects } = useScrollRefs()
  // Big libraries
  const ParticlesBG = lazy(() => import('./components/particles-bg.jsx'))

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
      </main>

      <Footer />

      <Suspense>
        <ParticlesBG />
      </Suspense>

    </>
  )
}

export default App
