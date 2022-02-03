import React from 'react';
import {useHistory, Link} from 'react-router-dom';

const ProductBox = (props) => {

    
    return(
        <div className='productBox'>
            <h3>{props.product.title}</h3>
            <div className='d-flex '>
                <Link className='btn btn-info' to={`/products/${props.product._id}/edit`}>Edit</Link>
                <Link className='btn btn-primary' to={`/products/${props.product._id}/view`}>View</Link>
                <button className='btn btn-danger' onClick={()=>{props.onDeleteHandler()}}>💲 Buy Product</button>
            </div>
        </div>
    )
}

export default ProductBox;