import Categories from "../../components/Categories/Categories";
import BeInTouch from "../../components/BeInTouch/BeInTouch";
import BestSellingProducts from "../../components/BestSellingProducts/BestSellingProducts";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div className="home">
      <Slider />
      <BestSellingProducts type="best selling" />
      <Categories />
      <BestSellingProducts type="new" />
      <BestSellingProducts type="Elvis-inspired gifts" />
      <BeInTouch />
    </div>
  );
}

export default Home;
