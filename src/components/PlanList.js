import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class PlanList extends React.Component {
  state = {
    plans: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/plans`)

      .then(result => {
        const plans = result.data;
        this.setState({ plans: plans });
      })
  }
  render() {
    return (
      <div>
      <h1 className="text-center" >Plans</h1>
      <table className="table table-hover text-center">
        <thead>
          <tr>
            <th  scope="col">Name</th>
            <th  scope="col">Fee</th>
            <th colSpan="1"></th>
          </tr>
        </thead>

        <tbody>
        { this.state.plans.map(plan =>
            <tr>
              <td >{plan.name}</td>
              <td>{plan.fee}</td>
              <td><Link to={{pathname:`/Plan/${plan.id}`}} className= "btn btn-primary" >Show</Link></td>
            </tr>
            )}
        </tbody>
      </table>
      </div>

    )
  }
}
