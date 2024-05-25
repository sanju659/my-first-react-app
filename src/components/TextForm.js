import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On Change");
    setText(event.target.value);
  };
  const handleUPClick = () => {
    console.log("Upper Case Clicked" );
    let newText = text.toUpperCase();
    setText(newText);
  };

  const [text, setText] = useState("Enter Text Here");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3 my-3">
        <textarea
          value={text}
          onChange={handleOnChange}
          className="form-control"
          id="myBox"
          rows="7"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUPClick}>
        Convert to upper Case
      </button>
    </div>
  );
}
