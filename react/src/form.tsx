import { useForm } from './hooks/formHooks'


function Forms() {
  const initisialState = {firstName:"",lastName:"",date:"",dis:""}
   const validationSchema = {
     firstName:(value)=>  (value===""?'first name is required':""),
     lastName:(value)=>value===""?"lastName is required":"",
    //  date:[true,"Date is required"],
    //  dis:[true,'Discripation is required'],
   }   

  const {onChange,formData,resetForm,errors} = useForm({initisialState,validationSchema})
        const data  = errors();
  console.log('formData',data,)
      

  return (
    <>
     <form>
        <input name="firstName" onChange={onChange} value={formData?.firstName}/>
        <input name='lastName' onChange={onChange} value={formData.lastName}/>
        <input name='date' onChange={onChange} value={formData.date} type='date'/>
        <input name='dis' onChange={onChange} value={formData.dis} type='textarea'/>
        <button type='submit' onSubmit={()=>{console.log(formData,)}}>Click</button>
        <button type='reset' onClick={resetForm}>reset</button>
     </form>
    </>
  )
}

export default Forms
