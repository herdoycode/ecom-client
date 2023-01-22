import "./Slider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useState } from "react";
import { slides } from "../../data";
const Slider = () => {
  const [slide, setSlide] = useState("slider__wrapper");

  const handleNextSlide = () => {
    if (slide === "slider__wrapper") return setSlide("slide__100");
    if (slide === "slide__100") return setSlide("slide__200");
    if (slide === "slide__200") return setSlide("slider__wrapper");
  };
  const handlePrevSlide = () => {
    if (slide === "slider__wrapper") return setSlide("slide__200");
    if (slide === "slide__100") return setSlide("slider__wrapper");
    if (slide === "slide__200") return setSlide("slide__100");
  };

  return (
    <div className="slider">
      <div onClick={handlePrevSlide} className="slide__prev">
        <ArrowBackIosNewIcon />
      </div>

      <div className={slide}>
        {slides.map((item) => (
          <div key={item.id} className="slide">
            <div className="slide__img">
              <img src={item.img} alt="" />
            </div>
            <div className="slide__content">
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.content}</p>
                <Button variant="outlined" color="inherit">
                  SHOP NOW
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div onClick={handleNextSlide} className="slide__next">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Slider;
