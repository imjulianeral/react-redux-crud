import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
// Redux
import { deleteProductAction } from '../actions/productsActions';
import { useDispatch } from 'react-redux';

export default function SingleProduct({ product: { price, name, id } }) {

    const dispatch = useDispatch();

    const confirmDeleteProduct = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "A deleted product can't be recovered",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'Cancel'
          }).then((result) => {
            if (result.value) {
              Swal.fire(
                'Deleted',
                'The product has been deleted',
                'success'
              )
              dispatch(deleteProductAction(id));
            }
          })
    }

    return (
        <tr>
            <td>{ name }</td>
            <td><span className="font-weight-bold">$ { price }</span></td>
            <td className="acciones">
                <Link to={`/products/edit/${id}`} className="btn btn-primary mr-2">Edit</Link>
                <button className="btn btn-danger" onClick={ () => confirmDeleteProduct(id) }>Delete</button>
            </td>
        </tr>
    )
}
