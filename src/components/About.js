import React from 'react';

export default function About(props) {
  let contactArr = props.contact.map((ele) => <ContactCard contact={ele} key={ele.name} />);
  return (
    <div>
      <section>
        <h2>Who Are We?</h2>
        <p>- We Establishment at May 2018</p>
        <p>- First Chinese student drama club in the Northwest</p>
        <p>- We regularly hold Workshops</p>
        <p>- Including performances, lighting and sound effects</p>
        <p>- We put together at least one big play a year</p>
        <p>- Whether you want to be an actor, director or writer</p>
        <p>- You can shine on our stage</p>
      </section>

      <h3>Our Team</h3>
      <div className="about-row">
        {contactArr}
      </div>
    </div>
  );
}

function ContactCard(props) {
  let {name, motto, img, email, title} = props.contact;
  return (
    <div className="column">
      <div className="card">
        <img src={img} alt={name} />
        <div className="about-container">
          <h2>{name}</h2>
          <p className="title">{title}</p>
          <p>{motto}</p>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
}