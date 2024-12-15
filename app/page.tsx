import DiscountItem from "@/components/ui/discountItem";
import FeaturedProducts from "@/components/ui/featuredProducts";
import Hero from "@/components/ui/hero";
import LatestBlog from "@/components/ui/latestBlog";
import LatestProducts from "@/components/ui/latestProducts";
import MiddleFour from "@/components/ui/middleFour";
import MiddleOne from "@/components/ui/middleOne";
import MiddleThree from "@/components/ui/middleThree";
import MiddleTwo from "@/components/ui/middleTwo";
import TopCategories from "@/components/ui/topCategories";
import TrendingProducts from "@/components/ui/trendingProducts";
import TrendingProductsTwo from "@/components/ui/trendingProductsTwo";


export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <LatestProducts/>
      <MiddleOne />
      <MiddleTwo />
      <TrendingProducts />
      <TrendingProductsTwo />
      <DiscountItem />
      <TopCategories />
      <MiddleThree />
      <MiddleFour />
      <LatestBlog />
    </div>
  );
}
