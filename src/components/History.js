import React, { useState } from "react";

// Readmore button implementation from https://www.geeksforgeeks.org/how-to-create-a-read-more-component-in-reactjs/
//a function that hide excessive words in each history card and displays them when user needed.
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 60) : text}
      <button onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read More >>" : " Read Less <<"}
      </button>
    </p>
  );
};


function HistoryCard(props) {
  let {direction, date, img, alt, text} = props.content;
  return (
    <div className={ direction } >
      <div className="content">
        <h3>{date}</h3>
        <img src={img} alt={alt} />
        <ReadMore>{text}</ReadMore>
      </div>
    </div>
  );
}

export default function History(props) {
  let historyArr = props.content.map((ele) => <HistoryCard content={ele} key={ele.date} />);
  return (
    <div>
      <h2>Club History</h2>
      <div className="timeline">
        {historyArr}
      </div>
    </div>
  );
}