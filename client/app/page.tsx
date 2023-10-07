import React from "react";
import Banner from "../components/Banner";
import { AiOutlineArrowRight } from "react-icons/ai";
import "../styles/custom.css";
import ListProductHome from "../components/ListProductHome";
import ToolBar from "../components/ToolBar";
import Product from "../components/Product";
import { ProductProps } from "../typing";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://nextjs13-ecommerce.onrender.com/api/product",
    {
      next: { revalidate: 30 },
    }
  );

  if (!res.ok) {
    console.log("Failed to fetch data");
  }

  const product: ProductProps = await res.json();
  return product;
}

const HomePage = async () => {
  const data = await getData();

  return (
    <>
      <Header />
      <main>
        <Banner />
        {/* INFO: category */}
        <div className="flex max-w-[70%] w-full justify-center mx-auto mt-20 xl:space-x-6 items-center xl:flex-row flex-col relative gap-5">
          <div className="overflow-hidden relative">
            <div className="w-[450px] h-[350px] bg-cate-1 bg-center hover:scale-110 transition-all duration-300 bg-cover" />
            <aside className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></aside>
            <aside className="absolute bottom-0 left-0 p-10 text-white z-20">
              <h3 className="text-xl font-semibold">Khuyễn Mãi 40%</h3>
              <p>Với các món Pizza</p>
              <Link
                href={`/productlist/ao-nam`}
                className="flex items-center space-x-2"
              >
                <span>Click vào để xem chi tiết</span>
                <span>
                  <AiOutlineArrowRight />
                </span>
              </Link>
              
            </aside>
          </div>
          <div className="overflow-hidden relative">
            <div className="w-[450px] h-[350px] bg-cate-2 bg-center bg-no-repeat bg-cover overflow-hidden hover:scale-110 transition-all duration-300" />
            <aside className="absolute top-0 left-0 w-full h-full bg-black opacity-20">
            </aside>
            <aside className="absolute bottom-0 left-1/2 -translate-x-1/2 p-10 text-black flex flex-col items-center justify-between bg-white  w-full mx-auto border z-20">
              <h3 className="text-xl font-semibold">Giờ mở cửa</h3>
              <p>
                Monday - Saturday | 9AM - 1PM
              </p>
              <p>
                Saturday - Sunday | 9AM - 4AM
              </p>
             
              
            </aside>
          </div>
        </div>
        {/* list product */}
          <div className="max-w-[70%] w-full mx-auto mt-20">
            <ToolBar />
          </div>
        <div className="max-w-[80%] flex justify-center w-full mx-auto mt-10">
            <Product data={data} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
