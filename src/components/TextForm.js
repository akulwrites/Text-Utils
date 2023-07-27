import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        //console.log("Uppercase button was clicked.");
        let newText = text.toUpperCase();
        setText(newText)
    }
    
    const handleLowClick = () => {
        //console.log("Uppercase button was clicked.");
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let nText = '';
        setText(nText)
    }

    const handleTitleClick = () => {
        let nwText = text.toLowerCase().split(" ").map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(" ");
        setText(nwText)
    }

    const handleOnChange = (event) => {
        //console.log("On Changed.");
        setText(event.target.value);
    } 

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => {
        let neText = text.split(/[ ]+/);
        setText(neText.join(" "));
    }

    const [text, setText] = useState(""); 
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#343a40'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'#343a40':'white', color: props.mode==='light'?'white':'#343a40'}} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
            <button className="btn btn-primary mx-2" onClick={handleTitleClick}>Title Case</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#343a40'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.005 * text.split(" ").length} minutes to read it.</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox above to preview it here."}</p>
        </div>
        </>
    )
}
