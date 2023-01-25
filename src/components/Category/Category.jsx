import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Category.css";
const Category = ({ item }) => {
  const navigate = useNavigate();
  return (
    <div className="category">
      <img src={item.img} alt="" />
      <div className="category__content">
        <h2>{item.title}</h2>
        <Button
          onClick={() => navigate("/products")}
          variant="outlined"
          color="inherit"
        >
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Category;
