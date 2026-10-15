/** QuantForge — facts taken from the project source. No market-result claims. */

export const quantforgeDemoUrl = "https://quantforge-web-ashy.vercel.app/";

export const quantforgeGithub = "https://github.com/simonwen7/QuantForge";

export const quantforgeHero = {
  eyebrow: "04 / QuantForge",
  techLine: "Python · Event-Driven Simulation · Quant Research",
  title: "QuantForge",
  headline: "Backtests that can be replayed, hashed, and reproduced.",
  supporting:
    "A deterministic Python event-driven research engine with causal execution rules, Decimal accounting, and reproducible synthetic scenarios, served through FastAPI to an interactive Next.js terminal.",
} as const;

export const quantforgeProblem = {
  eyebrow: "01 — The Research Problem",
  title: "The Research Problem",
  core: "A chart of a backtest is not evidence unless the run can be replayed, the timing can be audited, and the ledger does not drift.",
  tensions: [
    { left: "A signal", right: "Information it was not allowed to see" },
    { left: "One interesting run", right: "A run someone else can rebuild" },
    { left: "Floating-point cash", right: "A ledger that stays on its quantum" },
    { left: "A summary metric", right: "The event that produced it" },
  ],
} as const;

export const quantforgeArchitecture = {
  eyebrow: "02 — Architecture",
  title: "Architecture",
  description:
    "The terminal never talks to an exchange. It asks a same-origin proxy for an allow-listed route, and FastAPI runs the engine.",
  flow: [
    "Next.js terminal",
    "Allow-listed API proxy",
    "FastAPI",
    "Backtest engine",
    "Analytics",
  ],
  routes: [
    { method: "GET", path: "/api/health", purpose: "Service status" },
    { method: "GET", path: "/api/config", purpose: "Bounds, scenarios, strategies" },
    { method: "POST", path: "/api/backtest", purpose: "One run, with its event trace" },
    { method: "POST", path: "/api/compare", purpose: "Strategies across cost presets" },
    { method: "GET", path: "/api/research-block", purpose: "Empirical-study gate" },
  ],
} as const;

export const quantforgeCausality = {
  eyebrow: "03 — Causal Event Loop",
  title: "Causal Event Loop",
  description:
    "Each timestamp is handled in a fixed phase order. A signal cannot trade on the bar that produced it.",
  phases: [
    { name: "Bar open", detail: "Only the open is revealed." },
    { name: "Fill due", detail: "Fill, or expire, at this open." },
    { name: "Bar complete", detail: "The prior bar's OHLCV is released." },
    { name: "Signal", detail: "The strategy decision becomes available." },
    { name: "Submit", detail: "Place, reject, or cancel one order." },
    { name: "Valuation", detail: "Mark equity at the observed price." },
  ],
  rules: [
    "A signal is available one hour after its decision bar opens.",
    "A submitted order is due one bar later, and fills at that bar's open.",
    "If that open is missing, the order expires instead of sliding forward.",
    "Strategies read only observations up to the decision bar.",
  ],
} as const;

export const quantforgeDeterminism = {
  eyebrow: "04 — Deterministic Scenarios",
  title: "Deterministic Scenarios",
  description:
    "The terminal's prices are generated. The same seed rebuilds the same bars, and the run's identity does not depend on the wall clock.",
  scenarios: ["uptrend", "downtrend", "sideways", "shock", "gap"],
  seedNote:
    "The seed is an integer offset into a fixed wave table. The generator does not draw random numbers.",
  identities: [
    { name: "Scenario", detail: "Generator, seed, length, name, and clock." },
    { name: "Run", detail: "Assumptions, signals, and the full bar series." },
    { name: "Order / fill", detail: "Each order and fill has its own identity." },
    { name: "Experiment", detail: "Binds the run identities for the terminal session." },
  ],
  hashNote: "Identities are SHA-256 hashes of canonical JSON.",
} as const;

