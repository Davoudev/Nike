import React, { useState } from "react";
import Button from "../components/Button";
import { arrowRight } from "../../../Nike-t/src/assets/icons";
import { shoes, statistics } from "../../../Nike-t/src/constants";
import { bigShoe1 } from "../../../Nike-t/src/assets/images";
import ShoeCard from "../components/ShoeCard";

const OverView = () => {
  const [bigshoeImg, setbigshoeImg] = useState(bigShoe1);
  return (
    <div className="grid grid-cols-11 min-h-screen overflow-x-hidden">
      <div className="mt-24 col-start-1 col-end-6 pl-16 max-xl:col-end-12 max-sm:pl-8">
        <div className="my-10">
          <p className="text-xl font-montserrat text-coral-red">
            Our Summer collections
          </p>
        </div>
        <h1 className="text-8xl font-bold font-palanquin z-10   max-sm:text-6xl ">
          <span className="xl:bg-white xl:whitespace-nowrap relative pr-14">
            The New Arrival
          </span>
          <br />
          <span className="mt-5 inline-block text-coral-red">Nike </span>
          <span> Shoes</span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex flex-wrap">
          {statistics.map((stat) => (
            <div key={stat.label} className="flex flex-col mr-12 mt-12">
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="text-slate-gray font-montserrat leading-7">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center flex-col bg-cover bg-hero  xl:min-h-screen bg-center col-start-6 col-end-12 max-xl:row-start-2 max-xl:row-end-4 max-xl:col-start-1">
        <img
          src={bigshoeImg}
          alt="shoe collection"
          className="object-contain z-10 mt-20"
          width={600}
          height={350}
        />
        <div className="flex mt-10 flex-wrap max-sm:justify-center">
          {shoes.map((shoe) => (
            <div className="m-3" key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(newBig) => {
                  setbigshoeImg(newBig);
                }}
                bigShoeImg={bigshoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverView;
