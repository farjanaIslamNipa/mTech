import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Cart = () => {
const cart = useSelector(state => state.cart)
  return (
    <div className='container'>
      <h2 className="text-center fw-bold pt-5 pb-4">Cart Products</h2>
      <div className="row">
        {
          cart.map(product => <ProductCard key={product.id} product={product} />)
        }
      </div>
    </div>
  );
};

export default Cart;