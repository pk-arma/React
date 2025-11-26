import { useForm } from './hooks/formHooks'


function Forms() {
  const initisialState = {firstName:"",lastName:"",date:"",dis:""}
     const {onChange,formData,resetForm} = useForm({initisialState})
     console.log('formData',formData)
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
