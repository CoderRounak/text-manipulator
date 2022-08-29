import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //THEME
  

  const [mode, setmode] = useState("light")
  const [alert, setalert] = useState(null);

  const showAlert=(message, type)=>{
    setalert({msg:message,
    type:type})

    setTimeout(() => {
      setalert(null)
    }, 2000);
  }


  const toggleMode=()=>{
    if(mode==="light")
    {
      setmode("dark")
      document.body.style.backgroundColor='#212529'
      showAlert("Dark Mode has been enabled", "success")
    }
    else
    {
      setmode("light")
      document.body.style.backgroundColor='white'
    }
  }
  return (
    <>
    <Router>
      
      <Navbar title="TEXTmanipulator" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
            
          
          <Route path="/" element={<TextArea heading="Enter the text :-" showAlert={showAlert} mode={mode}/>}/>
          
          
      </Routes>
      </div>
      
      </Router>
    </>
  );
}

export default App;
