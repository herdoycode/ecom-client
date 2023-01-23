import {
  Email,
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  LocationDisabled,
  Phone,
  Room,
} from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <h2>HerdoyCode</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni odit
          sequi veritatis voluptatibus qui aut, voluptates libero adipisci? Aut
          inventore at voluptatum sunt quam officiis error soluta voluptate
          perspiciatis consequuntur.
        </p>
        <div className="social__nav">
          <div className="social__icon facebook">
            <Facebook />
          </div>
          <div className="social__icon instagram">
            <Instagram />
          </div>
          <div className="social__icon linkedin">
            <LinkedIn />
          </div>
          <div className="social__icon github">
            <GitHub />
          </div>
        </div>
      </div>
      <div className="footer__center">
        <h2>Usefull Link</h2>
        <div className="footer__links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Main Fashion</a>
            </li>
            <li>
              <a href="#">Accesseories</a>
            </li>
            <li>
              <a href="#">Order Traking</a>
            </li>
            <li>
              <a href="#">WishList</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
            <li>
              <a href="#">Women Fashion</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Wishlish</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__right">
        <h2>Contact Us</h2>
        <div className="contact">
          <div className="contact__item">
            <Room /> <span>: Kushtia, Khulna, Bangladesh</span>
          </div>
          <div className="contact__item">
            <Phone />
            <span>: +8801833020886</span>
          </div>
          <div className="contact__item">
            <Email /> <span>: herdoy1@gmail.com</span>
          </div>
          <div className="contact__item">
            <img src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
