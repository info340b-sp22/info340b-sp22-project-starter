import React from 'react';

export default function History(props) {
  return (
    <section>
    <h2>Club History</h2>
    <div className="timeline">
      <div className="container left">
        <div className="content">
          <h3>2018.5</h3>
          <img src="img/history1.jpg" alt="founders of the club" />
          <p>Chinese Theater Club was born in the most beautiful time of the year.</p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h3>2018 AU</h3>
          <img src="img/history2.jpg" alt="acting & sound Workshops" />
          <p>Acting & Sound Workshops</p>
          <p>Whether you are a first-time theater novice or an experienced theater veteran,
            you can come to the club to learn about acting.
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h3>2019 WI</h3>
          <img src="img/history3.jpg" alt="club activity" />
          <p className="showmore">General Meeting to get acquainted with everyone in CTC;
            <span className="dots">...</span>
            <span className="more">
              Acting Workshops to continue
              to polish your acting skills; Light workshop to create a stage lighting wizard;
              Script Appreciation Workshop to teach you to read a good script; "Go to the theater
              together" theater friends offline activities, occasional good theater
              recommendations.
            </span>
            <a>Show More</a>
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h3>2019.3</h3>
          <img src="img/history4.jpg" alt="actors and actresses" />
          <p>The Birth of an Actor</p>
          <p className="showmore">March 11 was destined to be a sleepless night full of surprises.<span className="dots">...</span>
            <span className="more">
              Six wonderful plays were competing in turn. One second we were amused and laughing,
              and the next second we were tugging at fragile heartstrings, and together with the
              hundreds of spectators in the audience, we witnessed the birth of the actors.
            </span>
            <a>Show More</a>
          </p>
        </div>
      </div>
      <div className="container left">
        <div className="content">
          <h3>2019.05</h3>
          <img src="img/history5.jpg" alt="one year show" />
          <p className="showmore">We are one year old!
            <span className="dots">...</span>
            <span className="more">
              Whether it's a talent show, or you just like to see the show and have a good time,
              CTC welcomes you to come and have fun!
            </span>
            <a>Show More</a>
          </p>
        </div>
      </div>
      <div className="container right">
        <div className="content">
          <h3>2019.5</h3>
          <img src="img/history4.jpg" alt="actors and actresses" />
          <p>Mr. Donkey</p>
          <p className="showmore">A scene seems to be short, but its mood last long.<span className="dots">...</span>
            <span className="more">
              The ups and downs of thoughts are like turbulent waves. 3 hours of emotional
              outbursts, 5 shows a week, and 2 months of intense rehearsals.
            </span>
            <a>Show More</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}

function HistoryCard(props) {
  return (

  );
}

function toggleMore() {
  document.querySelectorAll(".showmore").forEach(function (p) {
    p.querySelector("a").addEventListener("click", function () {
      p.classList.toggle("show");
      this.textContent = p.classList.contains("show") ? "Show Less" : "Show More";
    });
  });
}