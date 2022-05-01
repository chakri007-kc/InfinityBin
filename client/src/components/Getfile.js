import React, { useState } from 'react'
import axios from 'axios'

const Getfile = () => {
    const [key, setkey] = useState('')
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState({})
    let flag = 0;
    const binfile = async(e) => {
        e.preventDefault();
        flag=1
        const res = await axios.post('http://localhost:5000/getbin',{key});
        console.log(res)
        if(res.data.status !== 'ok'){
            alert(res.data.status)
        }
        else{
            setkey('')
            setdata(res.data.bin)
            console.log(data)
            setloading(false)
        }
    }
  return (
    <div>
        <form onSubmit={binfile}>
            <input type="text" placeholder='Key' value={key} onChange={(e)=>setkey(e.target.value)}/>
            <br/>
            <input type="submit" />
        </form>
        <br/>
        {(loading && flag===1) ? <h1>Loading...</h1> : <h3>{data.des}</h3>}
    </div>
  )
}

export default Getfile