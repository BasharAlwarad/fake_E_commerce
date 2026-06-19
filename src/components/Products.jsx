import { use } from 'react';
import { DataContext } from '../contexts/DataContext.jsx';
import ProductCard from './ProductCart.jsx';

const Products = () => {
  const { data } = use(DataContext);

  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 py-10">
      <div className="grid w-full justify-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((e, index) => (
          <ProductCard e={e} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Products;
