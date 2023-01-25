import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Products from "../../components/Products/Products";
import "./ProductList.css";

const ProductList = () => {
  return (
    <>
      <Navbar />
      <h1 className="product__page__title">Dresses</h1>
      <div className="filter__container">
        <div className="filter__color">
          <span>Filter Products:</span>
          <select>
            <option disabled selected value="">
              Color
            </option>
            <option value="">Color2</option>
            <option value="">Color3</option>
            <option value="">Color4</option>
            <option value="">Color5</option>
          </select>
          <select>
            <option disabled selected value="">
              Size
            </option>
            <option value="">XL</option>
            <option value="">XXL</option>
            <option value="">SM</option>
            <option value="">SM</option>
          </select>
        </div>
        <div className="filter__size">
          <span>Sort Products:</span>
          <select>
            <option selected value="">
              Newest
            </option>
            <option value="">Price(asc)</option>
            <option value="">Price(desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Footer />
    </>
  );
};

export default ProductList;
