import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import Img1 from "../../images/slider/img1.jpg";
import Img2 from "../../images/slider/img2.jpg";
import Img3 from "../../images/slider/img3.jpg";
import "./Slider.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <ul
        className="sliderItemList"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <li>
          <img src={Img1} alt="sliderimage_1" className="sliderImg" />
        </li>
        <li>
          <img src={Img2} alt="sliderimage_2" className="sliderImg" />
        </li>
        <li>
          <img src={Img3} alt="sliderimage_3" className="sliderImg" />
        </li>
      </ul>
      <ul className="sliderIcons">
        <li className="sliderIcon" onClick={prevSlide}>
          <WestOutlinedIcon color="secondary" />
        </li>
        <li className="sliderIcon" onClick={nextSlide}>
          <EastOutlinedIcon color="secondary" />
        </li>
      </ul>
    </div>
  );
}

export default Slider;
