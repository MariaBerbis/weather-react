import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <footer>
          This project was coded by
          <a
            href="https://github.com/MariaBerbis"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Maria Berbis
          </a>
          , is
          <a
            href="https://github.com/MariaBerbis?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open-sourced on GitHub
          </a>{" "}
          and
          <a
            href="https://app.netlify.com/sites/my-weather-app-calima/overview"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            hosted on Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
