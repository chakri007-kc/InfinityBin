import axios from 'axios'
import React, { useEffect, useState } from 'react'

const id = window.location.pathname.split('/')[2]
const GetImage = () => {

    const [error, seterror] = useState('')
    useEffect(() => {
        handleimage();
    }, [])

    const handleimage = async() => {
        const res = await axios.get(`https://infinitybin.up.railway.app/getimage/${id}`)
        // console.log(res.data)
        if(res.data.success === false){
            seterror(res.data.status)
        }
    }

  return (
    <div className='kk'>
         {/* <h1>Get Image</h1> */}
        { error ? <h1>{error}</h1> :
            <img className='image' src={`https://infinitybin.up.railway.app/getimage/${id}`} alt="" />
        }
    </div>
  )
}

export default GetImage