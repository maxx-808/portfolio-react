import React from "react";

const Contact = () => {
  return (
    <div className="container contact-container">
      <h4>If you need to contact me:</h4>
      <ul>
        <li>
          <strong>Phone Number: </strong>(808)-388-7441
        </li>
        <li>
          <strong>Email: </strong>
          <a href="mailto: maxhiga.hawaii@gmail.com">
            maxhiga.hawaii@gmail.com
          </a>
        </li>
      </ul>
      <br />
      <h5>Links to my profiles on other platforms and other useful links!</h5>
      <ul>
        <li>
          <strong>Github Profile: </strong>
          <a target="blank" href="https://github.com/maxx-808">
            maxx-808
          </a>
        </li>
        <li>
          <strong>LinkedIn Profile:</strong>
          <a
            target="blank"
            href="https://www.linkedin.com/in/max-higa-2460351b4/"
          >
            Max Higa
          </a>
        </li>
        <li>
          <strong>
            <a
              target="blank"
              href="https://drive.google.com/file/d/1WxBTms23HICPaSjn_fgUHOz1N13ktd-r/view"
            >
              Resume (PDF) on Google Docs
            </a>
          </strong>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
