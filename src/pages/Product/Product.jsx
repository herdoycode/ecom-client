import "./Product.css";
import Navbar from "../../components/Navbar/Navbar";
import Newsletter from "../../components/Newsletter/Newsletter";
import Footer from "../../components/Footer/Footer";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Product = () => {
  const colors = [
    { id: 1, color: "teal" },
    { id: 2, color: "pink" },
    { id: 3, color: "red" },
  ];
  return (
    <div className="product__page">
      <Navbar />

      <div className="product__wrapper">
        <div className="product__img">
          <img className="mf" src="https://i.ibb.co/S6qMxwr/jean.jpg" alt="" />
        </div>
        <div className="product__details">
          <h2>Product Name</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui amet
            neque odit ratione doloremque architecto tempore, vero doloribus
            laborum officiis commodi libero corporis eligendi veniam dolorum,
            asperiores voluptatem modi quam.
          </p>
          <span className="price">$20</span>
          <div className="color__size">
            <div className="color__select">
              <p>Color:</p>
              <div className="colors">
                {colors.map((c) => (
                  <div
                    className="color"
                    key={c.id}
                    style={{ background: `${c.color}` }}
                  ></div>
                ))}
              </div>
            </div>
            <div className="size">
              <p>Size:</p>
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
          </div>
          <div className="add">
            <div className="quantity">
              <button>
                <AddIcon />
              </button>
              <div className="q__number">4</div>
              <button>
                <RemoveIcon />
              </button>
            </div>
            <button className="add__btn">add to cart</button>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
