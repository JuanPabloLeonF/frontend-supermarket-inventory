interface PropsSvgFigure {
  width?: string;
  height?: string;
  color?: string;
  inverted?: boolean;
}

export function SvgCurver({
  width = "100%",
  height = "100%",
  color = "currentColor",
  inverted = false,
}: PropsSvgFigure): React.JSX.Element {
  const pathNormal = "M0,32 C360,100 720,-20 1080,50 C1260,80 1380,45 1440,32 L1440,120 L0,120 Z";
  const pathInverted = "M0,88 C360,20 720,140 1080,70 C1260,40 1380,75 1440,88 L1440,0 L0,0 Z";

  return (
    <svg
      style={{ width, height, display: "block" }}
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
    >
      <path fill={color} d={inverted ? pathInverted : pathNormal} />
    </svg>
  );
}