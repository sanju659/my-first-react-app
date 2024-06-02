import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, {useState} from 'react';
function App() {
  const [mode, setMode] = useState("ligth");
  const [textMode, setTextMode] = useState("dark");

  const toggleTheme = () => {
    if(mode === "dark"){
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
    }else{
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#1a3333";
    }
  };
  
  return (
    <>
      <Navbar title="ReactJS" mode={mode} textMode={textMode} toggleTheme={toggleTheme}/>
      <div className="container">
        <TextForm heading="Enter the text to Analyze below" textMode={textMode}  mode={mode}/>
      </div>
      {/* <div className="container">
        <About/>
      </div> */}
    </>
  );
}

export default App;
