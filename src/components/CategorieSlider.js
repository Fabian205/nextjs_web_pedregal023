import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import img001 from "public/assets/img001.jpeg";
import img002 from "public/assets/img002.jpeg";
import img003 from "public/assets/img003.jpeg";
import img004 from "public/assets/img004.jpeg";
import img005 from "public/assets/img005.jpg";
import img006 from "public/assets/img006.jpg";
import img17 from "public/assets/17.png";
import WebP from "public/assets/web-personal.jpg";
import WebPr from "public/assets/web-promoc.jpg";
import WebR from "public/assets/web-responsive.jpg";
import Button from "./Button";
import Image from "next/image";

const categories = [
  {
    id: 1,
    name: "img005",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    image: img005,
    btnText: "Explore",
  },
  {
    id: 2,
    name: "img002",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    image: img002,
    btnText: "Explore",
  },
  {
    id: 3,
    name: "img003",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    image: img003,
    btnText: "Explore",
  },
  {
    id: 4,
    name: "img004",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
    image: img004,
    btnText: "Explore",
  },
];

export default function CategorieSlider() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      navigation={true}
      modules={[Navigation]}
      breakpoints={{
        700: {
          slidesPerView: 1,
        },
      }}
      className="categorieSlider min-h-[660px]"
    >
      {categories.map((categorie) => {
        return (
          <>
            <SwiperSlide
              key={categorie.id}
              className="bg-slate-300 shadow-md min-h-[480px] rounded-md py-16 px-8 mt-10"
            >
              <div className="flex flex-col gap-y-5 md:flex-row md:gap-x-16">
                <Image
                  src={categorie.image}
                  height={900}
                  width={1300}
                  alt={categorie.name}
                  priority={true}
                />
                <div className="flex flex-col gap-y-5">
                  <div className="text-2xl font-medium flex gap-x-2 items-center">
                    {categorie.name}
                    <div className="h-[3px] w-[40px] bg-green-700 rounded"></div>
                  </div>
                  <div className="text-[20px] text-gray-600">
                    {categorie.description}
                  </div>
                  <div>
                    <Button link="/" text={categorie.btnText} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </>
        );
      })}
    </Swiper>
  );
}

//export default CategorieSlider;
