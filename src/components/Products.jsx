import { useState, useEffect } from 'react';
import ProductCard from './ProductCart.jsx';

const Products = ({ setCart }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products`);
        if (!res.ok) {
          throw new Error('server error');
        }
        const products = await res.json();
        console.log(products);
        setData(products);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <div>
      {data.map((e, index) => (
        <ProductCard e={e} key={index} setCart={setCart} />
      ))}
    </div>
  );
};

export default Products;
