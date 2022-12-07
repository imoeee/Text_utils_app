import React, { useState } from 'react'

const Textform = (props) => {

    const handleUp = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase!', 'success')
    }

    const handleLo = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase!', 'success')
    }

    const handleCl = () => {
        let newText = '';
        setText(newText);
        props.showAlert('text was clear!', 'success')
    }

    const handleOn = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2 className='my-3'>{props.heading}</h2>
                <div className='mb-3'>
                    <textarea onChange={handleOn} style={{ background: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} className='form-control' value={text} id='myBox' rows='8' ></textarea>
                    <button disabled={text.length === 0} className='btn btn-primary my-4 mx-2' onClick={handleUp}>Uppercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary my-4 mx-2' onClick={handleLo}>Lowercase</button>
                    <button disabled={text.length === 0} className='btn btn-primary my-4 mx-2' onClick={handleCl}>Clear</button>
                </div>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }} >
                <h1>Your Summary</h1>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} Words and {text.length} Characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes Read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Nothing to Preview!'}</p>
            </div>
        </>
    )
}

export default Textform