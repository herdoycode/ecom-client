import Categorys from "../../components/Categorys/Categorys";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Categorys />
      <Products />
      <Newsletter />
    </div>
  );
};

export default Home;
