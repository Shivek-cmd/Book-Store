import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Cards from "./Cards";
import axios from "axios";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBook();
  }, []);
  const filteredData = book.filter((list) => list.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut,
            incidunt!
          </p>
        </div>

        <div>
          <div className="slider-container">
            <Slider {...settings}>
              {filteredData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
export default Freebook;
