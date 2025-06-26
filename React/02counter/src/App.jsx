import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //counter and setcounter are variables so we can change it.
  let[counter,setcounter]=useState(0)   //here we can use variable,boolean,object etc. in paranthesis and it is use to sync the state(means basically changes) and UI where changes are shown on user interface.
  
  const addvalue=()=>{
    counter=counter+1;
    if(counter>10){
      setcounter(1);
    }
    else{
  // setcounter(counter+1);    //React batches state updates within event handlers, so multiple calls to setcounter(counter) will have no additional effect. Only the last call matters, as they all set the counter to the same value, which doesn’t change the counter as you might expect.
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+1);
    // setcounter(counter+2);

    setcounter(counter);
   
    }
    

  }

  const removevalue=()=>{
    counter=counter-1;
    if(counter<0){
      setcounter(0);
    }
    else{
    setcounter(counter);
    }
  }
  

  return (
    <>
     <h1>Count</h1>
     <h2>Counter Value: {counter}</h2>
     <button onClick={addvalue}>Add Value: {counter}</button>    
     <br />
     <button onClick={removevalue}>Remove Value: {counter}</button>
     <p>Footer:{counter}</p>
     {/* here the All counter is work but not update in user interface that's why we use hook */}
    </>
  )
}
//https://github.com/acdlite/react-fiber-architecture: study this 

export default App