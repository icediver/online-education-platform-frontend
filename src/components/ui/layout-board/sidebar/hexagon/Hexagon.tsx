import { HTMLAttributes } from "react";

interface IHexagon extends HTMLAttributes<SVGElement> {}
export default function Hexagon(props: IHexagon) {
  return (
    <svg
      {...props}
      width="230"
      height="230"
      viewBox="0 0 2 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.33331 0.514496H0.833316L0.583313 0.947505L0.833316 1.38051H1.33331L1.58331 0.947505L1.33331 0.514496Z"
        fill="none"
        strokeWidth={0.015}
      />
    </svg>
  );
}
