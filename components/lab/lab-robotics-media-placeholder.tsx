import Image from "next/image";

type LabRoboticsMediaPlaceholderProps = {
  variant: "certificate" | "gallery";
  label?: string;
  assetPath?: string;
  alt?: string;
};

export default function LabRoboticsMediaPlaceholder({
  variant,
  label,
  assetPath,
  alt,
}: LabRoboticsMediaPlaceholderProps) {
  if (assetPath) {
    return (
      <div
        className="
          relative aspect-[4/3] w-full overflow-hidden
          rounded-xl border border-white/10 bg-black/25
        "
      >
        <Image
          src={assetPath}
          alt={alt ?? "Robotics competition media"}
          fill
          className="object-contain p-2"
          sizes={
            variant === "certificate"
              ? "(max-width: 768px) 100vw, 420px"
              : "(max-width: 768px) 50vw, 320px"
          }
        />
      </div>
    );
  }

  if (variant === "certificate") {
    return (
      <div
        className="
          flex aspect-[4/3] w-full flex-col items-center
          justify-center rounded-xl border border-dashed
          border-white/15 bg-black/20 px-4 text-center
        "
        aria-hidden="true"
      >
        <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/35">
          Certificate
        </p>
        <p className="mt-2 text-xs text-white/30">Image to be added</p>
      </div>
    );
  }

  return (
    <div
      className="
        flex aspect-[4/3] w-full flex-col items-center
        justify-center rounded-xl border border-dashed
        border-white/15 bg-black/20 px-3 text-center
      "
      aria-hidden="true"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/35">
        {label ?? "Photo"}
      </p>
      <p className="mt-1.5 text-[11px] text-white/30">Image to be added</p>
    </div>
  );
}
