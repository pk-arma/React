import { useState } from "react"

export const useForm  = ({initisialState})=>{
    console.log("initisialState",initisialState)
    const [formData,setFormData] = useState(initisialState);
    const resetForm =()=>setFormData(initisialState);
    const onChange = (e)=>{
        setFormData((prev)=> ({...prev,[e.target.name]:e.target.value}))
    }
    return  {formData,resetForm, onChange,setFormData}
}