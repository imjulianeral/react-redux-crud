import React, { Component } from 'react'

export default class SingleProduct extends Component {
  render() {
    const { id, nombre, precio } = this.props.data;
    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark">{ nombre }</p>
            <span className="badge badge-warning text-dark">$ { precio }</span>
          </div>
          <div className="col-md-4">
            2
          </div>
        </div>
      </li>
    )
  }
}
