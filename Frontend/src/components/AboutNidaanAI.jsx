import React from "react";
import { FaGithub, FaLinkedinIn, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiTensorflow, SiPytorch } from "react-icons/si";
import creatorImage from "../assets/aditi.jpg";

function AboutNidaanAI() {
  const predictions = [
    ["01", "Heart Disease", "Cardiovascular risk prediction using health indicators."],
    ["02", "Lung Cancer", "Prediction support based on relevant clinical patterns."],
    ["03", "Breast Cancer", "Model-assisted prediction from health-related inputs."],
    ["04", "Diabetes", "Prediction of diabetes risk using clinical indicators."],
  ];

  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">MEET THE CREATOR</span>
          <h1>Hi, I'm <em>Aditi Singh Tomar.</em></h1>
          <h2>The developer behind Nidaan AI.</h2>
          <p>
            I built Nidaan AI as a healthcare-focused project exploring how
            modern web technologies and AI/ML can come together to make
            disease-risk prediction more accessible and understandable.
          </p>
          <a href="#story" className="about-btn">Discover the story <b>→</b></a>
        </div>

        <div className="creator-visual">
          <div className="creator-photo">
            <img src={creatorImage} alt="Aditi Singh Tomar" />
          </div>
          <div className="creator-card">
            <span>BUILT BY</span>
            <strong>Aditi Singh Tomar</strong>
            <small>Full-Stack Developer</small>
            <p>React • Node.js • MongoDB<br />Python • ML • DL</p>
            <div className="creator-social">
              <a href="#" aria-label="GitHub"><FaGithub /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="story" className="story section">
        <div className="section-label">WHY I BUILT NIDAAN AI</div>
        <div className="story-grid">
          <h2>Built with curiosity, code, and a vision for more accessible healthcare technology.</h2>
          <div>
            <p>Nidaan AI started as an exploration of how technology can make complex healthcare information easier to approach and understand.</p>
            <p>Rather than building only a machine-learning model, I wanted to understand the complete journey — from user experience and application development to model integration and prediction.</p>
          </div>
        </div>
      </section>

     

      <section className="technology section">
        <div className="section-label">TECHNOLOGY BEHIND NIDAAN AI</div>
        <div className="tech-head">
          <h2>From interface to intelligence.</h2>
         
        </div>
        <div className="tech-grid">
          <div><FaReact /><span>React</span><small>Frontend</small></div>
          <div><FaNodeJs /><span>Node.js</span><small>Backend</small></div>
          <div><SiMongodb /><span>MongoDB</span><small>Database</small></div>
          <div><FaPython /><span>Python</span><small>ML Layer</small></div>
          <div><SiTensorflow /><span>TensorFlow</span><small>Deep Learning</small></div>
          <div><SiPytorch /><span>PyTorch</span><small>Model Development</small></div>
        </div>
      </section>

      <section className="predictions section">
        <div className="section-label">PREDICTION AREAS</div>
        <h2>Four health areas, one prediction platform.</h2>
        <div className="prediction-grid">
          {predictions.map(([number, title, text]) => (
            <article key={title}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{text}</p>
              <b>Prediction model →</b>
            </article>
          ))}
        </div>
      </section>

      <section className="vision">
        <div>
          <span className="eyebrow">FUTURE VISION</span>
          <h2>Building beyond a project.</h2>
        </div>
        <p>
          The long-term vision for Nidaan AI is to keep exploring better models,
          richer healthcare experiences and more useful ways to present
          prediction results — while keeping the technology understandable,
          responsible and accessible.
        </p>
      </section>

      <section className="disclaimer">
        <strong>MEDICAL DISCLAIMER</strong>
        <p>
          Nidaan AI is an educational and technology project. Its predictions
          are not a medical diagnosis, professional medical advice, or a
          substitute for consultation with a qualified healthcare professional.
        </p>
      </section>






      <style>{`
  .about-page {
    --navy: #03045e;
    --blue: #0077b6;
    --cyan: #00b4d8;
    --pale: #f5fcfe;

    --line: rgba(3,4,94,.1);
    --muted: #657389;

    background: #fff;
    color: var(--navy);
    font-family: Inter, sans-serif;
  }

  .about-hero,
  .section {
    width: min(1120px, calc(100% - 40px));
    margin: auto;
  }

  .about-hero {
    min-height: 650px;
    display: grid;
    grid-template-columns: 1fr .8fr;
    align-items: center;
    gap: 80px;
    padding: 70px 0;
  }

  .eyebrow,
  .section-label {
    color: var(--blue);
    font-size: 10px;
    font-weight: 800;
    letter-spacing: .2em;
  }

  .eyebrow:before {
    content: "";
    display: inline-block;
    width: 25px;
    height: 1px;
    margin-right: 9px;
    vertical-align: middle;
    background: var(--cyan);
  }

  .about-hero h1 {
    max-width: 650px;
    margin: 18px 0 10px;
    font: 500 clamp(45px, 5vw, 68px)/1.03 "Playfair Display", Georgia, serif;
    letter-spacing: -.045em;
  }

  .about-hero h1 em {
    color: var(--blue);
    font-style: normal;
  }

  .about-hero h2 {
    margin: 0 0 18px;
    color: var(--blue);
    font: 500 21px "Playfair Display", Georgia, serif;
  }

  .about-hero p,
  .story p,
  .project p,
  .tech-head p,
  .vision p {
    color: var(--muted);
    font-size: 16px;
    line-height: 1.8;
  }

  .about-hero p {
    max-width: 570px;
  }

  .about-btn {
    display: inline-flex;
    gap: 15px;
    margin-top: 12px;
    padding: 13px 18px;
    background: #0077b6;
    color: #fff;
    text-decoration: none;
    font-size: 14px;
    border-radius: 25px;
    font-weight: 700;
  }

  .about-btn:hover {
    background: var(--blue);
  }

  .creator-visual {
    position: relative;
    min-height: 440px;
  }

  .creator-photo {
    width: 82%;
    height: 390px;
    margin-left: auto;
    overflow: hidden;
    background: var(--pale);
    border-radius: 150px 150px 18px 18px;
  }

  .creator-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .creator-card {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 205px;
    padding: 20px;
    background: #fff;
    box-shadow: 0 15px 40px rgba(3,4,94,.1);
    border: 1px solid var(--line);
  }

  .creator-card span {
    color: var(--cyan);
    font-size: 8px;
    font-weight: 800;
    letter-spacing: .16em;
  }

  .creator-card strong {
    display: block;
    margin: 7px 0 3px;
    font: 500 21px "Playfair Display", Georgia, serif;
  }

  .creator-card small,
  .creator-card p {
    color: var(--muted);
    font-size: 10px;
    line-height: 1.6;
  }

  .creator-card p {
    margin: 10px 0 14px;
  }

  .creator-social {
    display: flex;
    gap: 7px;
  }

  .creator-social a {
    width: 28px;
    height: 28px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    color: var(--blue);
    font-size: 12px;
  }

  .section {
    padding: 90px 0;
  }

  .section-label {
    margin-bottom: 20px;
  }

  .story {
    width: 100%;
    padding: 5% 12%;
    background: #edf4ff;
  }

  .story-grid,
  .project-grid {
    display: grid;
    grid-template-columns: 1.05fr .95fr;
    gap: 80px;
  }

  .story h2,
  .project h2,
  .tech-head h2,
  .predictions > h2 {
    margin: 0;
    font: 500 clamp(32px, 4vw, 48px)/1.1 "Playfair Display", Georgia, serif;
    letter-spacing: -.035em;
  }

  .project {
    max-width: none;
    width: 100%;
    padding-left: max(20px, calc((100% - 1120px)/2));
    padding-right: max(20px, calc((100% - 1120px)/2));
    background: var(--pale);
  }

  .technology {
    border-bottom: 1px solid var(--line);
  }

  .tech-head {
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 40px;
    margin-bottom: 35px;
  }

  .tech-head p {
    max-width: 400px;
    margin: 0;
  }

  .tech-grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    border-top: 1px solid var(--line);
    border-left: 1px solid var(--line);
  }

  .tech-grid div {
    min-height: 125px;
    padding: 20px;
    border-right: 1px solid var(--line);
    border-bottom: 1px solid var(--line);
  }

  .tech-grid svg {
    color: var(--blue);
    font-size: 23px;
    margin-bottom: 22px;
  }

  .tech-grid span,
  .tech-grid small {
    display: block;
  }

  .tech-grid span {
    font-size: 12px;
    font-weight: 700;
  }

  .tech-grid small {
    margin-top: 4px;
    color: var(--muted);
    font-size: 9px;
  }

  .predictions > h2 {
    max-width: 600px;
    margin-bottom: 35px;
  }

  .prediction-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
  }

  .prediction-grid article {
    padding: 24px;
    min-height: 180px;
    border: 1px solid var(--line);
    background: #fff;
    transition: .2s;
  }

  .prediction-grid article:hover {
    transform: translateY(-3px);
    border-color: rgba(0,180,216,.4);
  }

  .prediction-grid article > span {
    color: var(--cyan);
    font-size: 12px;
    font-weight: 800;
  }

  .prediction-grid h3 {
    margin: 25px 0 8px;
    font: 500 21px "Playfair Display", Georgia, serif;
  }

  .prediction-grid p {
    min-height: 48px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.2;
  }

  .prediction-grid b {
    color: var(--blue);
    font-size: 12px;
  }

  .vision {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    padding: 75px max(20px, calc((100% - 1120px)/2));
    background: #0077b6;
  }

  .vision .eyebrow {
    color: var(--cyan);
  }

  .vision h2 {
    margin: 15px 0 0;
    color: #fff;
    font: 500 clamp(35px, 4vw, 50px)/1.05 "Playfair Display", Georgia, serif;
  }

  .vision p {
    color: rgba(255,255,255,.65);
    margin: 0;
  }

  .disclaimer {
    width: min(1120px, calc(100% - 40px));
    margin: auto;
    padding: 25px 0 35px;
    display: flex;
    justify-content: space-between;
    gap: 30px;
  }

  .disclaimer strong {
    color: var(--blue);
    font-size: 9px;
    letter-spacing: .14em;
    white-space: nowrap;
  }

  .disclaimer p {
    max-width: 700px;
    margin: 0;
    color: var(--muted);
    font-size: 9px;
    line-height: 1.7;
  }

  @media(max-width:800px) {
    .about-hero,
    .story-grid,
    .project-grid,
    .vision {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .about-hero {
      padding: 55px 0;
    }

    .creator-visual {
      min-height: 400px;
    }

    .tech-head {
      display: block;
    }

    .tech-head p {
      margin-top: 15px;
    }

    .tech-grid {
      grid-template-columns: repeat(3, 1fr);
    }

    .prediction-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media(max-width:520px) {
    .about-hero,
    .section {
      width: min(100% - 30px, 1120px);
    }

    .about-hero h1 {
      font-size: 43px;
    }

    .creator-photo {
      width: 90%;
      height: 340px;
    }

    .tech-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .prediction-grid {
      grid-template-columns: 1fr;
    }

    .disclaimer {
      display: block;
    }

    .disclaimer p {
      margin-top: 10px;
    }
  }
`}</style>

      
    </main>
  );
}

export default AboutNidaanAI;
