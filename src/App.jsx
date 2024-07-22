import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react';
import { useState } from 'react';


const App = () => {
  const randomX = gsap.utils.random(-10, 1150, 100, true);
  const rotateX = gsap.utils.random(-3600,360000,30, true)

  const [xValue, setXValue] = useState(0);
  const [roti, setRoti] = useState(0);

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
      <button onClick={() => {
       setXValue(randomX)
       setRoti(rotateX)
      }}>Animate</button>
      <div ref={boxref} className="box"></div>
    </main>
  )
}

export default App;
