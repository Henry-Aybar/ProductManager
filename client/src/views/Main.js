import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ProductBox from "../components/ProductBox"

const Main = (props) => {
    
    const [products, setProducts] = useState([]);

    useEffect(()=>{
      axios.get("http://localhost:8000/api/products/findAll")
        .then(res=>{
          console.log(res.data.results);
          setProducts(res.data.results);
        })
        .catch(err=>console.log(err))
    }, [])


    const onDeleteHandler = (_id, index) => {
        // console.log(_id)
        axios.delete(`http://localhost:8000/api/products/${_id}/delete`)
            .then(res =>{
                console.log(res);

                const copyProducts = [...products];
                copyProducts.splice(index, 1);
                setProducts(copyProducts);
            })
            .catch(err=>console.log(err))
    }

    return(
        <div className='w-75 mx-auto'>
            <h1>All Products</h1>
            {
                products.map((item,i)=>{
                    return <ProductBox key={i} product={item}  onDeleteHandler={()=>onDeleteHandler(item._id, i)}/>
                })
            }
        </div>
    )
}

export default Main;