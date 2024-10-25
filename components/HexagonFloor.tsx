import React from "react";

interface HexagonFloorProps {
  floor: string;
}

export default function HexagonFloor({ floor }: HexagonFloorProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <svg viewBox="0 0 400 400" className="w-full">
        <defs>
          <clipPath id="hexClip">
            <path d="M200,50 L350,150 L350,350 L200,450 L50,350 L50,150 Z" />
          </clipPath>
        </defs>
        <g clipPath="url(#hexClip)">
          <path
            d="M200,50 L350,150 L350,350 L200,450 L50,350 L50,150 Z"
            fill="white"
            stroke="gray"
            strokeWidth="2"
          />
          <text
            x="200"
            y="240"
            textAnchor="middle"
            className="text-4xl font-bold"
            fill="black"
          >
            {floor}
          </text>
          {/* Add more internal hexagon sections here */}
        </g>
      </svg>
    </div>
  );
}
