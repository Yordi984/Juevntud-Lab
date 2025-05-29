import React from "react";

export default function header() {
  return (
    <>
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
