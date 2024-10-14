import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Lấy id từ URL

  // Dữ liệu mẫu (có thể thay thế bằng fetch từ API hoặc database)
  const products = [
    {
      _id: '1',
      name: 'Laptop Gaming',
      description: 'Một chiếc laptop mạnh mẽ dành cho game thủ với CPU i7, RAM 16GB và GPU RTX 3060.',
      price: '25,000,000',
      imageUrl: 'https://th.bing.com/th/id/R.6029c70ca54d72a81e6d5dbaab10f17e?rik=Z%2bWt0hnqWJm1ng&pid=ImgRaw&r=0',
      details: 'Laptop có bàn phím RGB, màn hình 144Hz và thời lượng pin lên đến 10 giờ. Bảo hành 2 năm.'
    },
    {
      _id: '2',
      name: 'Điện thoại thông minh',
      description: 'Điện thoại với hiệu suất mạnh mẽ và camera ấn tượng.',
      price: '15,000,000',
      imageUrl: 'https://th.bing.com/th/id/OIP.UKZ70lWmbMSQFl_FJelDIQHaJP?rs=1&pid=ImgDetMain',
      details: 'Điện thoại có màn hình AMOLED 6.5 inch, bộ xử lý Snapdragon 888 và hệ thống camera 108MP.'
    },
    {
      _id: '3',
      name: 'Tai nghe không dây',
      description: 'Tai nghe âm thanh cao cấp và pin lâu.',
      price: '3,000,000',
      imageUrl: 'https://file.hstatic.net/1000152881/file/tai_nghe_bluetooth_d02_18.jpg',
      details: 'Tai nghe với thời gian sử dụng pin lên đến 30 giờ và công nghệ chống ồn chủ động.'
    }
  ];

  // Tìm sản phẩm theo id
  const product = products.find(p => p._id === id);

  // Kiểm tra nếu không tìm thấy sản phẩm
  if (!product) {
    return <Navigate to="/404" />; // Điều hướng đến trang 404 nếu không tìm thấy sản phẩm
  }

  return (
    <div className="product-detail-container">
      <h2>Thông tin chi tiết sản phẩm</h2>
      <div className="product-detail">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="product-detail-image"
        />
        <div className="product-detail-info">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.details}</p>
          <p>Giá: {product.price} VND</p>
          <button className="add-to-cart-btn">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

