import { Button } from "@mui/material";
import "./Category.css";
const Category = ({ item }) => {
  return (
    <div className="category">
      <img src={item.img} alt="" />
      <div className="category__content">
        <h2>{item.title}</h2>
        <Button variant="outlined" color="inherit">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Category;
