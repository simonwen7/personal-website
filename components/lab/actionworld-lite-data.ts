/**
 * ActionWorld Lite — facts from the public repository docs. M4 TEST, M6
 * VALIDATION, and M8 Production acceptance are separate evidence populations.
 */

export const actionworldLiteDemoUrl = "https://actionworld-lite.vercel.app";

export const actionworldLiteGithub =
  "https://github.com/simonwen7/actionworld-lite";

export const actionworldLiteHero = {
  eyebrow: "01 / ActionWorld Lite",
  techLine: "PyTorch · MuJoCo · FastAPI · Docker · Vercel",
  title: "ActionWorld Lite",
  headline:
    "Predict physical interactions from real visual observations—and compare every action with a physics-based reference.",
  supporting:
    "ActionWorld Lite is a lightweight, action-conditioned visual world model for a constrained PushT-style environment. A frozen neural predictor estimates the object's next pose and contact state from consecutive RGB frames and a pusher action. A contact-gated residual refines XY motion, while MuJoCo executes the corresponding action to provide an independently simulated physical reference.",
  scope:
    "This is a scene-specific, one-step research demonstrator. It does not generate future RGB frames, control a physical robot, or establish generalization to unseen environments.",
};

export const actionworldLiteProblem = {
  eyebrow: "01 — The Challenge",
  title: "Predicting Physical Motion from Visual Observations",
  description:
    "The task is to estimate how an object will move after a commanded action, using only camera observations of the scene and that action. The simulator's hidden physics state is never an inference input; it is revealed afterward for evaluation.",
  considerations: [
    "Visual observations contain incomplete information about physical state.",
    "Contact and non-contact actions exhibit different motion behavior.",
    "A prediction must be made before the matching physics step.",
    "Meaningful evaluation requires an explicit separation between model input and ground truth.",
  ],
};

export const actionworldLiteArchitecture = {
  eyebrow: "02 — How It Works",
  title: "From User Actions to Physics-Based Comparison",
  description:
    "The browser sends a bounded action and a signed session token to FastAPI. The server reconstructs the physical scene, predicts the next state with the core prediction model (IC-01) and the motion correction layer (M6), advances the MuJoCo physical simulation by the same action, and returns both the prediction and the physical outcome.",
  flow: [
    "Browser action",
    "FastAPI validation",
    "AI prediction",
    "Motion correction",
    "MuJoCo physics",
    "Predicted vs actual",
  ],
  notes: [
    {
      label: "Model input",
      detail:
        "Two genuine 64 × 64 RGB observations feed the visual model, together with the commanded action.",
    },
    {
      label: "One action",
      detail:
        "Each accepted action produces one model inference and a 0.05-second MuJoCo control step.",
    },
    {
      label: "Physics",
      detail:
        "MuJoCo performs ten internal physics substeps per action and renders the next scene image.",
    },
    {
      label: "Session state",
      detail:
        "A signed browser-carried token preserves the integration state and observation history between requests.",
    },
    {
      label: "Session limits",
      detail: "Sessions are limited to 64 scored actions and 15 minutes.",
    },
    {
      label: "Runtime",
      detail: "The server runs CPU-only inference.",
    },
  ],
  tokenNote:
    "The token's HMAC signature detects tampering. It does not make a token single-use, so a still-valid token can be replayed until it expires.",
};

export const actionworldLiteModel = {
  eyebrow: "03 — AI Prediction",
  title: "Predicting Position, Rotation, and Contact from Images",
  description:
    "IC-01 is the core visual prediction model. It uses two consecutive RGB observations and a pusher action to estimate the object's next position, rotation, and contact state. It combines frozen learned visual dynamics, a yaw specialist, fixed visual-to-world calibration, and a contact-aware geometric gate. It predicts physical state, not next-frame RGB images.",
  points: [
    "Frozen V0.3 action-conditioned dynamics model.",
    "Frozen V0.4 visual yaw specialist.",
    "Two consecutive RGB images are assembled into a six-channel input.",
    "The model estimates object pose, displacement, and next-step contact.",
    "Contact prediction gates XY translation when predicted contact is absent.",
    "Ground-truth simulator pose and future RGB are not model inputs.",
  ],
  limitation:
    "IC-01 is a hybrid neural and geometric predictor specialized for the accepted PushT scene—not a general-purpose end-to-end physical foundation model.",
};

export const actionworldLiteResidual = {
  eyebrow: "04 — Motion Correction",
  title: "Refining Motion Predictions When Contact Is Expected",
  description:
    "M6 is a contact-aware motion correction layer that adjusts the core model's predicted XY displacement when contact is expected. It does not change the original contact or rotation predictions. The correction is a small ridge-regression residual, selected and fitted on TRAIN data only.",
  points: [
    "TRAIN-only residual fitting and parameter selection.",
    "IC-01 stays frozen; its M4 checkpoints are not retrained.",
    "Maximum correction magnitude of 4 mm per action.",
    "Exactly zero correction when contact is not predicted.",
    "M6 changes XY displacement only; yaw and contact predictions remain IC-01's outputs.",
  ],
  note: "M6 is a bounded correction on IC-01's output, not a replacement simulator or a new end-to-end model. It does not reduce prediction error on every action.",
};

