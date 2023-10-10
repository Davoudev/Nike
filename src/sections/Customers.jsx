import { reviews } from "../constants/index";
import ReviewCard from "../components/reviewCard";

const Customers = () => {
  return (
    <div className="bg-pale-blue p-16 ">
      <h2 className="text-center text-5xl font-bold my-8 max-md:text-3xl">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h2>
      <p className="text-center max-w-lg m-auto info-text">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex justify-evenly mt-16 max-lg:flex-wrap">
        {reviews.map((review) => (
          <ReviewCard key={review.feedback} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Customers;
