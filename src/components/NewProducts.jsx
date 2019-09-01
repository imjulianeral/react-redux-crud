import React, { useState } from 'react';
// Redux
import { createNewProductAction } from '../actions/productsActions';
import { validateFormAction, validateError, validateSuccess } from '../actions/validateActions';
import { useDispatch, useSelector } from 'react-redux';

export default function NewProducts({ history }) {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const dispatch = useDispatch();
    const newProduct = product => dispatch(createNewProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const successValidation = () => dispatch(validateSuccess());
    const errorValidation = () => dispatch(validateError());

    // Get data from store
    const error = useSelector((state) => state.error.error);

    const addProduct = e => {
        e.preventDefault();

        validateForm();
        
        if (name.trim() === '' || price.trim() === '') {
            errorValidation(); 
            return;
        }

        successValidation();

        newProduct({
            name,
            price
        });

        history.push('/');
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center mb-4 font-weight-bold ">Add New Product</h2>
                        <form onSubmit={ addProduct }>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Product Name" 
                                    value={ name }
                                    onChange={ ({ target: { value } }) => setName(value) }
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price" 
                                    value={ price }
                                    onChange={ ({ target: { value } }) => setPrice(value) }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Add</button>
                        </form>
                        { error ?  
                        <div className="font-weight-bold alert alert-danger text-center mt-4">
                            All the fields are required
                        </div> 
                        : null }
                    </div>
                </div>
            </div>
        </div>
    )
}
