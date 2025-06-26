import { useState } from "react"


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setcolor("red")} className="outline-none px-4 py-1 rounded-full text-white bg-red-600 shadow-xl" >Red</button>
          <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-1 rounded-full text-white bg-blue-600 shadow-xl">Blue</button>
          <button onClick={()=>setcolor("green")} className="outline-none px-4 py-1 rounded-full text-white bg-green-600 shadow-xl">Green</button>
          <button onClick={()=>setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white bg-purple-600 shadow-xl">Purple</button>
          <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white bg-yellow-600 shadow-xl">Yellow</button>
          <button onClick={()=>setcolor("violet")} className="outline-none px-4 py-1 rounded-full text-white bg-violet-600 shadow-xl">Violet</button>
          

        </div>

      </div>
    </div>
  )
}

export default App
