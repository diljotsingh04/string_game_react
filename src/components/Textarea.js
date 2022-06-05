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
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
        props.setAlertmsg("Speaking...", "success");
    }
    
    function wordCount() {
        let charCounter = text ? text.length : 0;

        if(charCounter !== 0){
            var newText = text.trim();
        }
        
        let count = newText ? newText.split(" ").length : 0;
        
        
        if(charCounter === 0){
            return 0;
        }
        return count;
    }

  return (
    <>
        <div className="styling" style={{color: props.mode === "dark" ? "white" : "black"}}>
            <div className="my-3 container" >
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={onChangeFunc} id="textf" rows="10" placeholder='Enter Text here'></textarea>
                <button className="btn btn btn-primary my-3" onClick={buttonClick}>Convert To Upper Case</button>
                <button className="btn btn btn-primary mx-3 my-3" onClick={buttonClickLower}>Convert To Lower Case</button>
                <button type="submit" onClick={speak} className="btn btn btn-primary mx-2 my-3">Speak</button>
            </div>
            <div className="container">
                <h5><p>  Word Counter:- <b>{wordCount()}</b> Character counter:- <b>{text ? text.length : 0}</b></p></h5>
            </div>
        </div>
    </> 
  )
}
