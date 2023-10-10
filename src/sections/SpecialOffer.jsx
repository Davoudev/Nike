import Button from "../components/Button";
import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <div className="px-16 py-40 flex max-lg:flex-wrap-reverse max-lg:justify-center items-center justify-between">
      <div className="">
        <img src={offer} alt="offer" width={650} height={500} />
      </div>
      <div>
        <h2 className="text-5xl font-semibold my-5">
          <span className="text-coral-red">Special </span>Offer
        </h2>
        <p className="info-text mt-5 max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-5 max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="my-8 flex flex-wrap gap-4">
          <Button label="view details" iconURL={arrowRight} />
          <Button
            label="learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textcolor="text-slate-black"
          />
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
