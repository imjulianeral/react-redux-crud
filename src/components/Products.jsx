import React, { Component, Fragment } from 'react';
// Redux
import { connect } from 'react-redux';
import { showProducts } from '../actions/productsActions';
import SingleProduct from './SingleProduct';

class Products extends Component {
 componentDidMount() {
   this.props.showProducts();
 }

  render() {
    const { products } = this.props;
    return (
      <Fragment>
        <h2 className="text-center my-5">Products List</h2>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <ul>
              { products.map(product => (
                <SingleProduct
                  key={ product.id }
                  data={ product }
                />
              )) }
            </ul>
          </div>
        </div>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

export default connect(mapStateToProps, { showProducts }) (Products);