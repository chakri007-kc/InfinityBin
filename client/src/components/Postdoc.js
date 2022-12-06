import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import copy from 'copy-to-clipboard'
import '../styles/postdoc.css'
let link=""
const Postdoc = () => {
  const [des, setdes] = useState('')
  const [key, setkey] = useState('')
  const [flag, setflag] = useState(false)

  const binfile = async(e) => {
    e.preventDefault();
     const data = {
        des,
        key
     }
     const res = await axios.post('https://infinitybin.up.railway.app/postbin',data);
     console.log(res)
     if(res.data.status === 'Added'){
       link=`https://infinitybin-007.netlify.app/getdocument/${key}`
       setdes('')
       setkey('')
       alert(res.data.status)
       setflag(true)
    }
    else{
        alert(res.data.status)
      }
  }

  const handlecopy = () => {
    copy(link)
    alert('Copied')
  }

  return (
    <div className="AppGlass">
      <Sidebar selected="postdoc"/>
      <div className='top'>
        <h1 className='header'>Post Data</h1>
        <form onSubmit={binfile}>
          <textarea className='des' value={des} type="text" spellCheck='false' placeholder="Description" cols="45" rows="8" onChange={(e)=> setdes(e.target.value)}/>
          <br/>
          <input className='key' value={key} type="text" placeholder='Key' onChange={(e)=> setkey(e.target.value)}/>
          <br/>
          <input className='submit' type="submit"/>
        </form>
        {(flag) &&  <div className="link">
                      <h3 className='linkHeader'>Link: <span>{link} <input className='copy' onClick={handlecopy} type="button" value="Copy"/></span></h3> 
                      
                    </div>}
      </div>
    </div>
  )
}

export default Postdoc