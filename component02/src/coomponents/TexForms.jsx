import React, {useState} from 'react'

export default function TextForms(props) {
    const [alert, setalert] = useState("welcome!!!")
    const [textt,settextt] = useState("enter your text here");
    const handleUpClick = ()=> {
        let newtext = text.toUpperCase();
        setalert("Your text has been changed to upper case");
        setText(newtext);
    }
    let handleLowClick = ()=>{
      let newtext = text.toLowerCase();
      setalert("Your text has been changed to lower case");
      setText(newtext);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("enter your text here");
  return (
    <>
    <div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>{alert}</strong>
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
      <form>
  <div className="mb-3">
    <label  className="form-label"><h1 >{props.title}</h1></label>
    <input type="email" value={text} onChange={handleOnChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    {/* <textarea  value={text} onChange={handleOnChange} className="form-control" id="myBox" rows="8"></textarea> */}
  </div>
  <div className="container">
  <button type="submit" onClick={handleUpClick} className="btn btn-primary">Convert to upper case</button>
  <button type="submit" onClick={handleLowClick} className="btn btn-primary mx-3">Convert to lower case</button>
  </div>
</form>
    </div>
    <div className="container my-3" >
      <h4>Your Text Summanry</h4>
      {text.split(" ").filter((ele)=>{return ele.length!==0}).length} words and {text.length} characters.
      <h4>Preview your Text</h4>
      <span>{textt}</span>
    </div>
    </>
  )
}
