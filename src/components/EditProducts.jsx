import React, { useEffect, useRef } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { editProductAction, modProductAction } from '../actions/productsActions';
import { validateFormAction, validateError, validateSuccess } from '../actions/validateActions';


export default function EditProducts({ match: { params: { id } }, history }) {

    const nameRef = useRef('');
    const priceRef = useRef('');

    const dispatch = useDispatch();

    const editProduct = product => dispatch(modProductAction(product));
    const validateForm = () => dispatch(validateFormAction());
    const successValidation = () => dispatch(validateSuccess());
    const errorValidation = () => dispatch(validateError());

    useEffect( () => {
        dispatch(editProductAction(id))
    }, [dispatch, id] );

    const product = useSelector(state => state.products.product);
    const error = useSelector(state => state.products.error);
    
    if(!product) return 'Loading';

    const submitProduct = e => {
        e.preventDefault();

        validateForm();

        if (nameRef.current.value.trim() === '' || priceRef.current.value.trim() === '') {
            errorValidation();
            return;
        }

        successValidation();

        editProduct({
            id,
            name: nameRef.current.value,
            price: priceRef.current.value
        });

        history.push('/');
    }

    return (
        <div className="row justify-content-center mt-5">
            <div className="col-md-8">
                <div className="card">
                    <div className="card-body">
                        <h2 className="text-center">Edit Producto</h2>
                        <form onSubmit={ submitProduct }>
                            <div className="form-group">
                                <label>Title</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Title"
                                    defaultValue={ product.name }
                                    ref={ nameRef }
                                />
                            </div>
                            <div className="form-group">
                                <label>Product Price</label>
                                <input 
                                    type="number" 
                                    className="form-control" 
                                    placeholder="Product Price" 
                                    defaultValue={ product.price }
                                    ref={ priceRef }
                                />
                            </div>

                            <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Save Changes</button>
                        </form>
                        { error ?  
                        <div className="font-weight-bold alert alert-danger text-center mt-4">
                            An Error Ocurred
                        </div> 
                        : null }
                    </div>
                </div>
            </div>
        </div>
    )
}
