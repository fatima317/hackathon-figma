import Hero from "@/components/ui/hero";
import LatestBlog from "@/components/ui/latestBlog";
import MiddleFour from "@/components/ui/middleFour";
import MiddleOne from "@/components/ui/middleOne";
import MiddleThree from "@/components/ui/middleThree";
import MiddleTwo from "@/components/ui/middleTwo";
import TopCategories from "@/components/ui/topCategories";


export default function Home() {
  return (
    <div>
      <Hero />
      <MiddleOne />
      <MiddleTwo />
      <TopCategories />
      <MiddleThree />
      <MiddleFour />
      <LatestBlog />
    </div>
  );
}
