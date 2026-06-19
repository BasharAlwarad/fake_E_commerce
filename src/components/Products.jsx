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
        setData(products);
      } catch (error) {
        console.error(error.message);
      }
    };
    getData();
  }, []);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-10">
      <div className="grid w-full justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((e, index) => (
          <ProductCard e={e} key={index} setCart={setCart} />
        ))}
      </div>
    </section>
  );
};

export default Products;
