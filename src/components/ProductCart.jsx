// imp use
import { use } from 'react';
// imp context
import { CartContext } from '../contexts/CartContext.jsx';

const ProductCart = ({ e }) => {
  // let use use the context
  const { setCart } = use(CartContext);
  const addToCart = () => {
    const localArr = JSON.parse(localStorage.getItem('cartData')) || [];
    const found = localArr.find((x) => x.id === e.id);
    if (found) {
      return;
    }
    localArr.push(e);
    localStorage.setItem('cartData', JSON.stringify(localArr));
    setCart((pre) => pre + 1);
  };

  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-sm">
      <figure>
        <img src={e.image} width={150} height={150} alt={e.title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{e.title} </h2>
        <p>{e.price} </p>
        <div className="card-actions justify-end">
          <button onClick={addToCart} className="btn btn-primary">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
