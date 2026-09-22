import React from "react";

const models = [
  ["01", "Heart Disease", "Cardiac risk assessment", "bg-accent"],
  ["02", "Diabetes", "Glucose & metabolic analysis", "bg-highlight"],
  ["03", "Lung Cancer", "Pulmonary risk analysis", "bg-primary"],
  ["04", "Breast Cancer", "Mammographic pattern analysis", "bg-highlight"],
];

const process = [
  ["01", "Health data", "Vitals, lab values and structured medical report inputs."],
  ["02", "Processing", "Relevant features are prepared for prediction."],
  ["03", "Models", "ML and DL models analyze disease-specific patterns."],
  ["04", "Result", "The processed output is presented clearly to the user."],
];

export default function AboutSection() {
  return (
    <section className="w-full overflow-hidden bg-bg text-accent">
      {/* HERO */}
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-10 lg:px-14 lg:pb-28 lg:pt-20">
        <div className="grid items-end gap-12 lg:grid-cols-[1.7fr_0.7fr]">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-12 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-highlight">
                About Predictix
              </span>
            </div>

            <h1 className="max-w-5xl text-5xl font-bold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Healthcare data.
              <br />
              <span className="text-highlight">Meaningful predictions.</span>
            </h1>
          </div>

          <div className="max-w-sm lg:mb-2">
            <p className="text-base leading-7 text-accent/65 sm:text-lg">
              Predictix brings machine learning and deep learning into a
              focused healthcare experience for disease-risk prediction.
            </p>
          </div>
        </div>

        {/* MODELS */}
        <div className="mt-20 border-t border-accent/15">
          <div className="flex items-center justify-between py-5">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-highlight">
              Prediction areas
            </span>
            <span className="text-xs font-semibold text-accent/35">
              04 models
            </span>
          </div>

          <div className="divide-y divide-accent/15">
            {models.map(([number, title, description, dot]) => (
              <div
                key={title}
                className="group flex flex-col gap-3 py-6 transition-all duration-200 sm:flex-row sm:items-center sm:gap-8 lg:py-7"
              >
                <span className="w-10 shrink-0 text-xs font-bold tracking-widest text-accent/30">
                  {number}
                </span>

                <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${dot}`} />

                <h2 className="min-w-0 flex-1 text-2xl font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-1 sm:text-3xl">
                  {title}
                </h2>

                <p className="text-sm text-accent/55 sm:w-64 lg:w-72">
                  {description}
                </p>

                <span className="hidden text-xl text-accent/25 transition-transform duration-200 group-hover:translate-x-1 sm:block">
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PROCESS */}
      <div className="bg-accent text-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:px-14 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-hover-bg">
                  How it works
                </span>
              </div>

              <h2 className="mt-6 max-w-md text-4xl font-bold leading-tight tracking-[-0.03em] sm:text-5xl">
                From health data to a prediction.
              </h2>

              <p className="mt-6 max-w-sm text-sm leading-6 text-white/55">
                A simple flow connects user-provided health information with
                the prediction models behind Predictix.
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-[17px] top-4 hidden h-[calc(100%-32px)] w-px bg-white/15 sm:block" />

              <div className="space-y-9">
                {process.map(([number, title, description]) => (
                  <div key={number} className="relative flex gap-6">
                    <div className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold">
                      {number}
                    </div>

                    <div className="pt-0.5">
                      <h3 className="text-lg font-semibold">{title}</h3>
                      <p className="mt-1 max-w-xl text-sm leading-6 text-white/50">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CLOSING STATEMENT */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-14 lg:py-20">
        <div className="flex flex-col gap-7 border-t border-accent/15 pt-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-[-0.03em] sm:text-4xl">
            Built to make complex health data easier to understand.
          </h2>

          <p className="max-w-xs text-sm leading-6 text-accent/55">
            Predictix combines structured health inputs, data processing, and
            disease-specific ML/DL models in one experience.
          </p>
        </div>
      </div>
    </section>
  );
}
