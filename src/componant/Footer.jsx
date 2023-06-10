import React from 'react'
import "./Footer.css"
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

const Footer = () => {

  return (
    <div>
        <div className="footer-basic">
  <footer>
    <div className="social">
      <a href="#">
        <GoMarkGithub />
      </a>
      <a href="#">
        <BsLinkedin/>
      </a>
      <a href="#">
        <BsInstagram />
      </a>
      {/* <a href="#">
        <i className="icon ion-social-facebook" />
      </a> */}
    </div>
   
    <p className="copyright">Progressive-ARC Technologies © 2023</p>
  </footer>
</div>

    </div>
  )
}

export default Footer