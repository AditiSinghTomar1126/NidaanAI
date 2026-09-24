import React from "react";
import { ArrowRight } from "lucide-react";
const Icon = ({ type, size = 19, strokeWidth = 1.8 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    heart: (
      <>
        <path d="M20.8 8.8c0 5.5-8.8 10-8.8 10s-8.8-4.5-8.8-10A4.8 4.8 0 0 1 12 6.1a4.8 4.8 0 0 1 8.8 2.7Z" />
        <path d="M8 12h2l1.2-2.3 1.8 4.1 1.1-2H16" />
      </>
    ),
    diabetes: (
      <>
        <path d="M12 3c2.2 3.1 5.5 6.1 5.5 10.1A5.5 5.5 0 0 1 12 18.6a5.5 5.5 0 0 1-5.5-5.5C6.5 9.1 9.8 6.1 12 3Z" />
        <path d="M9.5 13.1h5M12 10.6v5" />
      </>
    ),
    lung: (
      <>
        <path d="M12 5v15" />
        <path d="M11.7 10.2c-2.4-2.8-4.2-4.4-5.7-4.4-1.4 0-2.2 1.4-2.2 3.1 0 3.9 1.5 8.5 5.2 8.5 1.5 0 2.7-1.2 2.7-2.8" />
        <path d="M12.3 10.2c2.4-2.8 4.2-4.4 5.7-4.4 1.4 0 2.2 1.4 2.2 3.1 0 3.9-1.5 8.5-5.2 8.5-1.5 0-2.7-1.2-2.7-2.8" />
      </>
    ),
    breast: (
      <>
        <circle cx="12" cy="12" r="7.5" />
        <path d="M12 8.5v7M8.5 12h7" />
      </>
    ),
    input: (
      <>
        <path d="M7 4.5h10v15H7z" />
        <path d="M9.5 8h5M9.5 11.5h5M9.5 15h3" />
      </>
    ),
    processing: (
      <>
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
        <circle cx="12" cy="12" r="4" />
      </>
    ),
    model: (
      <>
        <circle cx="12" cy="12" r="3" />
        <circle cx="5" cy="7" r="2" />
        <circle cx="19" cy="7" r="2" />
        <circle cx="5" cy="18" r="2" />
        <circle cx="19" cy="18" r="2" />
        <path d="M7 7.8 9.6 10M17 7.8 14.4 10M7 17.2 9.6 14M17 17.2 14.4 14" />
      </>
    ),
    prediction: (
      <>
        <path d="M4 17.5 9 12.5l3 2.5 7-8" />
        <path d="M15 7h4v4" />
      </>
    ),
    arrow: <path d="M5 12h13M13 6l6 6-6 6" />,
  };

  return <svg {...common}>{paths[type]}</svg>;
};

const conditions = [
  {
    icon: () => <Icon type="heart" />,
    title: "Heart Disease",
    description: "Identify patterns linked to cardiovascular risk.",
  },
  {
    icon: () => <Icon type="diabetes" />,
    title: "Diabetes",
    description: "Assess indicators associated with diabetes risk.",
  },
  {
    icon: () => <Icon type="lung" />,
    title: "Lung Cancer",
    description: "Analyze clinical inputs for lung cancer signals.",
  },
  {
    icon: () => <Icon type="breast" />,
    title: "Breast Cancer",
    description: "Surface model-based insights from patient data.",
  },
];

const steps = [
  {
    number: "01",
    icon: () => <Icon type="input" />,
    title: "Input",
    description: "Enter the relevant health and clinical data.",
  },
  {
    number: "02",
    icon: () => <Icon type="processing" />,
    title: "Processing",
    description: "NidaanAI prepares and interprets the submitted data.",
  },
  {
    number: "03",
    icon: () => <Icon type="model" />,
    title: "ML + DL",
    description: "Prediction models evaluate meaningful patterns.",
  },
  {
    number: "04",
    icon: () => <Icon type="prediction" />,
    title: "Prediction",
    description: "Receive a clear model-generated prediction to explore.",
  },
];

