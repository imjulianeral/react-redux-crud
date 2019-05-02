import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '../actions/productsActions';

class UpdateProduct extends Component {
  state = {
    name: '',
    price: '',
    error: false
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  addProduct = e => {
    e.preventDefault();

    const { name, price } = this.state;

    if (name === '' || price === '') {
      this.setState({ error: true });
      return;
    } else {
      this.setState({ error: false });
    }

    const dataProduct = {
      nombre: this.state.name,
      precio: this.state.price
    }

    this.props.updateProduct(dataProduct);
    setTimeout(() => {

      this.props.history.push('/');
      
    }, 100);
  }

  render() {
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Add New Product</h2>
                    <form onSubmit={this.addProduct}>
                        <div className="form-group">
                            <label>Title</label>
                            <input onChange={this.handleChange} name="name" type="text" className="form-control" placeholder="Titulo" />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input onChange={this.handleChange} name="price" type="text" className="form-control" placeholder="Precio" />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
                    </form>
                    { this.state.error ? 
                      <div className="font-weight-bold alert alert-danger text-center mt-4">
                        All the fields are required
                      </div> 
                    :
                      null
                    }
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default connect(null, {  }) (UpdateProduct);