import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';


const Edit = (props) => {

    const {_id} = useParams();
    const [errors, setErrors] = useState({})
    const history = useHistory();


    const [form, setForm] = useState({
        title: "",
        price: null,
        description: "",
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/product/${_id}`)
            .then(res=>{
                console.log(res.data.results);
                setForm(res.data.results);
            })
            .catch(err=>console.log(err))
    },[_id])

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch(`http://localhost:8000/api/products/${_id}/update`, form)
            .then(res=>{
                console.log(res);
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response.data.err.errors);
                setErrors(err.response.data.err.errors);
            })
    }

    return(
        <div>
            <h1>Edit This Product!</h1>
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h3>Title</h3>
                    <input type="text" name="title" className='form-control' placeholder='Title' value={form.title}/>
                    <span className='alert-danger'>{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="number" name="price" className='form-control' placeholder='price' value={form.price}/>
                    <span className='alert-danger'>{errors.price && errors.price.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="text" name="description" className='form-control' placeholder='Description' value={form.description}/>
                    <span className='alert-danger'>{errors.description && errors.description.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="number" name="numLegs" className='form-control' placeholder='how may legs does this product have?' />
                </div>

                <input type="submit" className='btn btn-success'/>
            </form>
        </div>
    )
}

export default Edit;