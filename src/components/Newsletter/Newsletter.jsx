import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import "./Newsletter.css";
const Newsletter = () => {
  return (
    <div className="newsletter">
      <h1>Newsletter</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
      <div className="newsletter__input">
        <input placeholder="Enter your email..." type="text" />
        <button variant="contained">
          <SendOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
