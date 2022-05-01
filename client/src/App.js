import { BrowserRouter } from 'react-router-dom'
import { Routes,Route } from 'react-router-dom'
import Postfile from './components/Postfile';
import Getfile from './components/Getfile';
import Postphoto from './components/Postphoto';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/postfile" element={<Postfile/>} />
          <Route path="/getfile" element={<Getfile/>} />
          <Route path="/postphoto" element={<Postphoto/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
