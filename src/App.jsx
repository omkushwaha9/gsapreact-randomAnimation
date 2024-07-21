import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'

const App = () => {

  useGSAP(()=>{
    gsap.to(".box",{
      x:1150,
      duration:20,
      delay:0.4,
      rotate:360,
    })
  })

  return (
    <main>
      <div className='box'> </div>
      <div className='button'>
           Animation
        </div>
    </main>
  )
}

export default App
