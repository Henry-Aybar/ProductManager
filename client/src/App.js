import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from 'react'
import {Switch, Route, Link} from 'react-router-dom'
import Main from "./views/Main";
import Create from "./views/Create";
import Edit from "./views/Edit";
import SingleProduct from "./views/SingleProduct";

function App() {

  return (
    <div className="App">
      <div className='nav'>
        <Link className='btn btn-info' to="/">Main Page</Link>
        <Link className='btn btn-primary' to="/products/create">Add a product to the Store</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/products/create">
          <Create/>
        </Route>

        <Route exact path="/products/:_id/edit">
          <Edit/>
        </Route>

        <Route exact path="/products/:_id/view">
          <SingleProduct/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
