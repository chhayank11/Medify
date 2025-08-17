// ErrorPage.jsx
import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>😵 Oops!</h1>
      <p>You wandered off into the void. This page doesn’t exist.</p>
      <img
        src="https://media.giphy.com/media/3o7abldj0b3rxrZUxW/giphy.gif"
        alt="Funny 404"
        style={{ width: "250px", margin: "20px 0" }}
      />
      <br />
      <Link to="/" style={{ color: "#007bff", textDecoration: "none" }}>
        🏠 Take me back home
      </Link>
    </div>
  );
}