export default function AboutNidaanAI() {
  return (
    <section className="NidaanAI-about" aria-labelledby="NidaanAI-about-title">
      <div className="NidaanAI-shell">
        <div className="NidaanAI-about-grid">
          <div className="NidaanAI-intro">
            <span className="NidaanAI-eyebrow">ABOUT NidaanAI</span>

            <h2 id="NidaanAI-about-title">
              Smarter insights from
              <br />
              <span style={{ color: "#0077b6" }}>healthcare data.</span>
            </h2>

            <p className="NidaanAI-lead">
              NidaanAI brings machine learning and healthcare data together
              to make complex prediction models easier to explore, understand,
              and use.
            </p>

            <a className="NidaanAI-text-link" href="#prediction-modules">
              <span>Explore NidaanAI</span>
              <ArrowRight size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div className="NidaanAI-capabilities">
            <div className="NidaanAI-section-heading">
              <div>
                <span className="NidaanAI-mini-label">PREDICTION MODULES</span>
                <h3>What NidaanAI does</h3>
              </div>
              <span className="NidaanAI-heading-mark" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </div>

            <p className="NidaanAI-description">
              A focused prediction platform designed to translate healthcare
              inputs into useful model-based insights across multiple disease
              areas.
            </p>

            <div className="NidaanAI-condition-grid" id="prediction-modules">
              {conditions.map(({ icon: Icon, title, description }) => (
                <article className="NidaanAI-condition-card" key={title}>
                  <div className="NidaanAI-icon-box">
                    <Icon size={19} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                  <ArrowRight
                    className="NidaanAI-card-arrow"
                    size={16}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

    

      <div className="NidaanAI-shell NidaanAI-work-section">
        <div className="NidaanAI-work-heading">
          <span className="NidaanAI-eyebrow">THE PROCESS</span>
          <h2>How NidaanAI works</h2>
          <p>
            A straightforward path from healthcare data to a model-generated
            prediction.
          </p>
        </div>

       <div className="NidaanAI-steps">
  {steps.map(({ number, title, description }, index) => (
    <React.Fragment key={number}>
      <article className="NidaanAI-step">
        <span className="NidaanAI-step-number">{number}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </article>

      {index < steps.length - 1 && (
        <div className="NidaanAI-step-arrow" aria-hidden="true">
          <ArrowRight size={20} strokeWidth={2} />
        </div>
      )}
    </React.Fragment>
  ))}
</div>
      </div>

      <div className="NidaanAI-shell NidaanAI-cta-wrap">
        <div className="NidaanAI-cta">
          <div>
            <span className="NidaanAI-cta-label">NidaanAI</span>
            <h2>Understand your health data better.</h2>
            <p>Explore NidaanAI&apos;s prediction modules.</p>
          </div>

          <a className="NidaanAI-cta-button" href="predictors">
            Explore Predictions
            <ArrowRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>

      <style>{`
        .NidaanAI-about {
          --px-navy: #03045e;
          --px-highlight: #0077b6;
          --px-primary: #00b4d8;
          --px-hover: #90e0ef;
          --px-bg: #caf0f8;
          --px-soft: #f5fcfe;
          --px-text: #16213a;
          --px-muted: #617087;
          --px-border: rgba(3, 4, 94, 0.10);
          background: #ffffff;
          color: var(--px-text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          overflow: hidden;
        }

        .NidaanAI-shell {
          width: 100%;
          margin: 0 auto;
          
        }
 
        .NidaanAI-about-grid {
        margin-top: 50px ;
          padding:70px;
          width: 100%;
          display: grid;
          grid-template-columns: minmax(280px, 0.72fr) minmax(0, 1fr);
          gap: clamp(52px, 8vw, 112px);
          align-items: center;
          
          background: #edf4ff;
        }

        .NidaanAI-eyebrow,
        .NidaanAI-mini-label,
        .NidaanAI-cta-label {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--px-highlight);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.20em;
          line-height: 1;
          text-transform: uppercase;
        }

        .NidaanAI-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--px-primary);
        }

        .NidaanAI-intro h2,
        .NidaanAI-work-heading h2,
        .NidaanAI-cta h2 {
          color: var(--px-navy);
          font-weight: 700;
          letter-spacing: -0.045em;
        }

        .NidaanAI-intro h2 {
          margin: 19px 0 22px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(40px, 5vw, 62px);
          line-height: 1.04;
        }

        .NidaanAI-lead {
          max-width: 470px;
          margin: 0;
          color: var(--px-muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .NidaanAI-text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 29px;
          padding-bottom: 7px;
          border-bottom: 1px solid var(--px-primary);
          color: var(--px-navy);
          font-size: 13px;
          font-weight: 750;
          text-decoration: none;
          transition: gap 180ms ease, color 180ms ease;
        }

        .NidaanAI-text-link:hover {
          gap: 12px;
          color: var(--px-highlight);
        }

        .NidaanAI-capabilities {
          min-width: 0;
        }

        .NidaanAI-section-heading {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
        }

        .NidaanAI-section-heading h3 {
          margin: 10px 0 0;
          color: var(--px-navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(30px, 3.3vw, 42px);
          letter-spacing: -0.04em;
          line-height: 1.08;
        }

        .NidaanAI-heading-mark {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding-bottom: 5px;
        }

        .NidaanAI-heading-mark span {
          display: block;
          width: 4px;
          border-radius: 999px;
          background: var(--px-primary);
        }

        .NidaanAI-heading-mark span:nth-child(1) { height: 10px; opacity: .45; }
        .NidaanAI-heading-mark span:nth-child(2) { height: 18px; opacity: .72; }
        .NidaanAI-heading-mark span:nth-child(3) { height: 27px; }

        .NidaanAI-description {
          max-width: 650px;
          margin: 17px 0 25px;
          color: var(--px-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .NidaanAI-condition-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .NidaanAI-condition-card {
          position: relative;
          display: grid;
          grid-template-columns: auto minmax(0, 1fr) auto;
          align-items: center;
          gap: 13px;
          min-height: 96px;
          padding: 17px 16px;
          border: 1px solid var(--px-border);
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 8px 28px rgba(3, 4, 94, 0.035);
          transition: transform 180ms ease, border-color 180ms ease, box-shadow 180ms ease;
        }

        .NidaanAI-condition-card:hover {
          transform: translateY(-2px);
          border-color: rgba(0, 180, 216, .35);
          box-shadow: 0 14px 34px rgba(3, 4, 94, .07);
        }

        .NidaanAI-icon-box {
          display: grid;
          width: 39px;
          height: 39px;
          place-items: center;
          border-radius: 10px;
          color: var(--px-highlight);
          background: var(--px-soft);
        }

        .NidaanAI-condition-card h4 {
          margin: 0 0 4px;
          color: var(--px-navy);
          font-size: 14px;
          font-weight: 750;
        }

        .NidaanAI-condition-card p {
          margin: 0;
          color: var(--px-muted);
          font-size: 11.5px;
          line-height: 1.5;
        }

        .NidaanAI-card-arrow {
          color: #a8b5c5;
          transition: transform 180ms ease, color 180ms ease;
        }

        .NidaanAI-condition-card:hover .NidaanAI-card-arrow {
          color: var(--px-primary);
          transform: translateX(2px);
        }

       

      

        .NidaanAI-line {
          width: 30px;
          height: 1px;
          background: var(--px-primary);
          opacity: .65;
        }

        .NidaanAI-work-section {
          padding: clamp(88px, 10vw, 120px) 0 86px;
          width: 80%;
        }

        .NidaanAI-work-heading {
          text-align: center;
          max-width: 650px;
          margin: 0 auto 52px;
        }

        .NidaanAI-work-heading h2 {
          margin: 14px 0 12px;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(34px, 4.2vw, 50px);
          line-height: 1.08;
        }

        .NidaanAI-work-heading p {
          margin: 0;
          color: var(--px-muted);
          font-size: 14px;
          line-height: 1.7;
        }

        .NidaanAI-steps {
          position: relative;
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 50px;
        }

                .NidaanAI-steps {
            display: grid;
            grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
            align-items: center;
            gap: 10px;
          }

          .NidaanAI-step {
            position: relative;
            z-index: 1;
          }

          .NidaanAI-step-arrow {
            display: grid;
            place-items: center;
            color: #00b4d8;
          }

          .NidaanAI-step-arrow svg {
            transition: .2s ease;
          }

          .NidaanAI-step:hover + .NidaanAI-step-arrow svg {
            color: #0077b6;
            transform: translateX(3px);
          }

        .NidaanAI-step {
          position: relative;
          z-index: 1;
          height: 150px;
          padding: 20px 20px 21px;
          border: 1px solid var(--px-border);
          border-radius: 13px;
          background: #fff;
        }

        .NidaanAI-step-number {
          display: block;
          margin-bottom: 17px;
          color: #a6b3c3;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .12em;
        }

       

        .NidaanAI-step h3 {
          margin: 0 0 7px;
          color: var(--px-navy);
          font-size: 15px;
          font-weight: 750;
        }

        .NidaanAI-step p {
          margin: 0;
          color: var(--px-muted);
          font-size: 12px;
          line-height: 1.6;
        }

        .NidaanAI-cta-wrap {
          padding-bottom: clamp(70px, 8vw, 100px);
        }

        .NidaanAI-cta {
         margin: 0 10%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 31px 34px;
          border-radius: 18px;
          background: #0077b6;
         
        }

        .NidaanAI-cta-label {
          color: var(--px-hover);
          font-size: 9px;
         
        }

        .NidaanAI-cta h2 {
          margin: 9px 0 4px;
          color: #fff;
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(23px, 3vw, 32px);
          letter-spacing: -0.025em;
        }

        .NidaanAI-cta p {
          margin: 0;
          color: rgba(255,255,255,.62);
          font-size: 12.5px;
        }

        .NidaanAI-cta-button {
          flex: 0 0 auto;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          min-height: 43px;
          padding: 0 17px;
          border-radius: 8px;
          background: #fff;
          color: var(--px-navy);
          font-size: 14px;
          font-weight: 800;
          text-decoration: none;
          transition: transform 180ms ease, background 180ms ease;
        }

        .NidaanAI-cta-button:hover {
          transform: translateY(-1px);
          background: var(--px-hover);
        }

        @media (max-width: 900px) {
          .NidaanAI-about-grid {
            grid-template-columns: 1fr;
            gap: 58px;
          }

          .NidaanAI-intro h2 {
            max-width: 650px;
          }

          .NidaanAI-steps {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .NidaanAI-connector {
            display: none;
          }
        }

        @media (max-width: 640px) {
          .NidaanAI-shell {
            width: min(100% - 32px, 1180px);
          }

          .NidaanAI-about-grid {
            padding: 68px 0 70px;
            gap: 45px;
          }

          .NidaanAI-intro h2 {
            font-size: clamp(36px, 11vw, 48px);
          }

          .NidaanAI-section-heading {
            align-items: flex-start;
          }

          .NidaanAI-heading-mark {
            display: none;
          }

          .NidaanAI-condition-grid {
            grid-template-columns: 1fr;
          }

          .NidaanAI-condition-card {
            min-height: 87px;
          }

          .NidaanAI-statement {
            min-height: 82px;
            gap: 12px;
          }

          .NidaanAI-line {
            width: 18px;
          }

          .NidaanAI-work-section {
            padding: 70px 0;
          }

          .NidaanAI-work-heading {
            margin-bottom: 34px;
          }

          .NidaanAI-steps {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .NidaanAI-step {
            min-height: auto;
            padding: 18px;
          }

          // .NidaanAI-step-icon {
          //   margin-bottom: 14px;
          // }

          .NidaanAI-cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 27px 24px;
            border-radius: 15px;
          }

          .NidaanAI-cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .NidaanAI-condition-card,
          .NidaanAI-text-link,
          .NidaanAI-card-arrow,
          .NidaanAI-cta-button {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
}
