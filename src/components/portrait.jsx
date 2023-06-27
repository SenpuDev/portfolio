import Spline from '@splinetool/react-spline'
import { useState } from 'react'

const Portrait = () => {
  const [loading, setLoading] = useState(true)

  return (
    <div className='portrait'>
      {loading && (
        <div className='lds-dual-ring' />
      )}
      <Spline onLoad={() => setLoading(false)} scene='https://prod.spline.design/PjCKAcWVerz6O85s/scene.splinecode' />
    </div>
  )
}

export default Portrait
