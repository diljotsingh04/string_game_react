import React, { useState } from 'react'

export default function Textarea(props) {
    const [text, setText] = useState();

    function onChangeFunc(e) {
        // console.log("ON change triggered");
        setText(e.target.value);
    }
    function buttonClick() {
        // console.log("Button Clicked");
        setText(text.toUpperCase());
    }
    function buttonClickLower() {
        // console.log("Button Clicked");
        setText(text.toLowerCase());
    }

  return (
    <div className="my-3 container">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={onChangeFunc} id="exampleFormControlTextarea1" rows="10" placeholder='Enter Text here'></textarea>
        <button className="btn btn btn-primary my-3" onClick={buttonClick}>Convert To Upper Case</button>
        <button className="btn btn btn-primary mx-3 my-3" onClick={buttonClickLower}>Convert To Lower Case</button>
    </div>
  )
}
