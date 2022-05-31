import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/sidebar.css'

// const id = window.location.pathname.split('/')[1]
const Sidebar = ({selected}) => {
    const [flag, setflag] = useState(true)
    // if(selected===null) selected=''
    // console.log(selected)
  return (
    <div className='sidebar'>
        <h3 className='logo'>Infinity<span>Bin</span></h3>
        
             <div className='menu'>
                <Link  to="/" className={selected === '' ? 'menuItem active' : 'menuItem'} >Home</Link>
                <Link  to="/postdoc" className={selected === 'postdoc' ? 'menuItem active' : 'menuItem'} >Post Data</Link>
                <Link  to="/getdoc" className={selected === 'getdoc' ? 'menuItem active' : 'menuItem'} >Get Data</Link>
                <Link  to="/addfile" className={selected === 'addfile' ? 'menuItem active' : 'menuItem'} >Add File</Link>
                <Link to="/getfile" className={selected === 'getfile' ? 'menuItem active' : 'menuItem'} >Get File</Link>
              </div>

            <button className='toggle' onClick={()=> setflag(!flag)}>{ flag?<i className="i2 fas fa-times"></i> :  <i class="i2 fas fa-bars"></i>}</button>
            {flag &&
              <div className='menu-1'>
                <Link  to="/" className={selected === '' ? 'menuItem active' : 'menuItem'} >Home</Link>
                <Link  to="/postdoc" className={selected === 'postdoc' ? 'menuItem active' : 'menuItem'} >Post Data</Link>
                <Link  to="/getdoc" className={selected === 'getdoc' ? 'menuItem active' : 'menuItem'} >Get Data</Link>
                <Link  to="/addfile" className={selected === 'addfile' ? 'menuItem active' : 'menuItem'} >Add File</Link>
                <Link to="/getfile" className={selected === 'getfile' ? 'menuItem active' : 'menuItem'} >Get File</Link>
              </div>
            }
        
    </div>
  )
}

export default Sidebar