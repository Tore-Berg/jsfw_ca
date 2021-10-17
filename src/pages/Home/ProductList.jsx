import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`detail/${product.id}`}>
            <h2 className="product-title">{product.title}</h2>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
          </Link>
          <FaShoppingCart size={50} className="cart-icon" />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
