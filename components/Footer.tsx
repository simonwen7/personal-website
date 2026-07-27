export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    ["Home", "/"],
    ["Projects", "/#projects"],
    ["About", "/#about"],
    ["Resume", "/#resume"],
    ["Contact", "/#contact"],
  ];

  return (
    <footer
      className="
        relative overflow-hidden
        border-t border-white/10
        bg-[#030509]
        px-8 py-10
        text-white
      "
    >
      {/* 左侧 Software 蓝色柔光 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -left-24 bottom-[-120px]
          h-[280px] w-[280px]
          rounded-full
          bg-cyan-500/[0.08]
          blur-[110px]
        "
      />

      {/* 右侧 Robotics 绿色柔光 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          -right-24 bottom-[-120px]
          h-[280px] w-[280px]
          rounded-full
          bg-emerald-500/[0.08]
          blur-[110px]
        "
      />

      {/* 淡网格 */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0
          opacity-[0.025]
          [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)]
          [background-size:40px_40px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Footer 主体 */}
        <div
          className="
            flex flex-col gap-8
            rounded-[30px]
            border border-white/10
            bg-white/[0.035]
            px-7 py-7
            shadow-[0_20px_65px_rgba(0,0,0,0.28)]
            backdrop-blur-xl
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* 左侧品牌信息 */}
          <a
            href="/"
            aria-label="Go to Simon Wen's home page"
            className="
              group flex items-center gap-4
              rounded-2xl
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-white/60
            "
          >
            <div
              className="
                relative flex h-12 w-12
                items-center justify-center
                overflow-hidden rounded-2xl
                border border-white/15
                bg-white/[0.06]
                text-sm font-bold text-white
                shadow-[0_12px_30px_rgba(0,0,0,0.28)]
                transition duration-300
                group-hover:-rotate-6
                group-hover:border-cyan-300/25
                group-hover:bg-cyan-400/10
              "
            >
              <span
                aria-hidden="true"
                className="
                  pointer-events-none absolute
                  inset-x-2 top-0 h-px
                  bg-gradient-to-r
                  from-transparent via-white/60 to-transparent
                "
              />

              <span className="relative z-10">SW</span>
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                Simon Wen
              </p>

              <p className="mt-1 text-xs text-white/45">
                Software · AI · Robotics
              </p>
            </div>
          </a>

          {/* 中间导航 */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            {footerLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="
                  text-sm font-medium text-white/50
                  transition duration-300
                  hover:text-white
                  focus-visible:outline-none
                  focus-visible:text-white
                "
              >
                {label}
              </a>
            ))}
          </nav>

          {/* 右侧操作 */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://github.com/Simonwen7"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-full
                border border-white/10
                bg-white/[0.045]
                px-4 py-2.5
                text-xs font-medium text-white/60
                transition duration-300
                hover:-translate-y-0.5
                hover:border-cyan-300/20
                hover:bg-cyan-400/10
                hover:text-cyan-50
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-cyan-200/50
              "
            >
              GitHub ↗
            </a>

            <a
              href="/contact"
              className="
                group inline-flex items-center gap-2
                rounded-full
                border border-emerald-300/20
                bg-emerald-400/10
                px-4 py-2.5
                text-xs font-medium text-emerald-50
                transition duration-300
                hover:-translate-y-0.5
                hover:bg-emerald-400/20
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-emerald-200/50
              "
            >
              <span
                aria-hidden="true"
                className="
                  h-1.5 w-1.5 rounded-full
                  bg-emerald-300
                  shadow-[0_0_10px_rgba(110,231,183,0.9)]
                "
              />

              Let&apos;s Talk

              <span className="text-emerald-100/50 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>

        {/* Footer 底部信息 */}
        <div
          className="
            mt-6 flex flex-col gap-3
            border-t border-white/[0.07]
            pt-6
            text-xs text-white/35
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p>
            © {currentYear} Simon Wen. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="
                h-1.5 w-1.5 rounded-full
                bg-emerald-300/80
                shadow-[0_0_8px_rgba(110,231,183,0.7)]
              "
            />

            <p>
              Designed and built in my digital lab.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
