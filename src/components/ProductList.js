import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const products = [
    {
      _id: '1',
      name: 'Laptop Gaming',
      description: 'Một chiếc laptop mạnh mẽ dành cho game thủ.',
      price: '25,000,000',
      imageUrl: 'https://th.bing.com/th/id/R.6029c70ca54d72a81e6d5dbaab10f17e?rik=Z%2bWt0hnqWJm1ng&pid=ImgRaw&r=0'
    },
    {
      _id: '2',
      name: 'Điện thoại thông minh',
      description: 'Điện thoại với hiệu suất mạnh mẽ và camera ấn tượng.',
      price: '15,000,000',
      imageUrl: 'https://th.bing.com/th/id/OIP.UKZ70lWmbMSQFl_FJelDIQHaJP?rs=1&pid=ImgDetMain'
    },
    {
      _id: '3',
      name: 'Tai nghe không dây',
      description: 'Tai nghe âm thanh cao cấp và pin lâu.',
      price: '3,000,000',
      imageUrl: 'https://file.hstatic.net/1000152881/file/tai_nghe_bluetooth_d02_18.jpg'
    },
    // Thêm nhiều sản phẩm khác nếu cần
  ];

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (productId) => {
    fetch('/api/add-to-cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ productId }),
    }).then(() => {
      alert('Đã thêm vào giỏ hàng');
    });
  };
  

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul className="product-list">
        {products.map(product => (
          <li key={product._id} className="product-item">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Giá: {product.price} VND</p>
            <Link to={`/product/${product._id}`}>Xem chi tiết</Link>
            <br />
            <button onClick={() => addToCart(product._id)} className="add-to-cart-btn">
              Thêm vào giỏ hàng
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


