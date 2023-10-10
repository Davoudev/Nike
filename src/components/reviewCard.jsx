import { star } from "../assets/icons";

const ReviewCard = ({ profileIMG, feedback, customerName, rating }) => {
  return (
    <div className="flex flex-col items-center max-lg:my-6">
      <img
        src={profileIMG}
        className="rounded-full"
        width={120}
        height={120}
        alt="customer"
      />
      <p className="max-w-sm info-text text-center my-4">{feedback}</p>
      <div className="flex gap-3">
        <img src={star} alt="*" />
        <span className="info-text">({rating})</span>
      </div>
      <h3 className="my-3 text-3xl font-bold font-palanquin">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
