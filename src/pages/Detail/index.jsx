import { useParams } from "react-router-dom";
import { BASE_URL } from "../../components/constants/Api";
import useFetch from "../../components/hooks/useFetch";

const ProductDetail = () => {
  const { id } = useParams();

  const { data: product, loading, error } = useFetch(BASE_URL + id);
  return (
    <div className="details-wrapper">
      {loading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {product && (
        <div key={product.id} className="product-card">
          <h1>{product.title}</h1>
          <img
            src={product.image}
            className="product-image"
            alt={`${product.title}`}
          />
          <span>
            <strong>${product.price}</strong>
          </span>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
};
export default ProductDetail;
