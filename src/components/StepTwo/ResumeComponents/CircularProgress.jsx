import React from "react";

const CircularProgress = ({ value }) => {
  const radius = 60; // Radius of the circle
  const strokeWidth = 12; // Width of the stroke
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const offset = circumference - (value*10 / 100) * circumference;

  return (
    <svg height={radius * 2} width={radius * 2}>
      <circle
        stroke="#e6e6e6"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      <circle
        stroke="#4c6ef5" // Change this color based on your design
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference + " " + circumference}
        strokeDashoffset={offset}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
        transform={`rotate(-90 ${radius} ${radius})`} // Rotate to start from the right
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="30"
        fontWeight="bold" 
        fill="#4c6ef5" 
      >
        {value*10}
      </text>
    </svg>
  );
};

export default CircularProgress;