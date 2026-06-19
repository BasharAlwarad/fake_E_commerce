import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
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

  return <DataContext value={{ data, setData }}>{children}</DataContext>;
};
export { DataContext, DataProvider };
