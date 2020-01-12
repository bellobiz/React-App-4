import React from "react";
import "./Person.css";

const person = props => {
  return (
    <article className="Person">
      <span>Last Update &mdash; {props.time}</span>
      <section>
        <h1>Code Scheme</h1>
        <h3>
          Code Scheme {props.id} - By {props.name}
        </h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque vero,
          nobis, doloremque atque dolor ipsum, quos itaque enim fugit voluptas
          vitae. Est debitis omnis fugit accusantium, placeat ipsum nisi error.
        </p>
        <hr />
        <footer>Social media: facebook, instagram, twitter</footer>
      </section>
    </article>
  );
};

export default person;
