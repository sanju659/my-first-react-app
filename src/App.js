import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("ligth");
  const [textMode, setTextMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleTheme = () => {
    if (mode === "dark") {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Has been enabled", "Success");
    } else {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "#1a3333";
      showAlert("Dark mode Has been enabled", "Success");
    }
  };

  return (
    <>
      <Navbar
        title="ReactJS"
        mode={mode}
        textMode={textMode}
        toggleTheme={toggleTheme}
      />
      <Alert alert={alert} />
      <div className="container">
        <TextForm
          heading="Enter the text to Analyze below"
          textMode={textMode}
          mode={mode}
          showAlert={showAlert}
        />
      </div>
      {/* <div className="container">
        <About/>
      </div> */}
    </>
  );
}

export default App;
