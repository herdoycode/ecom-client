import { popularProducts } from "../../data";
import Product from "../Product/Product";
import "./Products.css";
const Products = () => {
  return (
    <div className="products">
      {popularProducts.map((item) => (
        <Product key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Products;
