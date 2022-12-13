import React from "react";
// import ReactDom from "react-dom";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer>
      <p>Copyright © {year}</p>
    </footer>
  );
}

export default Footer;
