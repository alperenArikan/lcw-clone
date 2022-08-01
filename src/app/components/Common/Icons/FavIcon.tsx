import React from "react";
import { iconColors } from "../../../utils/constants";

const FavIcon: React.FC<{
  contained?: boolean;
  color?: "primary" | "secondary";
  className?: string;
}> = ({ contained = false, color = "primary", className }) => {
  return (
    <span className={className}>
      <svg
        id="Icon-Favorite"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 32 32"
      >
        <path
          id="Path_10551"
          data-name="Path 10551"
          d="M0,0H32V32H0Z"
          fill="none"
        />
        {contained ? (
          <path
            id="Path_10554"
            data-name="Path 10554"
            d="M16,29.35l-2.03-1.9C6.76,20.749,2,16.326,2,10.9A7.725,7.725,0,0,1,9.7,3,8.3,8.3,0,0,1,16,6a8.3,8.3,0,0,1,6.3-3A7.725,7.725,0,0,1,30,10.9c0,5.428-4.76,9.851-11.97,16.571Z"
            transform="translate(0)"
            fill={iconColors[color]}
          />
        ) : (
          <path
            id="Path_10552"
            data-name="Path 10552"
            d="M22.3,3A8.3,8.3,0,0,0,16,6,8.3,8.3,0,0,0,9.7,3,7.725,7.725,0,0,0,2,10.9c0,5.428,4.76,9.851,11.97,16.571L16,29.35l2.03-1.9C25.24,20.749,30,16.326,30,10.9A7.725,7.725,0,0,0,22.3,3ZM16.14,25.329l-.14.144-.14-.144C9.2,19.14,4.8,15.048,4.8,10.9A4.847,4.847,0,0,1,9.7,5.872a5.473,5.473,0,0,1,5,3.389h2.618A5.439,5.439,0,0,1,22.3,5.872,4.847,4.847,0,0,1,27.2,10.9C27.2,15.048,22.8,19.14,16.14,25.329Z"
            fill={iconColors[color]}
          />
        )}
      </svg>
    </span>
  );
};

export default FavIcon;