export const quantforgeLedger = {
  eyebrow: "05 — Decimal Ledger",
  title: "Decimal Ledger",
  description:
    "Cash, quantity, fees, and prices are Decimal values. Risk ratios are the exception: volatility, Sharpe, and Sortino are computed in binary floating point and can be left undefined when the hourly grid is incomplete.",
  rules: [
    "Accounting context uses 50 digits of precision.",
    "Cash and quantity sit on a 0.00000001 quantum.",
    "Buy quantity rounds down. Buy debit and fees round up.",
    "Sell proceeds round down after the fee is rounded up.",
    "Cash and quantity cannot go negative.",
    "Marked equity equals cash plus quantity times the mark price.",
    "The ledger reconciles with fills at the end of the run.",
  ],
  bookNote:
    "The book is long or flat, and all-in. It does not short and it does not use leverage. The default starting cash is 10,000.",
  metrics: [
    "Total return",
    "Maximum drawdown",
    "Annualized volatility",
    "Sharpe ratio",
    "Sortino ratio",
  ],
} as const;

export const quantforgeTerminal = {
  eyebrow: "06 — Research Terminal",
  title: "Research Terminal",
  description:
    "Six workspaces sit on the same run. The screenshots are from the deployed terminal, on a synthetic uptrend scenario. The numbers in them belong to that generated path.",
  workspaces: [
    { name: "Market", detail: "Candles, volume, and fill markers." },
    { name: "Lab", detail: "Strategy, scenario, seed, and cost preset." },
    { name: "Performance", detail: "Equity against cash and buy-and-hold, plus drawdown." },
    { name: "Replay", detail: "Step through the engine's own events." },
    { name: "Compare", detail: "Both strategies across cost presets. Nothing is ranked." },
    { name: "System", detail: "Architecture, causal timing, and the research gate." },
  ],
  shots: [
    {
      src: "/media/software/quantforge/market.png",
      alt: "QuantForge Market workspace showing synthetic hourly candles, a buy marker, and a SYNTHETIC badge.",
      caption:
        "Market. Synthetic hourly candles for an uptrend scenario. The badge and the side panel say this is not BTCUSDT evidence.",
      width: 1440,
      height: 1000,
    },
    {
      src: "/media/software/quantforge/replay.png",
      alt: "QuantForge Replay workspace on the first bar-open event, with play controls and an event detail panel.",
      caption:
        "Replay. The stepper walks the engine event list. This frame is the first bar open.",
      width: 1440,
      height: 1000,
    },
    {
      src: "/media/software/quantforge/performance.png",
      alt: "QuantForge Performance workspace comparing strategy, cash, and buy-and-hold equity on a synthetic scenario, with a drawdown panel.",
      caption:
        "Performance. Equity and drawdown for that same synthetic path, against cash and buy-and-hold. Not a historical result.",
      width: 1440,
      height: 1000,
    },
  ],
} as const;

export const quantforgeProof = {
  eyebrow: "07 — Engineering Proof",
  title: "Engineering Proof",
  checks: [
    {
      label: "Causal timing",
      detail: "Tests reject a fill that uses a future close, and a signal that acts before it is available.",
    },
    {
      label: "Replay identity",
      detail: "The same inputs rebuild the same run identity. Changing the fee changes it.",
    },
    {
      label: "Byte-identical demo",
      detail: "Continuous integration builds the wheel, runs the demo twice, and compares the outputs.",
    },
    {
      label: "Terminal checks",
      detail: "The web job typechecks, lints, tests, and builds the Next.js terminal.",
    },
  ],
  countNote:
    "A numeric pytest total is omitted. The repository's published totals do not currently agree, so this page does not pick one.",
  limits: [
    "The deployed terminal runs synthetic scenarios. It is not a historical BTCUSDT study.",
    "No return, Sharpe, or drawdown on this page is a market result.",
    "The engine does not place live orders.",
    "Archive-ingestion code exists and is held behind a research gate. No real-data validation is claimed.",
  ],
} as const;
