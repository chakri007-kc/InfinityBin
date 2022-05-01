import React, { useState } from 'react'
import axios from 'axios'

const Postfile = () => {
  const [des, setdes] = useState('')
  const [key, setkey] = useState('')

  const binfile = async(e) => {
    e.preventDefault();
     const data = {
        des,
        key
     }
     const res = await axios.post('http://localhost:5000/postbin',data);
     console.log(res)
     if(res.data.status === 'ok'){
       setdes('')
       setkey('')
       alert(res.data.status)
    }
    else{
        alert(res.data.status)
      }
  }
  return (
    <div>
      <form onSubmit={binfile}>
        <textarea value={des} type="text" spellCheck='false' placeholder="Description" cols="45" rows="8" onChange={(e)=> setdes(e.target.value)}/>
        <br/>
        <input value={key} type="text" placeholder='Key' onChange={(e)=> setkey(e.target.value)}/>
        <br/>
        <input className='submit' type="submit"/>
      </form>
    </div>
  )
}

export default Postfile