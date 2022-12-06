import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from '../components/Sidebar'
import copy from 'copy-to-clipboard'

let link=""
const AddFile = () => {
    const [key, setkey] = useState('')
    const [file, setfile] = useState('')
    const [flag, setflag] = useState(false)
    
    const handleFile = async(e) => {
        e.preventDefault()
        alert('It takes sometime to upload the file')
        const data = new FormData()
        data.append('file',file)
        data.append('caption',key)
        console.log(file.type)
        const res = await axios.post('https://infinitybin.up.railway.app/postfile',data)
        if(file.type === 'video/webm' || file.type === 'video/mp4') link=`https://infinitybin-007.netlify.app/getvideo/${key}`
        if(file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif') link=`https://infinitybin-007.netlify.app/getimage/${key}`
        setkey('')
        setfile('')
        setflag(true)
        alert(res.data.status)
    }

    const handlecopy = () => {
        copy(link)
        alert('Copied')
      }
      
  return (
    <div className="AppGlass">
        <Sidebar selected="addfile"/>
        <div className='top'>
            <h1 className='header addfile'>Add File</h1>
            <form onSubmit={handleFile}>
                <input className='key' type="text" value={key} placeholder='Key' onChange={(e)=> setkey(e.target.value)}/>
                <br/>
                <input className='choose' type="file"  onChange={(e)=> setfile(e.target.files[0])}/>
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

export default AddFile