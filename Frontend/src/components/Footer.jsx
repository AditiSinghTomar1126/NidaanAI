import React from "react";
import logo from "../assets/Logo.png"; 
import {
  FaGlobe,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-brand">
          <img src={logo} alt="Nidaan AI" />

          <p>
            Intelligent disease prediction designed to help you understand
            health risks earlier.
          </p>

          <div className="footer-social">
            <a href="https://aditisinghtomar-aditi-singh-tomar1126.vercel.app/" aria-label="Instagram">
              <FaGlobe />
            </a>
            <a href="https://www.linkedin.com/in/aditisinghtomar" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="mailto:aditisinghtomar1126@gmail.com" aria-label="mail">
              <FaEnvelope />
            </a>
            <a href=" https://github.com/AditiSinghTomar1126" aria-label="GitHub">
              <FaGithub />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="/">Home</a>
            <a href="/predictors">Predictors</a>
            <a href="/about">About Us</a>
          </div>

          <div>
            <h4>Prediction Models</h4>
            <a href="/predictors/heart">Heart Disease</a>
            <a href="/predictors/lung">Lung Cancer</a>
            <a href="/predictors/breast">Breast Cancer</a>
            <a href="/predictors/diabetes">Diabetes</a>
          </div>

          <div>
            <h4>Support</h4>
            <a href="/login">Log In</a>
            <a href="/signup">Sign Up</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy Policy</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <span>©️ 2026 Nidaan AI. All rights reserved.</span>
        <span>AI-assisted prediction • Built for better health insights</span>
      </div>

      <style>{`
        .footer {
          background: #edf4ff;
          color: #000;
          font-family: Inter, sans-serif;
        }

        .footer-inner {
          width: min(1120px, calc(100% - 40px));
          margin: auto;
          padding: 65px 0 50px;
          display: grid;
          grid-template-columns: .9fr 1.5fr;
          gap: 100px;
        }

        .footer-brand img {
          width: 135px;
          margin-bottom: 18px;
         
        }

        .footer-brand p {
          max-width: 280px;
          margin: 0;
          color: #000;
          font-size: 14px;
          line-height: 1.2;
        }

        .footer-social {
          display: flex;
          gap: 20px;
          margin-top: 25px;
        }

        .footer-social a {
          width: 30px;
          height: 30px;
          display: grid;
          place-items: center;
          border: 1px solid #5f5959a0;
          border-radius: 50%;
          color: #5f5959a0;
          text-decoration: none;
          font-size: 18px;
          font-weight: 700;
          transition: .2s;
        }

        .footer-social a:hover {
          width: 40px;
          height: 40px;
          font-size: 25px;
        }

        .footer-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
        }

        .footer-links h4 {
          margin: 5px 0 18px;
          color: #000;
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
        }

        .footer-links a {
          display: block;
          width: fit-content;
          margin-bottom: 11px;
          color: #5f5959a0;
          text-decoration: none;
          font-size: 14px;
          transition: .2s;
        }

        .footer-links a:hover {
          color: #000;
          transform: translateX(3px);
        }

        .footer-bottom {
          width: min(1120px, calc(100% - 40px));
          margin: auto;
          padding: 18px 0;
          border-top: #000);
          display: flex;
          justify-content: space-between;
          color: #000;
          font-size: 12px;
        }

        @media (max-width: 700px) {
          .footer-inner {
            grid-template-columns: 1fr;
            gap: 45px;
            padding: 50px 0 35px;
          }

          .footer-links {
            gap: 20px;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;