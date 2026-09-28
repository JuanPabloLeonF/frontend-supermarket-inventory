import type { StylesSvgsProps } from "../../../share/utils/TypeUtils";

export function SvgAnalitycs({
  boxShadow,
  backgroundColor,
  width,
  height,
  padding,
  borderRadius,
  position,
  top,
  left,
  right,
  bottom,
}: StylesSvgsProps): React.JSX.Element {
  return (
    <div
      style={{
        boxShadow,
        backgroundColor,
        width,
        height,
        padding,
        borderRadius,
        position,
        top,
        left,
        right,
        bottom,
      }}
      className="animation-fadeIn"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
        <rect x="57" y="137" width="30" height="57" rx="9" fill="#A78BFA" />
        <rect x="105" y="105" width="30" height="89" rx="9" fill="#8B5CF6" />
        <rect x="153" y="64" width="30" height="130" rx="9" fill="#6D28D9" />
      </svg>
    </div>
  );
}
