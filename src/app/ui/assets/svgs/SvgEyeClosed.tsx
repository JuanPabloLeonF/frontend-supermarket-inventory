import type { PropsSvg } from "../../../share/utils/TypeUtils";

export function SvgEyeClosed({
  width = "100%",
  height = "100%",
  color = "currentColor",
}: PropsSvg): React.JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
      className="icon icon-tabler icons-tabler-filled icon-tabler-eye-closed"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 4c4.29 0 7.863 2.429 10.665 7.154l.22 .379l.045 .1l.03 .083l.014 .055l.014 .082l.011 .1v.11l-.014 .111a.992 .992 0 0 1 -.026 .11l-.039 .108l-.036 .075l-.016 .03c-2.764 4.836 -6.3 7.38 -10.555 7.499l-.313 .004c-4.396 0 -8.037 -2.549 -10.868 -7.504a1 1 0 0 1 0 -.992c2.831 -4.955 6.472 -7.504 10.868 -7.504zm0 5a3 3 0 1 0 0 6a3 3 0 0 0 0 -6" />
      <path d="M4 3a1 1 0 0 1 1.414 0l16 16a1 1 0 0 1 -1.414 1.414l-16 -16a1 1 0 0 1 0 -1.414z" />
    </svg>
  );
}