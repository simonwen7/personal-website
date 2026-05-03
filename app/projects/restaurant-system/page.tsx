export default function RestaurantSystemPage() {
    return (
      <main className="overflow-hidden px-8 py-16 text-black">
        <article className="mx-auto max-w-6xl">
          <a
            href="/projects"
            className="inline-flex items-center rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-sm font-semibold text-gray-600 shadow-sm transition hover:-translate-y-0.5 hover:text-black hover:shadow-md"
          >
            ← Back to Projects
          </a>
  
          <section className="mt-8 rounded-[2rem] border border-white/70 bg-white/80 p-8 shadow-2xl shadow-gray-200/70 backdrop-blur-xl md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500">
              Backend Workflow System
            </p>
  
            <h1 className="mt-6 text-5xl font-black tracking-tight text-gray-950 md:text-6xl">
              Restaurant Order Routing System
            </h1>
  
            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              A backend-driven order routing system that coordinates restaurant
              orders across multiple kitchen stations with real-time preparation
              status tracking.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-2">
              {["Backend", "API", "Database", "Workflow", "Order Routing"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </section>
  
          <section className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Problem",
                text: "Restaurant orders often involve multiple preparation steps across different kitchen stations. Without a clear routing system, order status can become difficult to track.",
              },
              {
                title: "Solution",
                text: "The system models orders as backend workflows, routes items to the correct preparation stations, and tracks progress through multiple status stages.",
              },
              {
                title: "My Role",
                text: "I focused on backend structure, API behavior, database-centered workflows, and the logic needed to coordinate orders across different stations.",
              },
            ].map((section) => (
              <div
                key={section.title}
                className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-xl shadow-gray-200/70 backdrop-blur"
              >
                <h2 className="text-2xl font-black">{section.title}</h2>
                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {section.text}
                </p>
              </div>
            ))}
          </section>
  
          <section className="mt-10 rounded-[2rem] border border-white/70 bg-gray-950 p-8 text-white shadow-2xl shadow-gray-300/70 md:p-10">
            <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Core Workflow
                </p>
  
                <h2 className="mt-4 text-3xl font-black">
                  Order received → station routing → preparation tracking.
                </h2>
              </div>
  
              <div className="space-y-3">
                {[
                  "Customer order created",
                  "Items assigned to kitchen stations",
                  "Station status updated",
                  "Order progress synchronized",
                  "Final order marked complete",
                ].map((step) => (
                  <div
                    key={step}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 font-semibold"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </article>
      </main>
    );
  }
  