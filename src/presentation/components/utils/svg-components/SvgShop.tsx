import type { SvgPropsData } from "../../../models/IconosProps";

export function SvgShop({ size = "100%", color = "currentColor" }: SvgPropsData): React.JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          d="M33.394,458.311h242.247V318.635h116.323v139.676h86.642V222.61H33.394V458.311z M120.69,318.635h69.838 v69.838H120.69V318.635z"
        />
        <path
          d="M310.836,368.565c-5.877,0-10.64,4.77-10.64,10.644v35.46c0,5.873,4.764,10.636,10.64,10.636 c5.874,0,10.637-4.763,10.637-10.636v-35.46C321.473,373.335,316.71,368.565,310.836,368.565z"
        />
        <polygon points="230.104,53.689 158.593,53.689 143.977,196.421 226.22,196.421 " />
        <polygon points="368.026,196.421 353.408,53.689 281.896,53.689 285.781,196.421 " />
        <polygon points="512,196.421 478.606,53.689 405.207,53.689 427.591,196.421 " />
        <polygon points="106.794,53.689 33.394,53.689 0,196.421 84.409,196.421 " />
      </g>
    </svg>
  );
}