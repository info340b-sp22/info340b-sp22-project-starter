import React, { useState } from "react";

// Likebutton button implementation from https://stackblitz.com/edit/like-button-component-using-react-16?file=src%2FApp.js
//a like button that user can use to interact with the website.
const LikeButton = () => {
  const randomLimit = 1000;
  const [like, setLike] = useState(Math.floor(Math.random() * randomLimit)), // used random number of likes for each play since we don't know how to edit json file when user interact with the website.
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