import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {random} from 'gsap'
import { useRef } from 'react';
import { useState } from 'react';


const App = () => {
  useGSAP(()=>{
    gsap.to(".box",{
      x:1150,
      duration:2,
      delay:0.5,
      rotate:3600,
    })
  })

  return (
    <main>
      <div className="box"></div>
    </main>
  )
}

export default App
