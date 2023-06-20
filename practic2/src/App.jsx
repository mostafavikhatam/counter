import { useState } from 'react'
import Input from "./Components/Input"
import Show from './Components/Show'




function App() {
  const [val , setValue] = useState("")

  const changehandler =(e) =>{
    setValue(e.target.value)
    
  }


  return (
    <>
     <Input ali={val} text={changehandler}/>
     <Show ali={val.length} />
       
    </>
  )
}

export default App
