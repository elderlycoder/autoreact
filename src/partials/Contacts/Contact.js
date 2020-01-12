import React from "react";

const Contact = props => {
  return (
    <div>
      <span>{props.name} </span>
      <span> {props.phone}</span>
    </div>
  );
};

export default Contact;
