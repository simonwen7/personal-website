/** Verified StreamForge facts. The public site is a browser-local simulation. */

export const streamforgeDemoUrl =
  "https://stream-forge-eight-woad.vercel.app/";

export const streamforgeGithub = "https://github.com/simonwen7/StreamForge";

export const streamforgeHero = {
  eyebrow: "02 / StreamForge",
  techLine: "Java 21 · Spring Boot · Kafka · PostgreSQL",
  title: "StreamForge",
  headline:
    "An accepted reading is committed before Kafka publishes it, and a second delivery does not apply twice.",
  supporting:
    "The Spring Boot API writes telemetry and an outbox row in one PostgreSQL transaction. A publisher then sends the event at least once, and a worker records one processing receipt.",
  scope:
    "The public demo is a browser-local simulation of that pipeline. The Java, Kafka, and PostgreSQL services run locally through Docker Compose. The public site is not a hosted broker, database, or Spring Boot backend.",
};

export const streamforgeProblem = {
  eyebrow: "01 — The Engineering Problem",
  title: "Accept the reading even when delivery is still ahead.",
  core: "Telemetry has to survive a broker outage, a retry, and a duplicate delivery without losing the accepted reading or applying it twice.",
  tensions: [
    {
      left: "Durable ingestion",
      right: "a publish that can fail after the API has already answered",
    },
    {
      left: "At-least-once delivery",
      right: "a worker that must not record the same event twice",
    },
    {
      left: "A poison payload",
      right: "a source record that should stay unacknowledged until the dead letter is sent",
    },
    {
      left: "Analytics on accepted rows",
      right: "completion that happens later, on a separate receipt",
    },
  ],
};

export const streamforgeArchitecture = {
  eyebrow: "02 — System Architecture",
  title: "Persistence first. Publication second.",
  description:
    "The API commits the accepted reading and the outbox row together. Kafka publication is a later step, so a broker outage does not roll back an already accepted event.",
  flow: ["API", "PostgreSQL", "Outbox", "Publisher", "Kafka", "Worker", "Receipt"],
  notes: [
    {
      label: "Accept",
      detail:
        "Ingestion checks the device, inserts the telemetry row, and inserts the outbox row inside one transaction.",
    },
    {
      label: "Publish",
      detail:
        "The publisher claims one pending outbox row with a lease token, then sends it to Kafka.",
    },
    {
      label: "Process",
      detail:
        "The worker compares the Kafka record with the stored reading and writes one receipt per event id.",
    },
    {
      label: "Read",
      detail:
        "Hour and day analytics read accepted telemetry. They do not wait for the worker receipt.",
    },
  ],
};

export const streamforgeOutbox = {
  eyebrow: "03 — Transactional Outbox",
  title: "The reading and the outbox row commit together.",
  description:
    "IngestionService.accept is transactional. A new event inserts the telemetry row and then the outbox row. If that transaction rolls back, neither row remains.",
  points: [
    "A repeated event id with the same canonical hash returns the existing acceptance.",
    "The same event id with a different payload is rejected as a conflict.",
    "Publication status stays pending until a later publisher cycle sends the row.",
    "A broker failure after acceptance leaves the reading stored and the outbox row waiting.",
  ],
};

export const streamforgeReliability = {
  eyebrow: "04 — Idempotency & Reliability",
  title: "Retries are safe. A changed payload is not.",
  description:
    "Event identity is the event id plus the stored reading. Delivery is at-least-once: a crash after the broker acknowledgement can publish the same record again.",
  points: [
    "The publisher claims one pending row at a time and fences the claim with a lease token.",
    "Transient publish failures leave the row pending so a later cycle can retry it.",
    "A duplicate Kafka delivery finds the existing receipt and does not insert another one.",
    "The local Docker demo uses one Kafka broker. That is not a highly available cluster, and it is not exactly-once delivery.",
  ],
};

