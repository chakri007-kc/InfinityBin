import axios from 'axios'
import React, { useEffect, useState } from 'react'

const id = window.location.pathname.split('/')[2]
const GetVideo = () => {
    const [error, seterror] = useState('')
    useEffect(() => {
        handlevideo();
    }, [])

    const handlevideo = async() => {
        const res = await axios.get(`https://infinitybin.up.railway.app/${id}`)
        console.log(res.data)
        if(res.data.err){
            seterror(res.data.err)
        }
    }
    
  return (
    <div>
        {/* {console.log(id)} */}
        {/* <h1>Get Video</h1> */}
        { error ? <h1>{error}</h1> :
        <video className='video' id='videoPlayer' width={650} controls muted="muted" autoPlay >
            <source src={`https://infinitybin.up.railway.app/getvideo/${id}`} type='video/mp4'/>
        </video>}
    </div>

  )
}

export default GetVideo