import "./Slider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const Slider = () => {
  return (
    <div className="slider">
      <div className="slide__prev">
        <ArrowBackIosNewIcon />
      </div>
      <div className="slide__next">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Slider;
