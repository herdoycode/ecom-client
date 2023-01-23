import Categorys from "../../components/Categorys/Categorys";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Products from "../../components/Products/Products";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Slider />
        <Categorys />
        <Products />
        <Newsletter />
        <Footer />
      </div>
    </>
  );
};

export default Home;
