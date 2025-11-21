import './App.css'
import { CallBack, } from './javaScriptMethods'
import {useEffect, useState} from 'react'
function App() {
   const [name,setName] = useState('')
   const fetchName = (name:string)=>{
           if(name){
            console.log("name",name)
           }
   }
   useEffect(()=>{
     CallBack(fetchName,name)
   },[name])
  return (
    <>
     this is testing project {name}
     <button onClick={()=>(setName(prev=>prev!=="change"?"change":"Name"))}>add Name</button>
    </>
  )
}

export default App
