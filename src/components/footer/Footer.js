import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer footer-light">
      <h6>Contact and Links:</h6>
      <p>
        Phone: <strong>808-388-7441</strong> || Email:
        <a href="mailto: maxhiga.hawaii@gmail.com"> maxhiga.hawaii@gmail.com</a>
      </p>
      <p>
        Github Profile:{" "}
        <a target="blank" href="https://github.com/maxx-808">
          maxx-808
        </a>{" "}
        || LinkedIn Profile:{" "}
        <a
          target="blank"
          href="https://www.linkedin.com/in/max-higa-2460351b4/"
        >
          Max Higa
        </a>{" "}
        ||{" "}
        <a
          target="blank"
          href="https://drive.google.com/file/d/1WxBTms23HICPaSjn_fgUHOz1N13ktd-r/view"
        >
          Resume (PDF) on Google Docs
        </a>
      </p>
    </footer>
  );
};

export default Footer;
