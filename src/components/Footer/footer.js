import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <hr />
      <div className="footer-content">
        <div className="footer-content-left">
          <p>© 2024 hoanghao. All rights reserved</p>
        </div>
        <div className="footer-content-right">
          <a href="https://www.facebook.com/hthh.179" className="icon"><FaFacebook /></a>
          <a href="https://www.instagram.com/huyn.hghao" className="icon"><FaInstagram /></a>
          <a href="https://github.com/hthh03" className="icon"><FaGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;