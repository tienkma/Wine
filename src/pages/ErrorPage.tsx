import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div id="error_page">
      <section className="container">
        <h1>404</h1>
        <h4>Sorry, the page you are tried cannot be found.</h4>
        <Link className="btn" to="/">
          Back Home
        </Link>
      </section>
    </div>
  );
}

export default ErrorPage;
