import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://vercel.com/pratiks-projects-f7e04e18/reddit-reactjs-simple/NteFc3bKjFW1btjC8PXNufCmCTm9");
        const data = await res.json();
        setPosts(data.data.children);
      } catch (err) {
        setError(err.message);
      }
    };

    load();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>ReactJS Reddit Feed</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}

      {posts.map((p, i) => (
        <div key={i} style={{ border: "1px solid #ccc", margin: 10, padding: 15, borderRadius: 12 }}>
          <h3>{p.data.title}</h3>

          <div
            dangerouslySetInnerHTML={{ __html: p.data.selftext_html }}
            style={{ marginBottom: 10 }}
          />

          <a href={p.data.url} target="_blank" rel="noreferrer">
            {p.data.url}
          </a>

          <p>Score: {p.data.score}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
