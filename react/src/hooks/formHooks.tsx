import { useState } from "react"

export const useForm  = ({initisialState,validationSchema})=>{
    const [formData,setFormData] = useState(initisialState);
    const resetForm =()=>setFormData(initisialState);
    const onChange = (e)=>{
        setFormData((prev)=> ({...prev,[e.target.name]:e.target.value}))
    }
    const errors = ()=>{
         const obj = {}
        const keys =  Object.keys(formData)
         const data  =   Object.keys(validationSchema)
         const values  =   Object.values(validationSchema)
         for (const [key, value] of Object.entries(validationSchema)) {
            //    console.log("formData[key]",formData?.[key])
             if(!formData[key] ){
                 console.log(`${key}: ${value}`);
                 obj[key] = value     
              }
}
        //   console.log(keys,data,values)
         return data;
    }
    return  {formData,resetForm, onChange,setFormData,errors}
}