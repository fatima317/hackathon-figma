import Footer from "@/components/ui/footer";
import Hero from "@/components/ui/hero";
import LatestBlog from "@/components/ui/latestBlog";
import MiddleOne from "@/components/ui/middleOne";
import MiddleTwo from "@/components/ui/middleTwo";


export default function Home() {
  return (
    <div>
      <Hero />
      <MiddleOne />
      <MiddleTwo />
      <LatestBlog />
      <Footer />
    </div>
  );
}
