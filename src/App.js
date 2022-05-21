import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appoinment from "./Pages/Appoinment/Appoinment/Appoinment";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";

function App() {
  return <div className="App">
    <AuthProvider>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/appoinment" element={<Appoinment/>}/>
            <Route path= "/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
     </BrowserRouter>
    </AuthProvider>
  </div>;
}

export default App;
