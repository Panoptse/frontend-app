import React, { useEffect, useState } from "react";
import axios from "axios";
import { marked } from "marked";

function App() {
  const [data, setData] = useState("");
  const [html, setHtml] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const content = params.get("content") || "";
    setHtml(marked(content) as string);
    const apiUrl = params.get("api") || "/api/data";
    axios.get(apiUrl).then(r => setData(JSON.stringify(r.data)));
  }, []);
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <pre>{data}</pre>
    </div>
  );
}
export default App;
