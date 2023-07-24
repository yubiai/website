import React from "react";

const Icon = ({
  style = {hover:"fill:red"},
  fill = "#000",
  width = "131",
  height = "126",
  className = "",
  viewBox = ""
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M61.8 88.968h8.13v-26.71l10.024 9.641 5.69-5.472-19.779-19.024-19.78 19.024 5.69 5.472 10.026-9.642v26.711ZM19.94 104.604c-2.168 0-4.064-.804-5.69-2.411-1.626-1.607-2.439-3.41-2.439-5.407V29.032c0-1.998.813-3.8 2.44-5.408 1.625-1.607 3.521-2.41 5.689-2.41h37.933l8.129 7.818h46.061c2.077 0 3.951.803 5.622 2.41 1.671 1.607 2.506 3.41 2.506 5.407v59.937c0 1.998-.835 3.8-2.506 5.407-1.671 1.607-3.545 2.411-5.622 2.411H19.939Zm0-75.572v67.754h92.123V36.849H62.614l-8.129-7.817H19.94Z"
    />
  </svg>
);

export default Icon;
