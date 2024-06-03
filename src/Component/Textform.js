import React, { useState } from 'react';
import Alert from './Alert';

export default function Textform() {
  const [text, setText] = useState('Enter text here');
  const [alert, setAlert] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const updateText = (newText) => {
    setHistory([...history, text]);
    setText(newText);
  };

  const handleUpperCaseClick = () => {
    updateText(text.toUpperCase());
    showAlert('Converted to upper case!', 'success');
  };

  const handleLowerCaseClick = () => {
    updateText(text.toLowerCase());
    showAlert('Converted to lower case!', 'success');
  };

  const handleClearClick = () => {
    updateText("");
    showAlert('Text cleared!', 'success');
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(text).then(() => {
      showAlert('Text copied to clipboard!', 'success');
    }).catch(err => {
      showAlert('Failed to copy text', 'danger');
      console.error('Failed to copy text: ', err);
    });
  };

  const handlePasteClick = () => {
    navigator.clipboard.readText().then(clipText => {
      updateText(clipText);
      showAlert('Text pasted from clipboard!', 'success');
    }).catch(err => {
      showAlert('Failed to read text from clipboard', 'danger');
      console.error('Failed to read text from clipboard: ', err);
    });
  };

  const handleRemoveExtraSpacesClick = () => {
    updateText(text.replace(/\s+/g, ' ').trim());
    showAlert('Extra spaces removed!', 'success');
  };

  const handleUndoClick = () => {
    if (history.length > 0) {
      setText(history[history.length - 1]);
      setHistory(history.slice(0, -1));
      showAlert('Undo successful!', 'success');
    } else {
      showAlert('Nothing to undo!', 'warning');
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const accordionStyle = {
    backgroundColor: darkMode ? '#333' : '#fff',
    color: darkMode ? '#fff' : '#000',
    border: darkMode ? '1px solid #444' : '1px solid #ddd'
  };

  return (
    <>
      <Alert alert={alert} />
      <div>
        <h1>Enter the Text</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="Mybox"
            rows="8"
            value={text}
            onChange={handleOnChange}>
          </textarea>
        </div>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUpperCaseClick}>
          Convert to upper case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleLowerCaseClick}>
          Convert to lower case
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleClearClick}>
          Clear text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleCopyClick}>
          Copy text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handlePasteClick}>
          Paste text
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleRemoveExtraSpacesClick}>
          Remove extra spaces
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={handleUndoClick}>
          Undo
        </button>
      </div>
      <div className="container my-3">
        <h1>Your Summary</h1>
        <p>{text.trim().split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * text.trim().split(/\s+/).length} Minute Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <div className="container" style={accordionStyle}>
        <h2 className="my-3">About Us</h2>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item" style={accordionStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={accordionStyle}>
                Accordion Item #1
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={accordionStyle}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={accordionStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={accordionStyle}>
                Accordion Item #2
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={accordionStyle}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={accordionStyle}>
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={accordionStyle}>
                Accordion Item #3
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body" style={accordionStyle}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={toggleDarkMode}>
          {darkMode ? 'Enable Light Mode' : 'Enable Dark Mode'}
        </button>
      </div>
    </>
  );
}