export const actionworldLiteEvaluation = {
  eyebrow: "05 — Research Results",
  title: "Evaluating Prediction Accuracy and Model Limitations",
  description:
    "Motion error is the distance between the predicted and actual XY displacement. The one-time held-out TEST of the core model (M4) is reported separately from the later VALIDATION experiment for the motion correction layer (M6) and from the live deployment checks (M8). Each result is tied to a specific evidence population.",
  blocks: [
    {
      label: "M4 — Held-out TEST",
      population: "IC-01 only",
      items: [
        "1,701 one-step windows",
        "IC-01 mean motion error: 0.168006 cm",
        "IC-01 mean next-XY error: 0.339025 cm",
        "Next-contact F1: 0.958378",
        "TEST was evaluated once and was never rerun for M6",
      ],
    },
    {
      label: "M6 — VALIDATION",
      population: "IC-01 vs M6",
      items: [
        "1,701 windows",
        "IC-01 mean motion error: 0.156625 cm",
        "M6 mean motion error: 0.135983 cm",
        "Approximately 13.18% lower mean motion error",
        "This is a one-pass VALIDATION result, not a new independent TEST result",
      ],
    },
  ],
  regressions: {
    label: "Important limitations",
    items: [
      "Static error increased from 0.010469 cm to 0.016896 cm.",
      "No-contact error increased from 0.011341 cm to 0.012544 cm.",
      "Some individual live action sequences also performed worse with M6.",
    ],
  },
  separationNote:
    "TEST and VALIDATION use different episodes, so their figures are not one comparative experiment. A lower average VALIDATION error does not mean every individual prediction or every subset improves.",
};

export const actionworldLiteDemo = {
  eyebrow: "06 — Live Demo",
  title: "Explore the Interactive Physics Simulation",
  description:
    "The publicly deployed FastAPI application lets a visitor reset a scene and apply bounded pusher movements. Each action displays a real MuJoCo image together with IC-01 and M6 predictions and their errors against the simulated physical state.",
  interactions: [
    "Reset the simulated scene.",
    "Select a 5, 10, or 20 mm displacement.",
    "Move up, down, left, or right.",
    "Inspect predicted XY positions and contact.",
    "Compare model predictions with actual MuJoCo results.",
  ],
  clarifications: [
    "PyTorch inference runs on the server's CPU, not inside the browser.",
    "Images are produced by MuJoCo, not synthesized by the neural model.",
    "The demo does not use prerecorded response tables.",
    "Private trained checkpoints and fitted runtime artifacts are not distributed in the public Git repository.",
  ],
  shots: [
    {
      src: "/media/software/actionworld-lite/live-simulation.png",
      alt: "ActionWorld Lite web demo after Reset, with the MuJoCo render of the orange T-shaped object, blue pusher and green target, the XY world-coordinate view, and the distance and direction controls.",
      caption:
        "Live M8 web interface after Reset, showing the MuJoCo-rendered scene, the physical-state XY view, and the interactive pusher controls. No action has been scored yet.",
      width: 1324,
      height: 967,
    },
    {
      src: "/media/software/actionworld-lite/prediction-comparison.png",
      alt: "ActionWorld Lite web demo at step 10 after pushes to the right, showing predicted and actual contact, a 3.921 mm M6 correction, IC-01 next-XY error 1.0715 cm and M6 next-XY error 1.1320 cm.",
      caption:
        "One-step IC-01 and M6 predictions compared with the MuJoCo physical reference after ten 10 mm pushes to the right, at the first step with actual contact. In this state, M6 applied a 3.921 mm correction and its next-XY error (1.1320 cm) was higher than IC-01's (1.0715 cm). Values describe this individual demo state, not aggregate benchmark performance.",
      width: 1324,
      height: 967,
    },
  ],
};

export const actionworldLiteProof = {
  eyebrow: "07 — Testing & Limitations",
  title: "Engineering Validation and Known Limitations",
  description:
    "The system runs the frozen models and real MuJoCo physics in a CPU-only Vercel Container. The original deployment record documents model integrity checks, API validation, browser behavior, session handling and platform-specific differences.",
  evidence: [
    "479/479 general Production acceptance assertions passed.",
    "416/416 contact-run acceptance assertions passed.",
    "Recorded median action response latency: 1.05 seconds.",
    "Containerized Python, PyTorch, MuJoCo, FastAPI and OSMesa.",
    "Frozen runtime artifacts are hash-verified and remain excluded from Git.",
    "Model and physics failures do not return fabricated predictions.",
  ],
  countNote:
    "These acceptance counts are deployment checks of the running system. They are engineering assertions, not machine learning accuracy metrics or independent benchmark samples.",
  status:
    "The M8 Production deployment succeeded, but final engineering acceptance remains CONDITIONAL. Direct x86_64 restore-versus-continuous contact parity was not measured, direct Vercel peak-memory instrumentation was unavailable, and the initial deployment skipped the Preview stage.",
  limits: [
    "Fixed simulated PushT scene and camera.",
    "No real-robot deployment.",
    "No autonomous long-horizon learned rollout.",
    "No next-RGB synthesis.",
    "No guarantee of performance on unseen environments.",
    "No public redistribution of private model checkpoints.",
  ],
};
