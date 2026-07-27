type SoftwareSceneProps = {
    onBack: () => void;
  };
  
  export default function SoftwareScene({ onBack }: SoftwareSceneProps) {
    return (
      <div className="relative min-h-screen px-6 pt-28 pb-12">
        <div className="mx-auto max-w-7xl">
          <button
            type="button"
            onClick={onBack}
            className="liquid-glass mb-8 rounded-full px-5 py-3 text-sm text-white/85 transition hover:text-white"
          >
            ← Return to Lab
          </button>
  
          <div className="lab-card relative overflow-hidden rounded-[36px] p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.15),transparent_26%)]" />
  
            <div className="relative">
              <div className="mb-8 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                    Software Workbench
                  </p>
                  <h2 className="mt-3 text-4xl font-semibold">Software Scene</h2>
                  <p className="mt-3 max-w-2xl text-white/72">
                    This desk represents my software side: education, projects, and
                    thoughts. Later we will turn these into a more immersive desk
                    interface with richer objects and interactions.
                  </p>
                </div>
  
                <div className="rounded-2xl border border-white/10 bg-white/7 px-4 py-3 text-sm text-white/70">
                  Desk background placeholder
                </div>
              </div>
  
              <div className="grid grid-cols-3 gap-6">
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Education
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">University of Waterloo</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    Computer Science student. Later we can turn this section into a
                    more visual education card with timeline details and highlights.
                  </p>
                </div>
  
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Projects
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">Featured Builds</h3>
                  <ul className="mt-4 space-y-3 text-sm text-white/72">
                    <li>APA Formatter</li>
                    <li>CMBB Asking</li>
                    <li>WorkAway</li>
                    <li>Personal Website</li>
                  </ul>
                  <p className="mt-5 text-xs text-white/50">
                    Later each one can become a clickable desk object.
                  </p>
                </div>
  
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Thoughts
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">Ideas & Notes</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    This is where you can share your ways of thinking, product ideas,
                    experiments, technical notes, and personal reflections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  