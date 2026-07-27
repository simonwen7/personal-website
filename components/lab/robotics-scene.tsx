type RoboticsSceneProps = {
    onBack: () => void;
  };
  
  export default function RoboticsScene({ onBack }: RoboticsSceneProps) {
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(74,222,128,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(251,191,36,0.12),transparent_25%)]" />
  
            <div className="relative">
              <div className="mb-8">
                <p className="text-xs uppercase tracking-[0.35em] text-white/50">
                  Robotics Workbench
                </p>
                <h2 className="mt-3 text-4xl font-semibold">Robotics Scene</h2>
                <p className="mt-3 max-w-2xl text-white/72">
                  This desk is the robotics side of your lab. For the first version,
                  we keep it simple. Later we can split this into robotics projects,
                  experience, competitions, and current builds.
                </p>
              </div>
  
              <div className="grid grid-cols-3 gap-6">
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Experience
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">RoboHub / FRC / VEX</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    This can later contain your robotics lab experience, team work,
                    and hands-on projects.
                  </p>
                </div>
  
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Builds
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">Current Robotics Ideas</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    Robot dog concepts, control systems, sensor experiments, and
                    hardware-related ideas can live here.
                  </p>
                </div>
  
                <div className="lab-card rounded-[28px] p-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    Future
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold">Expand Later</h3>
                  <p className="mt-4 text-sm leading-7 text-white/72">
                    Later we can turn this into a true desk scene with tools,
                    blueprints, robot parts, and clickable objects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  