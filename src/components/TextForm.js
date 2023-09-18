import React, {useState} from 'react'

export default function TextForm(props) {

    const [Text, setText] = useState("");

    const handleUpClick = ()=>{
        let newText = Text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase","success")
    }

    const handleLoClick = ()=>{
        let newText = Text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase","success")

    }
    
    const copyText = ()=>{
        navigator.clipboard.writeText(Text)
        props.showAlert("Copied to Clipboard","success")

    }
    
    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.showAlert("Cleared","success")

    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }

    let wordCount = Text.split(/\s+/).filter((e) => e.length !== 0).length
    // let wordCount = Text.split(" ").filter((e)=>{return e.length!==0}).length

    return (
        <>
        <div className='container my-3' style={{color:props.mode==='dark'?'#D0D2D6':'black'}}>
            <h2 className='my-3'>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" placeholder='Enter Text Here!' value={Text} onChange={handleOnChange} id="textBox" rows="8" style={{backgroundColor:props.mode==='dark'?'#212529':'white', color:props.mode==='dark'?'#D0D2D6':'black' }}></textarea>
            </div>
                <button disabled={Text.length===0} className="btn btn-primary m-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={Text.length===0} className="btn btn-primary m-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button disabled={Text.length===0} className="btn btn-primary m-2" onClick={copyText}>Copy Text</button>
                <button disabled={Text.length===0} className="btn btn-danger m-2" onClick={handleClearClick}>Clear Text</button>

        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'#D0D2D6':'black'}}>
            <h3 className='my-3'>Your Text Summary</h3>
            <p>{wordCount} <strong>Words</strong> and {Text.length} <strong>Characters</strong>.</p>
            <p>{0.008 * wordCount} minutes <strong>Read Time</strong></p>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'#D0D2D6':'black'}}>    
            <h4 className='my-3'>Preview</h4>
            <p>{Text.length>0?Text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
