import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState(Math.floor(Math.random() * 1000)),
    [isLike, setIsLike] = useState(false),
    onLikeButtonClick = () => {
      setLike(like + (isLike?-1:1));
      setIsLike(!isLike);
    };

  return (
    <div>
      <button
        className={"like-button " + (isLike ? "liked" : "")}
        onClick={onLikeButtonClick}
      >
        {"Like"} | {like}
      </button>
    </div>
  );
};

export default LikeButton;