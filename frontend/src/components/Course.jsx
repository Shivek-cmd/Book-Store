import React from "react";
import List from "../../public/list.json";
import Cards from "../components/Cards.jsx";
import { Link } from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4  ">
        <div className="mt-28 text-center ">
          <h1 className="text-2xl   md:text-4xl ">
            We're delighted to have you{" "}
            <span className="text-pink-500">HERE!)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
            aspernatur voluptatem dicta ipsum inventore, velit mollitia nulla
            eos maiores odit iste ad hic magnam quidem, ex quia voluptate enim
            animi eum earum delectus. Soluta maiores dolor ea consequatur
            delectus repellat officiis placeat, deserunt perspiciatis, illo odio
            alias. Commodi, sapiente voluptas?
          </p>
          <Link to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {List.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
