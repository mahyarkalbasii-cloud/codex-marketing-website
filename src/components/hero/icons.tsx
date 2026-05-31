import type { ReactElement, SVGProps } from "react";

import type { ConstructionStage } from "./data";

type StageIconProps = SVGProps<SVGSVGElement>;

function ExcavationIcon(props: StageIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 16.5h16M6.5 16.5l2.6-6.1 3 3 3.1-7.3 2.3 10.4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 19h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StructureIcon(props: StageIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 19V7m6 12V5m6 14V9M4.5 19h15M5.5 7h13M8.5 11h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FinishingIcon(props: StageIconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 4.5v3M12 16.5v3M4.5 12h3M16.5 12h3M7.8 7.8l2.1 2.1M14.1 14.1l2.1 2.1M16.2 7.8l-2.1 2.1M9.9 14.1l-2.1 2.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="2.25" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export const stageIcons = {
  گودبرداری: ExcavationIcon,
  اسکلت: StructureIcon,
  "نازک‌کاری": FinishingIcon,
} satisfies Record<ConstructionStage, (props: StageIconProps) => ReactElement>;
