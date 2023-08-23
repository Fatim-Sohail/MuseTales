import * as React from "react"
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={700} height={700} {...props}>
    <defs>
      <linearGradient
        id="a"
        x1="50%"
        x2="50%"
        y1="0%"
        y2="100%"
        gradientTransform="rotate(150 .5 .5)"
      >
        <stop offset="0%" stopColor="#812399" />
        <stop offset="100%" stopColor="#503dbe" />
      </linearGradient>
      <filter
        id="b"
        width="140%"
        height="140%"
        x="-20%"
        y="-20%"
        colorInterpolationFilters="sRGB"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
      >
        <feTurbulence
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          baseFrequency="0.005 0.003"
          result="turbulence"
          seed={127}
          stitchTiles="stitch"
          type="fractalNoise"
        />
        <feGaussianBlur
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="turbulence"
          result="blur"
          stdDeviation="0 0"
        />
        <feBlend
          width="100%"
          height="100%"
          x="0%"
          y="0%"
          in="SourceGraphic"
          in2="blur"
          mode="screen"
          result="blend"
        />
      </filter>
    </defs>
    <path fill="url(#a)" d="M0 0h700v700H0z" filter="url(#b)" />
  </svg>
)
export default SvgComponent
