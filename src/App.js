import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import Home from './Pages/Home/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Appoinment from './Pages/Appoinment/Appoinment/Appoinment';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/appoinment" element={<Appoinment/>}/>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
