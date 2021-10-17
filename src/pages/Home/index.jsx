import React from "react";
import ProductList from "./ProductList";
import { BASE_URL } from "../../components/constants/Api";
import useFetch from "../../components/hooks/useFetch";
import Heading from "../../components/Heading";

const Home = () => {
  const { data: products, loading, error } = useFetch(BASE_URL);
  return (
    <>
      <Heading title="Our products" />
      {error && <div className="error">{error}</div>}
      {loading && <div className="loader">Loading...</div>}
      {products && <ProductList products={products} />}
    </>
  );
};

export default Home;
