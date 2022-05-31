import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'


const Home = () => {
  return (
    <div className="AppGlass">
        <Sidebar selected=""/>
        <div className='top top-1'>
            <Link className='itemList' to="/postdoc"><div className='top-data'><h3>To add the data</h3></div></Link>
            <Link className='itemList' to="/getdoc"><div className='top-data'><h3>To get the data</h3></div></Link>
            <Link className='itemList' to="/addfile"><div className='top-data'><h3>To add the files <span className='extra'>like image(.jpg,.gif,.png), video(.mp4,.webm)</span></h3></div></Link>
            <Link className='itemList' to="/getfile"><div className='top-data'><h3>To get the files <span className='extra'>like image(.jpg,.gif,.png), video(.mp4,.webm)</span></h3></div></Link>
        </div>
    </div>
  )
}

export default Home