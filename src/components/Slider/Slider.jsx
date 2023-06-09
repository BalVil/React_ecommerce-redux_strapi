import { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";

import Img1 from "../../images/slider/img1.jpg";
import mobileImg1_sm from "../../images/slider/mobileImg1_sm.jpg";
import mobileImg1_lg from "../../images/slider/mobileImg1_lg.jpg";
import Img2 from "../../images/slider/img2.jpg";
import mobileImg2_sm from "../../images/slider/mobileImg2_sm.jpg";
import mobileImg2_lg from "../../images/slider/mobileImg2_lg.jpg";
import Img3 from "../../images/slider/img3.jpg";
import mobileImg3_sm from "../../images/slider/mobileImg3_sm.jpg";
import mobileImg3_lg from "../../images/slider/mobileImg3_lg.jpg";

import styles from "./Slider.module.scss";

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className={styles.slider}>
      <ul
        className={styles.itemList}
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        <li>
          <picture>
            <source
              srcSet={Img1}
              type="image/jpeg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${mobileImg1_sm} 1x, ${mobileImg1_lg} 2x`}
              type="image/jpeg"
              media="(max-width: 1199px)"
            />
            <img src={Img1} alt="Elvis_inspired_img1" className={styles.img} />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={Img2}
              type="image/jpeg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${mobileImg2_sm} 1x, ${mobileImg2_lg} 2x`}
              type="image/jpeg"
              media="(max-width: 1199px)"
            />
            <img
              src={Img2}
              alt="Elvis_inspired_img2"
              className={styles.img}
              loading="lazy"
            />
          </picture>
        </li>
        <li>
          <picture>
            <source
              srcSet={Img3}
              type="image/jpeg"
              media="(min-width: 1200px)"
            />
            <source
              srcSet={`${mobileImg3_sm} 1x, ${mobileImg3_lg} 2x`}
              type="image/jpeg"
              media="(max-width: 1199px)"
            />
            <img
              src={Img3}
              alt="Elvis_inspired_img3"
              className={styles.img}
              loading="lazy"
            />
          </picture>
        </li>
      </ul>
      <ul className={styles.icons}>
        <li className={styles.icon} onClick={prevSlide}>
          <WestOutlinedIcon color="secondary" />
        </li>
        <li className={styles.icon} onClick={nextSlide}>
          <EastOutlinedIcon color="secondary" />
        </li>
      </ul>
    </div>
  );
}

export default Slider;
