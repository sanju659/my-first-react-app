import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleUPClick = () => {
    // console.log("Upper Case Clicked" );
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleCapiClick = () => {
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
    setText(words.join(" "));
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="myBox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-success me-3" onClick={handleUPClick}>
          Upper Case
        </button>
        <button className="btn btn-primary me-3" onClick={handleLowClick}>
          Lower Case
        </button>
        <button className="btn btn-info me-3" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-warning me-3" onClick={handleCapiClick}>
          Capitalize 
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text Summary</h2>
        {/* <p>{text.split(" ").length} words, {text.length} character</p> */}
        <p>
          {text.trim().split(/\s+/).length} words, {text.length} character
        </p>
      </div>
    </>
  );
}
