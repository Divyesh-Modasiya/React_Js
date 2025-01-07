import { useRef } from 'react'
function Form() {
    const nameRef = useRef(null)
    const nameRef1= useRef(null)
    const nameRef2= useRef(null)
    const nameRef3= useRef(null)

  const handelchange=(e)=> {
    e.preventDefault()
    alert(`${nameRef.current.value} ${nameRef1.current.value}  ${nameRef2.current.value}`)
  }
  return (
    <div className='main'> 
<form onSubmit={handelchange}>
   <label>
     Name:<br/>
    <input ref={nameRef1}  type='text'/>
    </label> 
    <label>
    Email Address :<br/>
    <input ref={nameRef} type='email' />
    </label> 
    <label>
    Country :<br/>
    <input ref={nameRef2} type='text' />
    </label>
    <label>
    Phone :<br/>
    <input ref={nameRef3} type='text' />
    </label> 
    <label>
    Password :<br/>
    <input ref={nameRef3} type='password' />
    </label>
    <br/>
    <input type="submit"  className='btn'/>
    </form>
    </div>
  )
}

export default Form