
import Chai from "./chai"

function App() {
const username="Aditya_kumar_ak";
  

  return (
<>        {/* so we use<>fragment</> to return more than one element. */}
<Chai/>   {/*here we can not return more than one element. so we can not return other than one element. */}
  <h1>Hi my name is Aditya and User Id is {username}</h1>
</>
  )
}

export default App
