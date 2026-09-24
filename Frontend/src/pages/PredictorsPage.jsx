import React, { useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Card from "../components/Card";
import heartImage from "../assets/heart.png";
import lungImage from "../assets/lung.png";
import diabetesImage from "../assets/diabetes.png";
import breastImage from "../assets/breast.png";
import { UserContext } from "../context/UserContext";
import "../App.css";

function PredictorsPage() {
  const { userInfo } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    if (userInfo) navigate(path);
    else {
      toast.info("Please log in to access this predictor.");
      setTimeout(() => navigate("/login"), 2000);
    }
  };

  const predictors = [
    {
      image: heartImage,
      title: "Heart Disease",
      desc: "AI-assisted prediction for cardiovascular risk.",
      path: "/predictors/heart",
    },
    {
      image: lungImage,
      title: "Lung Cancer",
      desc: "AI-driven insights for lung cancer prediction.",
      path: "/predictors/lung",
    },
    {
      image: breastImage,
      title: "Breast Cancer",
      desc: "Model-based insights for early risk prediction.",
      path: "/predictors/breast",
    },
    {
      image: diabetesImage,
      title: "Diabetes",
      desc: "Predictive analysis for diabetes risk indicators.",
      path: "/predictors/diabetes",
    },
  ];

  return (
    <section className="NidaanAI-predictors">
      <ToastContainer />

      <div className="NidaanAI-predictors-inner">
        <div className="NidaanAI-predictors-heading">
          <span>PREDICTION MODULES</span>

          <h1>
            Explore your health
            <br />
            <em>prediction modules.</em>
          </h1>

          <p>
            Explore AI-assisted prediction models designed to identify
            patterns across major disease areas.
          </p>
        </div>

        <div className="NidaanAI-predictors-divider">
          <i />
          <p>Choose a prediction model to begin.</p>
          <i />
        </div>

        <div className="NidaanAI-predictors-grid">
          {predictors.map((item, index) => (
            <button
              key={item.title}
              className="NidaanAI-predictor"
              onClick={() => handleLinkClick(item.path)}
            >
              <div className="NidaanAI-predictor-img">
                <img src={item.image} alt={item.title} />
                <small>0{index + 1}</small>
                
              </div>

              <div className="NidaanAI-predictor-body">
                <label>PREDICTION MODEL</label>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <strong>Explore →</strong>
              </div>
            </button>
          ))}
        </div>
      </div>

      <style>{`
        .NidaanAI-predictors {
          --navy: #03045e;
          --blue: #0077b6;
          --cyan: #00b4d8;
          --soft: #f5fcfe;
          --muted: #657389;
          background: #fff;
          font-family: Inter, sans-serif;
        }

        .NidaanAI-predictors-inner {
          width: min(1120px, calc(100% - 40px));
          margin: auto;
          padding: 75px 0;
        }

        .NidaanAI-predictors-heading span {
          color: var(--blue);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .2em;
        }

        .NidaanAI-predictors-heading span::before {
          content: "";
          display: inline-block;
          width: 22px;
          height: 1px;
          margin-right: 9px;
          vertical-align: middle;
          background: var(--cyan);
        }

        .NidaanAI-predictors-heading h1 {
          margin: 16px 0 14px;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: clamp(38px, 5vw, 58px);
          line-height: 1.04;
          letter-spacing: -.045em;
        }

        .NidaanAI-predictors-heading em {
          color: var(--blue);
          font-style: normal;
        }

        .NidaanAI-predictors-heading p {
          max-width: 600px;
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.7;
        }

        .NidaanAI-predictors-divider {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 38px 0 28px;
          padding: 18px;
          background: var(--soft);
          border-block: 1px solid rgba(0,180,216,.08);
        }

        .NidaanAI-predictors-divider p {
          margin: 0;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 17px;
        }

        .NidaanAI-predictors-divider i {
          width: 22px;
          height: 1px;
          background: var(--cyan);
        }

        .NidaanAI-predictors-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .NidaanAI-predictor {
          padding: 0;
          border: 1px solid rgba(3,4,94,.09);
          border-radius: 13px;
          background: #fff;
          overflow: hidden;
          text-align: left;
          cursor: pointer;
          box-shadow: 0 7px 25px rgba(3,4,94,.035);
          transition: .2s ease;
          font: inherit;
        }

        .NidaanAI-predictor:hover {
          transform: translateY(-3px);
          border-color: rgba(0,180,216,.35);
          box-shadow: 0 14px 32px rgba(3,4,94,.08);
        }

        .NidaanAI-predictor-img {
          position: relative;
          height: 155px;
          overflow: hidden;
        }

        .NidaanAI-predictor-img img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform .4s ease;
        }

        .NidaanAI-predictor:hover img {
          transform: scale(1.035);
        }

        .NidaanAI-predictor-img::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 45%,
            rgba(3,4,94,.18)
          );
        }

        .NidaanAI-predictor-img small {
          position: absolute;
          z-index: 2;
          top: 12px;
          left: 12px;
          padding: 6px 9px;
          border-radius: 6px;
          background: rgba(255,255,255,.9);
          color: var(--navy);
          font-size: 9px;
          font-weight: 800;
        }

        .NidaanAI-predictor-img b {
          position: absolute;
          z-index: 2;
          right: 12px;
          bottom: 12px;
          display: grid;
          width: 31px;
          height: 31px;
          place-items: center;
          border-radius: 50%;
          background: #fff;
          color: var(--navy);
          font-size: 15px;
        }

        .NidaanAI-predictor-body {
          padding: 17px 18px 18px;
        }

        .NidaanAI-predictor-body label {
          color: var(--blue);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .16em;
        }

        .NidaanAI-predictor-body h2 {
          margin: 7px 0 5px;
          color: var(--navy);
          font-family: "Playfair Display", Georgia, serif;
          font-size: 22px;
        }

        .NidaanAI-predictor-body p {
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.55;
        }

        .NidaanAI-predictor-body strong {
          display: inline-block;
          margin-top: 11px;
          padding-bottom: 4px;
          border-bottom: 1px solid var(--cyan);
          color: var(--navy);
          font-size: 10px;
        }

        @media (max-width: 650px) {
          .NidaanAI-predictors-inner {
            width: min(100% - 30px, 1120px);
            padding: 58px 0;
          }

          .NidaanAI-predictors-grid {
            grid-template-columns: 1fr;
          }

          .NidaanAI-predictor-img {
            height: 150px;
          }

          .NidaanAI-predictors-heading h1 {
            font-size: 39px;
          }
        }
      `}</style>
    </section>
  );
}

export default PredictorsPage;





