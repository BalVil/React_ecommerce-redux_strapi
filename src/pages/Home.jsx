import { useState } from "react";
import Categories from "components/Categories/Categories";
import BeInTouch from "components/BeInTouch/BeInTouch";
import BestSellingProducts from "components/ProductsBlock/ProductsBlock";
import Slider from "components/Slider/Slider";
import Cookies from "components/Cookies/Cookies";

function Home() {
  const [isOpenCookies, setIsOpenCookies] = useState(true);

  return (
    <>
      <Slider />
      <BestSellingProducts type="best selling" />
      <Categories />
      <BestSellingProducts type="new" />
      <BestSellingProducts type="Elvis-inspired gifts" />
      <BeInTouch />
      {isOpenCookies && <Cookies showCookies={setIsOpenCookies} />}
    </>
  );
}

export default Home;
