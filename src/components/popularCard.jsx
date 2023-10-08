import { star } from "../assets/icons";

const PopularCard = ({ name, price, imgURL }) => {
  return (
    <div className="font-montserrat mx-2">
      <img src={imgURL} alt={name} />
      <div className="flex mt-6">
        <img src={star} alt="*" />
        <p className="ml-2 text-slate-gray text-xl">(4.5)</p>
      </div>
      <h3 className="my-2 text-xl font-semibold">{name}</h3>
      <p className="text-coral-red font-semibold">{price}</p>
    </div>
  );
};

export default PopularCard;
