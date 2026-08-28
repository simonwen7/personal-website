import Link from "next/link";

type LabProjectBackLinkProps = {
  href?: string;
  label?: string;
};

export default function LabProjectBackLink({
  href = "/software/",
  label = "← Software Lab",
}: LabProjectBackLinkProps) {
  return (
    <div className="relative z-10 mx-auto w-full max-w-6xl px-8 pt-8">
      <Link
        href={href}
        className="
          inline-flex rounded-full border border-white/15
          bg-white/[0.05] px-4 py-2
          text-xs font-medium text-white/65
          transition hover:bg-white/[0.10] hover:text-white
        "
      >
        {label}
      </Link>
    </div>
  );
}
