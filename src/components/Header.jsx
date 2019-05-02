import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary justify-content-between d-flex">
        <h1>CRUD - React, Redux, REST API & Axios</h1>
        <button type="button" className="btn btn-danger my-2 my-sm-0 nuevo-post">Add Product &#43;</button>
      </nav>
    )
  }
}
