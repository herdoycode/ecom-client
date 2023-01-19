import Categories from "../../components/Categories/Categories";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Categories />
    </div>
  );
};

export default Home;
