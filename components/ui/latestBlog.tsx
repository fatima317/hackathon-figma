import { Calendar, PenTool } from "lucide-react";
import Image from "next/image";
import React from "react";

const blogPosts = [
  {
    id: 1,
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog1.png.png",
  },
  {
    id: 2,
    author: "Surfuxion",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog2.png.png",
  },
  {
    id: 3,
    author: "SaberAli",
    date: "21 August, 2020",
    title: "Top Essential Trends in 2021",
    description: "More of this less hello samlande lied much over tightly circa horse taped mightly",
    imgSrc: "/blog3.png.png",
  },
];

const LatestBlog: React.FC = () => {
  return (
    <section className="max-w-[1920px] mx-auto px-4 py-16">
      <h1 className="text-center text-[28px] font-bold text-[#151875] mb-10">Latest Blog</h1>
      <div className="flex flex-wrap justify-center gap-8">
        {blogPosts.map((post, index) => (
          <div
            key={post.id}
            className="bg-white rounded-md shadow-md p-4 flex flex-col items-center"
            style={{ width: "370px", height: "493px" }}
          >
            <Image 
              src={post.imgSrc} 
              alt={post.title} 
              width={370} // Specify image width
              height={255} // Specify image height
              className="h-56 w-full object-cover rounded-md" 
            />
            <div className="mt-4 text-left">
              <div className="text-sm text-[#151875] flex items-center justify-between pr-28">
              <span><PenTool  className="stroke-[#FB2E86] w-4 h-4 "/></span>
                <p>{post.author}</p>
                <span><Calendar  className="stroke-[#FFA454] w-4 h-4 ml-8"/></span>
                <p>{post.date}</p>
              </div>
              <h2 className="text-[16px] font-semibold mt-6" style={{ color: index === 1 ? '#FB2E86' : '#151875' }}>
                {post.title}
              </h2>
              <p className="text-sm text-[#15187567] mt-6 pr-4">{post.description}</p>
              <button className="text-[#15187567] underline mt-6 text-sm" style={{ color: index === 1 ? '#FB2E86' : '#151875' }}>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestBlog;