export const streamforgeWorker = {
  eyebrow: "05 — Kafka Worker & Failure Handling",
  title: "One receipt, then acknowledge. Poison goes to the dead-letter topic.",
  description:
    "The worker parses the record, checks it against the persisted telemetry, and inserts a processing receipt before acknowledging the source.",
  points: [
    "A matching duplicate is absorbed when the receipt already exists.",
    "A payload that does not match the stored reading, or that has no stored event, is poison and is not retried.",
    "Poison records are published to the dead-letter topic. The source is acknowledged only after that send succeeds.",
    "A failed dead-letter publication leaves the source unacknowledged, so the record is not skipped.",
  ],
};

export const streamforgeAnalytics = {
  eyebrow: "06 — Analytics & Data Processing",
  title: "Aggregates come from accepted telemetry, not from receipts.",
  description:
    "The API summarizes readings over a time window and keeps derived UTC hour statistics. Those statistics are rebuilt from telemetry_events.",
  points: [
    "Summary queries report counts and temperature, humidity, and battery aggregates for a device and window.",
    "Hour buckets are derived data. A rebuild walks UTC days and commits each day separately.",
    "A late occurredAt can change an earlier bucket, because the rebuild reads the accepted rows rather than a frozen receipt.",
    "The rebuild is an explicit command. Its enabled flag defaults to off, so ordinary API startup does not recompute the tables.",
  ],
};

export const streamforgeDemo = {
  eyebrow: "07 — Interactive Pipeline Demo",
  title: "The public page runs the pipeline in the browser.",
  description:
    "The Vercel site is a TypeScript simulation of ingestion, a paused broker, duplicate delivery, poison records, and analytics. It does not call the Spring Boot API, and refreshing the page resets the model.",
  shots: [
    {
      src: "/media/software/streamforge/pipeline.png",
      alt: "StreamForge browser simulation showing one accepted reading waiting at Kafka while the worker is running.",
      caption:
        "Pipeline view of the public simulation. The counters are the in-browser model, not measured throughput.",
      width: 1280,
      height: 800,
    },
    {
      src: "/media/software/streamforge/broker-paused.png",
      alt: "StreamForge simulation with the broker paused and a reading still pending publication.",
      caption:
        "Pausing the broker leaves the accepted reading pending. In the real stack, that pending row is the committed outbox record.",
      width: 1280,
      height: 800,
    },
    {
      src: "/media/software/streamforge/analytics.png",
      alt: "StreamForge simulation analytics view for accepted readings.",
      caption:
        "Analytics in the simulation follow accepted readings. They are not a production dashboard or a latency benchmark.",
      width: 1280,
      height: 800,
    },
  ],
};

export const streamforgeProof = {
  eyebrow: "08 — Engineering Proof & Limitations",
  title: "What the repository and the public page actually show.",
  description:
    "The claims above come from the Java services, Flyway migrations, worker tests, and the live simulation. They are not a production deployment report.",
  evidence: [
    "Flyway migrations V1–V5 version the platform, ingestion, processed events, outbox claim and retry, and derived hour statistics.",
    "API tests cover ingestion, rollback, outbox claim and publication, Kafka outage, and analytics queries and rebuilds.",
    "Worker tests cover receipt insertion, duplicate delivery, poison isolation, and a dead-letter publish that fails closed.",
    "GitHub Actions runs the Java backend, the frontend, and a disposable demo job. This page does not claim a green remote run or a test total.",
    "The public URL was checked and serves the interactive simulation, which states that it is not a remote Kafka cluster.",
  ],
  limits: [
    "No exactly-once Kafka delivery.",
    "No hosted Kafka, PostgreSQL, or Spring Boot service behind the public URL.",
    "No AWS, autoscaling, multi-region, or high-availability claim.",
    "No measured throughput, latency, or SLA.",
    "No production users, revenue, or OAuth and JWT product surface.",
  ],
};
