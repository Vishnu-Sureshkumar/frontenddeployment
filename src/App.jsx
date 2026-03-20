import { useState } from "react";
import "./App.css";

function App() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="app">
      <div className="upload-card">
        <h1>📤 Upload File</h1>
        <p className="subtitle">Select a file to upload</p>

        <label className="upload-box">
          <input type="file" onChange={handleFileChange} hidden />
          <div>
            <p>📁 Drag & Drop or Click to Upload</p>
          </div>
        </label>

        {fileName && (
          <div className="file-info">
            <p>Selected File:</p>
            <strong>{fileName}</strong>
          </div>
        )}

        <button className="upload-btn">Uploadbutton</button>
      </div>
    </div>
  );
}

export default App;