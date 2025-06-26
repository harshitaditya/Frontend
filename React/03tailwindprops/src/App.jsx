import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/card'

function App() {
  let myobj={
    username:"Aditya Kumar",
    age:21
  }

  return(
  <>
  <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>TailWind</h1>
  <Card username="Chaiaur Code" />
  <Card username="Coding Ninja"/>
  
 
    </>
  )
  
}

export default App
