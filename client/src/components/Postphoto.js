import React, { useState } from 'react'
import axios from 'axios'

const Postphoto = () => {
    const [key, setkey] = useState('')
    const [image, setimage] = useState('')
    const [url, seturl] = useState('')

    const binphoto = async(e) => {
        console.log('hi')
        e.preventDefault();
        const data = new FormData()
        data.append('file',image)
        data.append('upload_preset','image-bin')
        data.append('cloud_name','chakri007')
        const res = await axios.post('https://api.cloudinary.com/v1_1/chakri007/image/upload',data);
        seturl(res.data.url)
        console.log(res)
    }

  return (
    <div>
        <form onSubmit={binphoto}>
            <input type="file" onChange={(e)=> setimage(e.target.files[0])}/>
            <br/>
            <input value={key} type="text" placeholder='Key' onChange={(e)=> setkey(e.target.value)}/>
            <br/>
            <input className='submit' type="submit"/>
        </form>
    </div>
  )
}

export default Postphoto