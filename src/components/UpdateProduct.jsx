import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showSingleProduct, updateProduct } from '../actions/productsActions';

class UpdateProduct extends Component {
  state = {
    name: '',
    price: '',
    error: false
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showSingleProduct(id);
  }
  componentWillReceiveProps(nextProps, nextState) {
    const { nombre, precio } = nextProps.product;
    this.setState({
      name: nombre,
      price: precio
    });
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

    const { id } = this.props.match.params;

    const dataProduct = {
      id,
      nombre: this.state.name,
      precio: this.state.price
    }

    this.props.updateProduct(dataProduct);
    setTimeout(() => {

      this.props.history.push('/');
      
    }, 100);
  }

  render() {
    const { name, price } = this.state;
    return (
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
            <div className="card">
                <div className="card-body">
                    <h2 className="text-center">Add New Product</h2>
                    <form onSubmit={this.addProduct}>
                        <div className="form-group">
                            <label>Title</label>
                            <input defaultValue={name} onChange={this.handleChange} name="name" type="text" className="form-control" placeholder="Titulo" />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input defaultValue={price} onChange={this.handleChange} name="price" type="text" className="form-control" placeholder="Precio" />
                        </div>
                        <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Update</button>
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

const mapStateToProps = state => ({
  product: state.products.product
});

export default connect(mapStateToProps, { showSingleProduct, updateProduct }) (UpdateProduct);