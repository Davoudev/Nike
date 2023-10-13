import Button from "../components/Button";

const Updates = () => {
  return (
    <div className="flex lg:justify-between justify-center p-16 max-sm:pb-24 items-center flex-wrap">
      <h2 className="text-5xl font-semibold lg:max-w-sm leading-normal max-lg:mb-10 max-sm:text-2xl max-sm:text-center">
        Sign Up from <span className="text-coral-red">Updates </span>&
        Newsletter
      </h2>
      <div
        className="flex justify-between lg:w-[30rem] sm:w-full max-sm:flex-col border border-slate-gray
       p-2 pl-4 rounded-full relative"
      >
        <input
          type="text"
          placeholder="subscribe@nike.com"
          className="outline-none text-slate-gray max-sm:p-4 -z-10"
        />
        <div className="max-sm:absolute top-24 left-16 max-sm:pb-10">
          <Button label="Sign up" fullWidth />
        </div>
      </div>
    </div>
  );
};

export default Updates;
