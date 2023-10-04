const ShoeCard = ({ imgURL, bigShoeImg, changeBigShoeImg }) => {
  const changeBigShoeImgHandler = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImg(imgURL.bigShoe);
    }
  };
  return (
    <div
      className={`cursor-pointer rounded-xl border-2  ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
    >
      <div onClick={changeBigShoeImgHandler}>
        <img
          src={imgURL.thumbnail}
          alt="mini Image"
          className="bg-cover bg-card bg-center flex items-center justify-center sm:w-40 sm:h-40 rounded-md  p-2"
          width={125}
          height={105}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
