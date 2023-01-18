import "./Slider.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@mui/material";
import { useState } from "react";
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
        <div className="slide">
          <div className="slide__img">
            <img src="/img/slide1.png" alt="" />
          </div>
          <div className="slide__content">
            <div className="content">
              <h2>This is slider 1</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                voluptate quis provident
              </p>
              <Button variant="outlined">SHOP NOW</Button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img">
            <img src="/img/slide1.png" alt="" />
          </div>
          <div className="slide__content">
            <div className="content">
              <h2>This is slider 2</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                voluptate quis provident
              </p>
              <Button variant="outlined">SHOP NOW</Button>
            </div>
          </div>
        </div>
        <div className="slide">
          <div className="slide__img">
            <img src="/img/slide1.png" alt="" />
          </div>
          <div className="slide__content">
            <div className="content">
              <h2>This is slider 3</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis,
                voluptate quis provident
              </p>
              <Button variant="outlined">SHOP NOW</Button>
            </div>
          </div>
        </div>
      </div>

      <div onClick={handleNextSlide} className="slide__next">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default Slider;
