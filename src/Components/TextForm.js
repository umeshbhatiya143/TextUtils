import React,{useState} from 'react';



export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    }
    const handleClearText = () =>{
        setText('');
        props.showAlert("Clear text","success");
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
       // text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed Extra Spaces","success");
    }
    const handleOnChange = (event) =>{
       // console.log("on Change");
        setText(event.target.value);
    }
    const [text,setText] = useState('');
    return (
        <>
        <div className='container col-8 my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <div>
            <h1 className='mb-2'>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: 
            props.mode==='dark' ? '#13466e': 'white' ,color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            <button disabled ={text.length===0} className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button disabled ={text.length===0}  className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button disabled ={text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear text</button>
            <button disabled ={text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy text</button>
            <button disabled ={text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        </div>
            <div className='container col-8 my-1' style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1>Your Text Summary:</h1>
            <p>{text.split(" ").filter((e)=>{return e.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((e)=>{return e.length!==0}).length} Minutes read</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:'Nothing to Preview!'}</p>
        </div>
        </>
    );
}
