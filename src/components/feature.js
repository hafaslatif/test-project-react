import React from "react";

const Feature = ({ feature: { name } }) => (
  <li className="list-group-item">
    <strong> {name} </strong>
  </li>
);
export default Feature;
