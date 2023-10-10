const ServiceCard = ({ subtext, imgURL, label }) => {
  return (
    <div className=" flex-1 shadow-3xl px-10 py-14 rounded-2xl  sm:min-w-[350px] ">
      <div>
        <img className="bg-coral-red rounded-full p-2" src={imgURL} alt="" />
      </div>
      <h3 className="text-2xl font-bold my-4 font-montserrat leading-7">
        {label}
      </h3>
      <p className="font-montserrat  text-slate-gray text-lg leading-normal">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
