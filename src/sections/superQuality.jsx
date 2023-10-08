import Button from "../components/Button";
import { arrowRight } from "../assets/icons/index";
import { shoe8 } from "../assets/images";

const superQuality = () => {
  return (
    <div className="p-16 flex  justify-between max-lg:flex-wrap max-lg:justify-center">
      <div>
        <h2 className="text-5xl font-bold leading-tight font-palanquin max-lg:text-4xl">
          We Provide You <br /> <span className="text-coral-red">Super </span>
          <span className="text-coral-red">Quality</span> Shoes
        </h2>
        <p className="lg:max-w-lg my-4 info-text ">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="lg:max-w-lg my-6 info-text ">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className="my-5 flex max-lg:justify-center">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={shoe8} alt="" className="object-contain" width={500} />
      </div>
    </div>
  );
};

export default superQuality;
