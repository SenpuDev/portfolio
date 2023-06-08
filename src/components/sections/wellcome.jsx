import Portrait from './../../components/portrait'
import useInViewShow from '../../hooks/useInViewShow'

const Wellcome = () => {
  const { elementToObserve, isInView } = useInViewShow()

  return (
    <>
      <div className='content container' ref={elementToObserve}>
        <Portrait isVisible={isInView} />

        <div className={'presentation ' + (isInView ? 'show' : '')}>
          <p>Hi! I'm know as</p>
          <h1>Senpuu DEV</h1>
          <h2>Front end developer & 3D designer</h2>
          <p>I am a passionate creator who enjoys both web development and 3D modeling. With a strong affinity for design, I pay meticulous attention to detail. Furthermore, I actively share my knowledge by teaching and imparting classes to others. </p>
          <p className='break'>Let's collaborate to bring your projects to life! 😄</p>
        </div>
      </div>

      <div className='scroll-icon'>
        <lord-icon
          src='https://cdn.lordicon.com/xwjtkymn.json'
          trigger='loop'
          colors='primary:#ffffff,secondary:#007aff'
          style={{ width: 100, height: 100 }}
        />
      </div>
    </>
  )
}

export default Wellcome
