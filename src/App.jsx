import './styles/styles.scss'

// Sections - Components
import Header from './components/Header'
import Welcome from './components/sections/Welcome'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Footer from './components/Footer'
import useScrollRefs from './hooks/useScrollRefs.jsx'
import { Suspense, lazy } from 'react'

function App () {
  const { skills, projects } = useScrollRefs()
  const ParticlesBG = lazy(() => import('./components/ParticlesBg.jsx'))

  return (

    <>
      <Header />

      <main>
        <section className='welcome'>
          <Welcome />
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
