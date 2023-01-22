import "./Product.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
const Product = ({ product }) => {
  return (
    <div className="product">
      <div className="product__bg"></div>
      <img src={product.img} alt="" />
      <div className="product__info">
        <div className="product__icon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="product__icon">
          <SearchOutlinedIcon />
        </div>
        <div className="product__icon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Product;
