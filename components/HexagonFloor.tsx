import React from "react";

interface HexagonFloorProps {
  floor: string;
  bgColor?: string;
}

export default function HexagonFloor({ floor, bgColor }: HexagonFloorProps) {
  return (
    <div className="flex justify-center">
      <div className="relative w-96 h-96">
        {/* Main Hexagon Container */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="400"
            height="400"
            viewBox="0 0 400 400"
            transform="rotate(90, 100, 100)"
            className=""
          >
            {/* Hexagon Border */}
            <polygon
              points="200,20 350,110 350,290 200,380 50,290 50,110"
              transform="rotate(180, 200, 200)"
              fill={bgColor}
              stroke="#333"
              strokeWidth="3"
            />

            {/* Inner divisions */}
            {/* <line
              x1="200"
              y1="20"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            /> */}
            <line
              x1="50"
              y1="110"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="350"
              y1="110"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="50"
              y1="290"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="350"
              y1="290"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            />
            <line
              x1="200"
              y1="380"
              x2="200"
              y2="200"
              stroke="#333"
              strokeWidth="2"
            />
          </svg>

          {/* Center - 2F */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="text-6xl font-bold text-white">{floor}</div>
          </div>

          {/* Top - TODAY I LEARNED */}
          {/* <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="text-center bg-white px-4 py-2 border border-gray-300">
              <div className="font-bold text-sm">TODAY</div>
              <div className="font-bold text-sm">I LEARNED</div>
              {/* <div className="text-xs text-gray-600 mt-1">AI</div> 
            </div>
          </div> */}

          {/* Top Left - STUDY */}
          {/* <div className="absolute top-26 left-12 transform -rotate-12">
            <div className="text-center font-bold text-sm text-gray-700">
              STUDY
            </div>
          </div> */}

          {/* Top Right - READING */}
          {/* <div className="absolute top-26 right-12 transform rotate-12">
            <div className="text-center font-bold text-sm text-gray-700">
              READING
            </div>
          </div> */}

          {/* Bottom Left - Q&A */}
          {/* <div className="absolute bottom-20 left-16 transform rotate-12">
            <div className="text-center font-bold text-sm text-gray-700">
              Q&A
            </div>
          </div> */}

          {/* Bottom Right - RE-PROJECT */}
          {/* <div className="absolute bottom-20 right-16 transform -rotate-12">
            <div className="text-center font-bold text-sm text-gray-700">
              RE-PROJECT
            </div>
          </div> */}

          {/* Bottom - MOCK INTERVIEW */}
          {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="text-center bg-white px-4 py-2 border border-gray-300">
              <div className="font-bold text-sm">MOCK INTERVIEW</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
