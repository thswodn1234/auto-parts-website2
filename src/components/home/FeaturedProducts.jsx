import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import { productsData } from '../../data/productsData'; // productsData import

const FeaturedProducts = () => {
  // productsData에서 처음 4개 제품만 가져오기 (인기 제품으로 가정)
  const featured = productsData.slice(0, 4);

  return (
    <section className='section featured-products'>
      <div className='container'>
        <div className='section-header'>
          <h2 className='section-title'>인기 제품</h2>
          <Link to='/products' className='view-all'>
            전체 제품 보기
          </Link>
        </div>

        <div className='products-grid'>
          {featured.map((product) => (
            <Link
              to={`/products/${product.id}`}
              className='product-card'
              key={product.id}
            >
              <div className='product-image'>
                <img src={product.image} alt={product.name} />
              </div>
              <div className='product-category'>{product.categoryName}</div>
              <h3 className='product-name'>{product.name}</h3>
              <p className='product-description'>{product.description}</p>
              <div className='product-link'>
                자세히 보기 <i className='fas fa-arrow-right'></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
