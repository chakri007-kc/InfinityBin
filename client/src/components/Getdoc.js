import React, { useState } from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import '../styles/postdoc.css'

const Getdoc = () => {
    const [key, setkey] = useState('')
    const [loading, setloading] = useState(true)
    const [data, setdata] = useState({})
    let flag = 0;
    const binfile = async(e) => {
        e.preventDefault();
        flag=1
        const res = await axios.post('https://infinitybin007.herokuapp.com/getbin',{key});
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
    <div className="AppGlass">
        <Sidebar selected="getdoc"/>
        <div className='top'>
            <h1 className='header'>Get Data</h1>
            <form onSubmit={binfile}>
                <input className='key' type="text" placeholder='Key' value={key} onChange={(e)=>setkey(e.target.value)}/>
                <br/>
                <input className='submit' type="submit" />
            </form>
            <br/>
            {(loading && flag===1) ? <h1>Loading...</h1> : <h3 className='data'>{data.des}</h3>}
        </div>
    </div>
  )
}

export default Getdoc