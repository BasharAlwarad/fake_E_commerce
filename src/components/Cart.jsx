const Cart = () => {
  const localCart = JSON.parse(localStorage.getItem('cartData'));

  return (
    <div>
      {localCart?.map((element) => {
        return (
          <div>
            <img src={element.image} alt="someImage" width={50} height={50} />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
