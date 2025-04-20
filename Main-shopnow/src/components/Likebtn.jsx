import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center justify-center w-12 h-12 rounded-full transition-transform transform active:scale-110 duration-300"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={liked ? "#ff3366" : "none"}
        stroke={liked ? "#ff3366" : "#000"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-8 h-8 transition-all duration-300"
      >
        <path d="M12 21l-1-1C5 14 2 10 2 6a4 4 0 0 1 8 0c0 2-2 4-4 4s-4-2-4-4a4 4 0 1 1 8 0c0 4-3 8-9 14l-1 1z" />
      </svg>
    </button>
  );
};

export default LikeButton;
