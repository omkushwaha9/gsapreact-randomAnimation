import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react';
import { useState } from 'react';


const App = () => {
  

  const randomX = gsap.utils.random(-500, 500, 100);
  const rotateX = gsap.utils.random(-360,360,30)

  const [xValue, setXValue] = useState(0);
  const [roti, setRoti] = useState();

  const boxref = useRef()

  useGSAP(() => {
    gsap.to(boxref.current, {
      x:xValue,
      duration: 1,
      rotate:roti
    })
  }, [xValue,rotateX])

  return (
    <main>
      
      <button onclick={() => {
       setXValue(randomX)
       setRoti(rotateX)
      }}>Animate</button>
      <div className="box"></div>
    </main>
  )
}

export default App
