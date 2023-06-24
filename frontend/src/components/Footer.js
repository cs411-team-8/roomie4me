import React from "react";

function Footer() {
  return (
    <footer className="text-center bg-dark">
      <div className="container text-white py-4 py-lg-5">
        <ul className="list-inline">
          <li className="list-inline-item me-4">
            <a className="link-light" href="about">
              About Us
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a className="link-light" href="donate">
              Donate
            </a>
          </li>
          <li className="list-inline-item me-4">
            <a className="link-light" href="tos">
              Terms of Service
            </a>
          </li>
          <li className="list-inline-item">
            <a className="link-light" href="privacy">
              Privacy Policy
            </a>
          </li>
          <li className="list-inline-item" />
        </ul>
        <p className="text-white-50 mb-0">Copyright © 2023 Roomie4Me</p>
      </div>
    </footer>
  );
}

export default Footer;
