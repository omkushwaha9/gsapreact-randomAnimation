import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'


const App = () => {

 const [circle, setcircle] = useState(0);

 const random = gsap.utils.random(-500,500,100);

  useGSAP(()=>{
    gsap.to(".circle",{
      x:circle,
      duration:0.5,
    })
  },[circle])
  return (
   <main>
    <button onclick={()=>{
      setcircle(random)
    }}>Animate</button>
    <div  className="circle"></div>
   </main>
  )
}

export default App;