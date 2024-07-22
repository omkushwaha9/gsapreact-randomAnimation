import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { useState } from 'react';


const App = () => {
  const [circle, setCircle] = useState(0);

  const random = gsap.utils.random(-500, 500, 100);

  useGSAP(() => {
    gsap.to(".circle", {
      x:circle,
      duration: 0.5,
    })
  }, [circle])

  return (
    <main>
      
      <button onclick={() => {
       setCircle(random)
      }}>Animate</button>
      <div className="circle"></div>
    </main>
  )
}

export default App
