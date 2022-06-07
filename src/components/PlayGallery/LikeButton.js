import React, { useState } from "react";

//a like button that user can use to interact with the website.
const LikeButton = () => {
  const [like, setLike] = useState(Math.floor(Math.random() * 1000)), // used random number of likes for each play since we don't know how to edit json file when user interact with the website.
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