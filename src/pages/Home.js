import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then(res=> res.json()).then(data => setProducts(data))
  }, [])
  
  const state = useSelector((state) => state);
  console.log(state)
  return (
    <div className='container'>
      <h2 className="text-center fw-bold pt-5 pb-4">Our Products</h2>
      <div className="row">
        {
          products.map(prod => <ProductCard product={prod} key={prod.id} />)
        }
      </div>
    </div>
  );
};

export default Home;