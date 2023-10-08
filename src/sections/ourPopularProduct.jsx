import PopularCard from "../components/popularCard";
import { products } from "../constants/index";

const OurPopularProduct = () => {
  return (
    <div className="px-16 py-32">
      <h2 className="text-5xl font-semibold font-palanquin py-10">
        Our <span className="text-coral-red"> Popular </span>Products
      </h2>
      <p className="max-w-lg text-slate-gray font-montserrat mb-16">
        Experience top-notch quality and style with our sought-after selections.
        Discover a world of comfort, design, and value
      </p>
      <div className="flex w-full justify-between max-lg:flex-wrap max-xl:justify-around max-md:flex-nowrap max-md:flex-col max-md:items-center">
        {products.map((shoeCard) => (
          <PopularCard key={shoeCard} {...shoeCard} />
        ))}
      </div>
    </div>
  );
};

export default OurPopularProduct;
