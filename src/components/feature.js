import React from "react";

const Feature = (props) => (
  <>
    <li className="list-group-item">
      <strong> {props.feature.name} </strong>
    </li>
  </>
);
export default Feature;
