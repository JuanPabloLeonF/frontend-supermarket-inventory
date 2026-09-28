import type { StylesSvgsProps } from "../../../share/utils/TypeUtils";

export function SvgIconPackage({
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
      className="animation-fadeScaleIn"
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
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="none">
        <path
          d="m128 24 91 52v104l-91 52-91-52V76z"
          stroke="#7C3AED"
          stroke-width="14"
          stroke-linejoin="round"
        />
        <path
          d="m37 77 91 52 91-52M128 129v103"
          stroke="#7C3AED"
          stroke-width="14"
          stroke-linejoin="round"
        />
        <path d="m81 51 91 52" stroke="#A78BFA" stroke-width="12" />
      </svg>
    </div>
  );
}
