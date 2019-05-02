import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SingleProduct extends Component {
  render() {
    const { id, nombre, precio } = this.props.data;
    return (
      <li className="list-group-item">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-8 d-flex justify-content-between align-items-center">
            <p className="text-dark m-0">{ nombre }</p>
            <span className="badge badge-warning text-dark">$ { precio }</span>
          </div>
          <div className="col-md-4 d-flex justify-content-end acciones">
            <Link to={`/products/update/${id}`} className="btn btn-primary mr-2">Edit</Link>
            <button type="button" className="btn btn-danger">Delete</button>
          </div>
        </div>
      </li>
    )
  }
}
