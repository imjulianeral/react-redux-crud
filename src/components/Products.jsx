import React, { Fragment, useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAction } from '../actions/productsActions';
import SingleProduct from './SingleProduct';

export default function Products() {

    const dispatch = useDispatch('');

    useEffect( () => {
        dispatch(getProductsAction());
    }, [dispatch]);

    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
    const products = useSelector(state => state.products.products);

    return (
        <Fragment>
            { error ? 
                    <div className="font-weight-bold alert alert-danger text-center mt-4">
                        can't download the products
                    </div>
                    : null
            }
            <h2 className="text-center my-5">List of Products</h2>

            <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Actions</th>
                    </tr>   
                </thead>
                <tbody>
                    {
                        products.map(product => (
                            <SingleProduct
                                key={ product.id }
                                product={ product }
                            />
                        ))
                    }
                </tbody>
            </table>
            { loading ? 'Loading' : null }
            
        </Fragment>
    )
}
