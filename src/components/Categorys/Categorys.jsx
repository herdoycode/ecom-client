import { categoryes } from "../../data";
import Category from "../Category/Category";
import "./Categorys.css";
const Categorys = () => {
  return (
    <div className="categorys">
      {categoryes.map((item) => (
        <Category key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Categorys;
