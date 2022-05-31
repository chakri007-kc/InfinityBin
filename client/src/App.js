import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Postdoc from './components/Postdoc';
import Getdoc from './components/Getdoc';
import Postphoto from './components/Postphoto';
import './App.css';
import GetVideo from './gridfsComponents/GetVideo';
import GetImage from './gridfsComponents/GetImage';
import AddFile from './gridfsComponents/AddFile';
import React from 'react';
import Home from './components/Home';
import Getfile from './gridfsComponents/Getfile';
import GetDocument from './components/GetDocument';


const id = window.location.pathname.split('/')[2]
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/postdoc" element={<Postdoc/>} />
            <Route path="/getdoc" element={<Getdoc/>} />

            {/* cloudinary */}
            <Route path="/postphoto" element={<Postphoto/>} />

            {/* gridfs routes */}
            <Route path={`/addfile`} element={<AddFile/>} />
            <Route path={`/getfile`} element={<Getfile/>} />
            <Route path={`/getvideo/${id}`} element={<GetVideo/>} />
            <Route path={`/getimage/${id}`} element={<GetImage/>} />
            <Route path={`/getdocument/${id}`} element={<GetDocument/>} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
