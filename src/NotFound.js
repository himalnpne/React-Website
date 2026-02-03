import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "404 – Page Not Found";
  }, []);

  return (
    <div style={{ padding: "3rem", textAlign: "center" }}>
      <h1>404</h1>
      <p>This page does not exist.</p>
      <a href="/">Go Home</a>
    </div>
  );
}
