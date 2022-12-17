import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actionCreators/productActions';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {pathname} = useLocation();

  return (
    <div className='col-lg-4 col-sm-6 mb-4'>
      <div className="py-4 px-4 border rounded h-100">
        <div className="text-center">
          <img src={product.image} className="img-fluid" alt="" />
        </div>
        <h5 className="text-center text-info mb-3">{product.model}</h5>
        <h6 className="text-center">Rating:<span className='text-danger ps-2'>{product.rating}</span></h6>
        <ul>
          {
            product.keyFeature.map((feature, index) => <li className='mb-2' style={{listStyle:'none'}} key={index}>{feature}</li>)
          }
        </ul>
        {
          !pathname.includes("cart") &&
       ( <button  onClick={() => dispatch(addToCart(product))} className='btn btn-info rounded-pill w-100 text-white fw-bold'>Add to cart</button>)
        }
        {
          pathname.includes("cart") && 
        <button  onClick={() => dispatch(removeFromCart(product))} className='mt-2 btn btn-danger rounded-pill w-100 text-white fw-bold'>Remove from cart</button>
        }
      </div>
    </div>
  );
};

export default ProductCard;