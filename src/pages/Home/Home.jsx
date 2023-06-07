import Categories from "../../components/Categories/Categories";
import BeInTouch from "../../components/BeInTouch/BeInTouch";
import BestSellingProducts from "../../components/BestSellingProducts/BestSellingProducts";
import Slider from "../../components/Slider/Slider";

function Home() {
  return (
    <div className="home">
      <Slider />
      <BestSellingProducts type="bestSelling" />
      <Categories />
      <BestSellingProducts type="trending" />
      <BeInTouch />
    </div>
  );
}

export default Home;
