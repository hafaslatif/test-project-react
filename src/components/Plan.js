import React from "react";

import api from "./Api";
import { Link } from "react-router-dom";
import { plansApiUrl } from "./constants";
import Feature from "./feature.js";

export default class Plan extends React.Component {
  state = {
    plan: [],
    features: [],
  };

  setPlan = (data) => {
    this.setState({
      plan: data.plan,
      features: data.plan.features,
    });
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    api(`${plansApiUrl}${id}`, this.setPlan);
  }

  render() {
    let { plan, features } = this.state;

    return (
      <div className="container">
        <h1 className="text-center"> {plan.name} </h1>
        <p className="text-center">
          <strong> Fee: </strong>
          {plan.fee}
        </p>
        <div className="card ">
          <div className="card-header"> Features </div>
          <ol className="list-group list-group-flush">
            {features.map((feature) => (
              <Feature key={feature.id} feature={feature} />
            ))}
          </ol>
        </div>
        <Link to="/" className="btn btn-primary float-right mt-4">
          Back
        </Link>
      </div>
    );
  }
}
