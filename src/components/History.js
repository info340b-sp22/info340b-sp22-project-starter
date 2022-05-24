import React, { useState } from "react";

// Readmore button implementation from https://www.geeksforgeeks.org/how-to-create-a-read-more-component-in-reactjs/
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 50) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "Read More >>" : " Read Less <<"}
      </span>
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
    <section>
      <h2>Club History</h2>
      <div className="timeline">
        {historyArr}
      </div>
    </section>
  );
}