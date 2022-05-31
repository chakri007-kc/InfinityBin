import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import axios from 'axios'

const Getfile = () => {
    const [flag, setflag] = useState(false)
    const [filetype, setfiletype] = useState('')
    const [key, setkey] = useState('')
    const [error, seterror] = useState('')


    const handleFile = async(e) => {
        e.preventDefault()
        seterror('')
        setflag(false)
        alert('It takes sometime to load the file')
        if(filetype==='Image'){
            const res = await axios.get(`https://infinitybin007.herokuapp.com/getimage/${key}`)
            // console.log(res.data)
            if(res.data.success === false){
                seterror(res.data.status)
            }
        }
        else if(filetype==='Video'){
            const res = await axios.get(`https://infinitybin007.herokuapp.com/getvideo/${key}`)
            // console.log(res.data)
            if(res.data.err){
                seterror(res.data.err)
            }
        }
        setflag(true)
    }

  return (
    <div className='AppGlass'>
        <Sidebar selected="getfile"/>
        <div className='top'>
            <h1 className='header'>Getfile</h1>
            <form onSubmit={handleFile}>
                <input className='key' type="text" placeholder='Key' onChange={(e)=>{setflag(false); seterror(''); setkey(e.target.value)}}/>
                <br/>
                <select className='select' id="list" onChange={(e)=>setfiletype(e.target.value)}>
                    <option value="" >Select file type</option>
                    <option value="Image">Image</option>
                    <option value="Video">Video</option>
                </select>
                <br/>
                <input className='submit' type="submit"/>
            </form>
            <div>
                {flag && !error &&
                    ((filetype === 'Image' && <img className='image' src={`https://infinitybin007.herokuapp.com/getimage/${key}`} alt='Image'/>) ||
                    (filetype === 'Video' && <video className='video' src={`https://infinitybin007.herokuapp.com/getvideo/${key}`} controls/>))
                }
                {error && flag && <h1>{error}</h1>}
            </div>
        </div>
    </div>
  )
}

export default Getfile