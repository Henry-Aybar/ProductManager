import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';



const ProductBox = (props) => {

    
    return(
        <div className='productBox'>
            <h3>{props.product.title}</h3>
            <p>price: {props.product.price}</p>
            <p>description: {props.product.description}</p>
            <p>Number of Legs: {props.product.numLegs}</p>

            <div className='d-flex '>
                <button className='btn btn-danger' onClick={()=>{props.onDeleteHandler()}}>💲 Buy Product</button>
            </div>
        </div>
    )
}

export default ProductBox;