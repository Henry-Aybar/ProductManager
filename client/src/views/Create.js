import React, {useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


const Create = (props) => {

    const [errors, setErrors] = useState({})
    const history = useHistory();


    const [form, setForm] = useState({
        title: "",
        price: null,
        description: "",
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/products/create", form)
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
            <h1>Add a Product to the List!</h1>
            <form className="mt-5 w-50 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <h3>Title</h3>
                    <input type="text" name="title" className='form-control' placeholder='Title' />
                    <span className='alert-danger'>{errors.title && errors.title.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="number" name="price" className='form-control' placeholder='price' />
                    <span className='alert-danger'>{errors.price && errors.price.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="text" name="description" className='form-control' placeholder='description' />
                    <span className='alert-danger'>{errors.description && errors.description.message}</span>
                </div>

                <div className="form-group mb-2" onChange={onChangeHandler}>
                    <input type="number" name="numLegs" className='form-control' placeholder='how may legs does this Product have?' />
                </div>

                <input type="submit" className='btn btn-success'/>
            </form>
        </div>
    )
}

export default Create;