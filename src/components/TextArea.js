import React,{useState} from "react";


export default function TextArea(props) {
  const countWords=(str)=>{
    if(str.length===0)
    {
      return 0;
    }
    else
    {
      let c= str.split(/\s+/).filter((element)=>{return element.length!==0}).length;
      
      
      return c;
    }
  }

  const handleUpClick=()=>{
    // console.log("Upper case button was clicked")
    setText(text.toUpperCase())
  }

  const handleLowClick=()=>{
    // console.log("Upper case button was clicked")
    setText(text.toLowerCase())
  }

  const handleOnChange=(event)=>{
    // console.log("TextArea changed")
    setText(event.target.value)
  }
  
const handleOnClear=()=>{
  setText("")
}

const handleCopyToClip=()=>{
  navigator.clipboard.writeText(text);
  // alert("Copied the text: " + text);
  props.showAlert("copied to clipboard","success")
}

  const [text, setText]= useState("Enter the text here");
  // setText("Type here");

  return (<>
    <div className="container">
    <div className="mb-3">
      
      <textarea
        className="form-control"
        value={text}
        onChange={handleOnChange}
        style={{backgroundColor:props.mode==="light"?"white":"#212529", color:props.mode==="light"?"black":"white"}}
        id="Box"
        rows="8"
      ></textarea>

      <div className="my-3">
        <button className="btn btn-primary mx-2 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Upper Case</button>
        <button className="btn btn-info mx-2 my-1" disabled={text.length===0} onClick={handleLowClick}>Convert to Lower Case</button>
        <button className="btn btn-danger mx-2 my-1" disabled={text.length===0} onClick={handleOnClear}>Clear Text</button>
        <button className="btn btn-success mx-2 my-1" disabled={text.length===0} onClick={handleCopyToClip}>Copy to clipboard</button>
      </div>
    </div>
    </div>
    <div className="container" style={{color:props.mode==="light"?"black":"white"}}>
      <h1>Text Summary</h1>
      <p>{countWords(text)} words and {text.length} characters</p>
      <p>{0.008 * countWords(text)} minutes required to read</p>
      <h2>Preview</h2>
      <p style={{fontFamily: 'Aboreto, cursive', fontWeight: 800}}>{text.length===0?"ENTER TEXT TO DISPLAY HERE":text}</p>
    </div>
    </>
  );
}
