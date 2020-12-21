import React from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

import Feature from './feature.js'
export default class Plan extends React.Component {
  state = {
    plan: [],
    features: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/plans/${this.props.match.params.id}`)

      .then(result => {
        const plan = result.data;
        this.setState({
          plan: plan,
          features: plan.features
        })
      })
  }

  render() {
    return (
      <div className= "container">
        <h1 className="text-center"> {this.state.plan.name} </h1>
        <p  className="text-center">
          <strong>Fee:</strong>
          {this.state.plan.fee}
        </p>
        <div className="card ">
          <div className="card-header">Features</div>
          <ol className="list-group list-group-flush">
          { this.state.features.map(feature =>
            <Feature feature={feature}/>
          )}
          </ol>
        </div>
        <Link to='/App' className= "btn btn-primary float-right mt-4" >Back</Link>

      </div>
    )
  }
}
