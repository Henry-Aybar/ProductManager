import React, {useEffect, useState} from 'react';
import axios from 'axios';
import OneProductBox from "../components/OneProductBox"
import { useParams, useHistory } from 'react-router';

const SingleProduct = (props) => {

    const {_id} = useParams();
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get(`http://localhost:8000/api/products/product/${_id}`)
        .then(res=>{
          console.log(res.data.results);
          setProducts(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [_id])


    const onDeleteHandler = (_id) => {
        // console.log(_id)
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res =>{
                console.log(res);

                history.push("/");
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='w-75 mx-auto'>
            <OneProductBox product={products}  onDeleteHandler={()=>onDeleteHandler(_id)}/>
        </div>
    )
}

export default SingleProduct;