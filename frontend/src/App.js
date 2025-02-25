import React, { useState } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSummraize = async () => {
    setLoading(true); 
    try {
      const response = await axios.post("http://localhost:5000/summarize", { text });
      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error summarizing text: ", error);
      setSummary("Error generating summary.");
    }
    setLoading(false);
  }; 

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>AI Summarizer</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text here..."
        row={5}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={handleSummraize} style={{ marginTop: "10px" }} disabled={loading}>
        {loading ? "Summarizing..." : "Summarize"}
      </button>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}

export default App;
      
