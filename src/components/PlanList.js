import React from "react";
import api from "./Api";
import { Link } from "react-router-dom";
import { plansApiUrl } from "./constants";

export default class PlanList extends React.Component {
  state = {
    plans: [],
  };

  setPlans = (data) => {
    this.setState({ plans: data.plans });
  };

  componentDidMount() {
    api(plansApiUrl, this.setPlans);
  }

  render() {
    return (
      <div>
        <h1 className="text-center"> Plans </h1>
        <table className="table table-hover text-center">
          <thead>
            <tr>
              <th scope="col"> Name </th> <th scope="col"> Fee </th>
              <th colSpan="1"> </th>
            </tr>
          </thead>
          <tbody>
            {this.state.plans.map((plan) => (
              <tr>
                <td> {plan.name} </td> <td> {plan.fee} </td>
                <td>
                  <Link
                    to={{ pathname: `/Plan/${plan.id}` }}
                    className="btn btn-primary"
                  >
                    Show
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
