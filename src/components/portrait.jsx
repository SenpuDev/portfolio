import { Suspense, lazy } from 'react'

const Portrait = () => {
  const Spline = lazy(() => import('@splinetool/react-spline'))
  return (
    <div className='portrait'>
      <Suspense fallback={<div className='lds-dual-ring' />}>
        <Spline scene='https://prod.spline.design/PjCKAcWVerz6O85s/scene.splinecode' />
      </Suspense>
    </div>
  )
}

export default Portrait
