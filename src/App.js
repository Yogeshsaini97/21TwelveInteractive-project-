import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import "../src/CSSfolder/Navbar.css"
import { BrowserRouter } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Users from './Components/Users';
import Albums from './Components/Albums';
import Photos from './Components/Photos';

function App() {
  return (
    <BrowserRouter>
    
    <div className="App">
   
    
    <Navbar/>
    <Routes>
    
    <Route exact path="/" element={<Users/>}/>
    <Route exact path="/albums" element={<Albums/>}/>
    <Route exact path="/photos" element={<Photos/>}/>
    </Routes>
      
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
