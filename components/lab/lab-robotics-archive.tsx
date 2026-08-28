import LabRoboticsMediaPlaceholder from "./lab-robotics-media-placeholder";
import type { RoboticsArchiveSlot } from "./lab-types";

function ArchiveTile({ slot }: { slot: RoboticsArchiveSlot }) {
  const isCertificate = slot.kind === "certificate";
  const isWide = slot.layout === "wide";

  return (
    <figure className={isWide ? "md:col-span-2" : ""}>
      <div className={isCertificate ? "p-1" : ""}>
        <LabRoboticsMediaPlaceholder
          variant={isCertificate ? "certificate" : "gallery"}
          label={slot.placeholderLabel}
          assetPath={slot.assetPath}
          alt={
            slot.assetPath && slot.title
              ? `${slot.title} ${slot.subtitle ?? ""}`.trim()
              : undefined
          }
        />
      </div>

      {isCertificate && slot.title ? (
        <figcaption className="mt-2 px-0.5">
          <p className="text-sm font-medium text-white/75">{slot.title}</p>
          {slot.subtitle ? (
            <p className="mt-0.5 text-xs text-white/45">{slot.subtitle}</p>
          ) : null}
        </figcaption>
      ) : (
        <figcaption className="mt-1.5 text-[11px] text-white/40">
          {slot.caption ?? slot.placeholderLabel}
        </figcaption>
      )}
    </figure>
  );
}

type LabRoboticsArchiveProps = {
  slots: readonly RoboticsArchiveSlot[];
};

export default function LabRoboticsArchive({ slots }: LabRoboticsArchiveProps) {
  const certificates = slots.filter((slot) => slot.kind === "certificate");
  const photos = slots.filter((slot) => slot.kind === "photo");

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certificates.map((slot) => (
          <ArchiveTile key={slot.id} slot={slot} />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {photos.map((slot) => (
          <ArchiveTile key={slot.id} slot={slot} />
        ))}
      </div>
    </div>
  );
}
