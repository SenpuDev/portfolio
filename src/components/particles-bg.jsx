import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'

import particlesOptions from './config/particle-container-options'

const ParticlesBG = () => {
  const particlesInit = async engine => {
    await loadFull(engine)
  }

  const particlesLoaded = async container => {
    await container
  }

  return (
    <Particles
      id='tsparticles' className='particles'
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  )
}

export default ParticlesBG
