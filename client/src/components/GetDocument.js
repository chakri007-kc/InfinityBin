import axios from 'axios'
import React, { useEffect, useState } from 'react'

const id = window.location.pathname.split('/')[2]
const GetDocument = () => {
    const [document, setdocument] = useState('')
    const [error, seterror] = useState('')

    useEffect(() => {
        handleDocument();
    }, [])

    const handleDocument = async() => {
        console.log(id)
        const res = await axios.post('https://infinitybin007.herokuapp.com/getbin',{key:id});
        console.log(res.data)
        if(res.data.status !== 'ok'){
            // alert(res.data.status)
            seterror(res.data.status)
        }
        else{
            setdocument(res.data.bin)
        }
    }
    
  return (
    <div className='getdocument'>
        {/* <h1 className='header'>Get Document</h1> */}
        {error? <h1>{error}</h1> : <h3 className='data'>{document.des}</h3>}
    </div>
  )
}

export default GetDocument