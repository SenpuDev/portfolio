const particlesOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#5fa6f4'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 4,
        color: '#007aff',
        opacity: 0.2
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: 'img/github.svg',
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 1,
      random: false,
      anim: {
        enable: true,
        speed: 0.5,
        opacity_min: 0.5,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: '#ffffff',
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 1,
      direction: 'top-right',
      random: false,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  retina_detect: false
}

export default particlesOptions
