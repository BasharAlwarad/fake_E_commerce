//import App from "../App.jsx";
import {useState, useEffect} from 'react'


function Products() {
    useEffect(()=> {
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(json=>console.log(json))
    }, [] ) 
    return (<div>
        Hello
    </div>)
};
export default Products;