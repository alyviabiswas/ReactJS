import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  useState(15)

  let[counter,setCounter]=useState(15)

  // let counter=7

  const addValue=()=>{
    if(counter<20)
    // counter=counter+1
    setCounter(counter+1)
    console.log("Clicked",counter)
  }

  const removeValue=()=>{
    if(counter>0)
    // counter=counter-1
    setCounter(counter-1)
    console.log("Clicked",counter)
  }
  return (
    <>
     <h1>Cat Aur React</h1>
     <h5>Counter Value: {counter}</h5>

     <button
     onClick={addValue}
     >Add Value</button>

     <br/>

     <button
     onClick={removeValue}
     >Remove Value</button>
    </>
  )
}

export default App
