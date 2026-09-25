import React from "react";
import { Link } from "react-router-dom";
import medicalHero from "../assets/hero.png";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">

        <div className="hero-copy">
          <span className="eyebrow">AI-POWERED HEALTHCARE</span>

          <h1>
            Smarter prediction
            <br />
            for a <em>healthier future.</em>
          </h1>

          <p>
            NidaanAI uses intelligent prediction models to identify patterns
            across major diseases and help you understand health risks earlier.
          </p>

          <div className="hero-actions">
            <Link to="/predictors">Explore Predictions <b>→</b></Link>
            <Link to="/about">Learn More</Link>
          </div>

          <div className="hero-points">
            <div><strong>04</strong><span>Prediction<br />Models</span></div>
            <div><strong>AI</strong><span>Assisted<br />Analysis</span></div>
            <div><strong>24/7</strong><span>Accessible<br />Platform</span></div>
          </div>
        </div>

        <div className="hero-art">
          <div className="orb orb-one" />
          <div className="orb orb-two" />

          <img src={medicalHero} alt="Medical prediction technology" />

          <div className="floating-card prediction">
            <strong>04</strong>
            <span>Disease<br />Prediction Models</span>
          </div>

          <div className="floating-card models">
            <div>♡ <span>Heart Disease</span></div>
            <div>◉ <span>Diabetes</span></div>
            <div>◌ <span>Lung Cancer</span></div>
            <div>✦ <span>Breast Cancer</span></div>
          </div>
        </div>

      </div>

      <style>{`
        .hero {
          background: #fff;
          font-family: Inter, sans-serif;
          overflow: hidden;
        }

        .hero-inner {

         width: 100%;
        
          min-height: 650px;
          margin: 0;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          align-items: center;
          gap: 25px;
        }

        .eyebrow {
          color: #00b4d8;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .eyebrow::before {
          content: "";
          display: inline-block;
          width: 30px;
          height: 1px;
          margin-right: 10px;
          vertical-align: middle;
          background: #00b4d8;
        }

        .hero h1 {
          margin: 18px 0;
          color: #03045e;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(46px, 5vw, 68px);
          line-height: 1.02;
          letter-spacing: -.045em;
        }

        .hero h1 em {
          color: #0077b6;
          font-style: normal;
        }

        .hero-copy p {
          max-width: 500px;
          color: #657389;
          font-size: 18px;
          line-height: 1.2;
        }

        .hero-actions {
          display: flex;
          gap: 12px;
          margin-top: 60px;
          
        }

        .hero-actions a {
          padding: 13px 18px;
          border: 1px solid #0077b6;
          border-radius: 35px;
          color: #0077b6;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }

        .hero-actions a:first-child {
          background: #0077b6;
          
          color: #fff;
        }


        .hero-actions a:hover {
          background: #1755ab;
        
          color: #fff;
        }

        .hero-actions b {
          margin-left: 12px;
          font-size: 15px;
        }

        .hero-points {
          display: flex;
          gap: 50px;
          margin-top: 42px;
        }

        .hero-points div {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .hero-points strong {
          color: #0077b6;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 32px;
        }

        .hero-points span {
          color: #657389;
          font-size: 10px;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: .06em;
        }

        .hero-art {
          position: absolute;
          right: 0;
          top: 10%;
        width: 50%;
          height: 700px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #edf4ff;
          border-radius:  50% 0 30% 15%;
          overflow: hidden;
        }

        .hero-art img {
          position: relative;
          z-index: 2;
          width: 90%;
          height: 90%;
          object-fit: contain;
        }


        .orb {
          position: absolute;
          border: 35px solid  rgb(213, 227, 249);
          border-radius: 50%;
        }

        .orb-one {
          width: 420px;
          height: 420px;
          left: -150px;
          bottom: -170px;
        }

        .orb-two {
          width: 260px;
          height: 260px;
          right: -100px;
          top: -90px;
        }

        .floating-card {
          position: absolute;
          z-index: 4;
          display: flex;
          align-items: center;
          background: rgba(255,255,255,.94);
          box-shadow: 0 12px 35px rgba(3,4,94,.1);
        }

        .prediction {
          top: 55px;
          right: 25px;
          gap: 10px;
          padding: 13px 17px;
        }

        .prediction strong {
          color: #0077b6;
          font-family: "Playfair Display", Georgia, serif;
          font-size: 28px;
        }

        .prediction span {
          color: #03045e;
          font-size: 9px;
          line-height: 1.4;
        }

        .models {
          left: 100px;
          bottom: 55px;
          display: grid;
          gap: 8px;
          padding: 14px 18px;
        }

        .models div {
          color: #00b4d8;
          font-size: 11px;
        }

        .models span {
          margin-left: 8px;
          color: #03045e;
          font-size: 9px;
        }

        @media (max-width: 750px) {
  .hero {
    overflow: hidden;
  }

  .hero-inner {
    width: 100%;
    min-height: auto;
    grid-template-columns: 1fr;
    gap: 30px;
    padding: 45px 20px 30px;
  }

  .hero-copy {
    width: 100%;
  }

  .eyebrow {
    font-size: 9px;
  }

  .hero h1 {
    font-size: clamp(36px, 9vw, 46px);
    line-height: 1.08;
    margin: 18px 0;
  }

  .hero-copy p {
    max-width: 100%;
    font-size: 15px;
    line-height: 1.7;
  }

  .hero-actions {
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 25px;
  }

  .hero-actions a {
    padding: 12px 16px;
    font-size: 12px;
  }

  .hero-points {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    margin-top: 30px;
  }

  .hero-points div {
    gap: 6px;
  }

  .hero-points strong {
    font-size: 25px;
  }

  .hero-points span {
    font-size: 8px;
  }

  .hero-art {
    position: relative;
    top: auto;
    right: auto;
    width: 100%;
    height: 340px;
    border-radius: 45% 45% 18px 18px;
    margin: 0 auto;
  }

  .hero-art img {
    width: 95%;
    height: 95%;
    object-fit: contain;
  }

  .orb-one {
    width: 260px;
    height: 260px;
    left: -100px;
    bottom: -120px;
    border-width: 22px;
  }

  .orb-two {
    width: 180px;
    height: 180px;
    right: -70px;
    top: -60px;
    border-width: 22px;
  }

  .prediction {
    top: 20px;
    right: 12px;
    gap: 8px;
    padding: 10px 12px;
  }

  .prediction strong {
    font-size: 24px;
  }

  .prediction span {
    font-size: 8px;
  }

  .models {
    left: 12px;
    bottom: 15px;
    gap: 7px;
    padding: 12px 14px;
  }

  .models div {
    font-size: 10px;
  }

  .models span {
    font-size: 8px;
  }
}

@media (max-width: 400px) {
  .hero-inner {
    padding: 35px 15px 25px;
  }

  .hero h1 {
    font-size: 35px;
  }

  .hero-actions a {
    padding: 11px 13px;
    font-size: 11px;
  }

  .hero-points strong {
    font-size: 22px;
  }

  .hero-points span {
    font-size: 7px;
  }

  .hero-art {
    height: 290px;
  }

  .models {
    left: 8px;
    bottom: 10px;
    padding: 10px;
  }

  .prediction {
    right: 8px;
    top: 12px;
  }
}
      `}</style>
    </section>
  );
}

export default Hero;