const Button = ({ label, iconURL }) => {
  return (
    <button className="rounded-full bg-coral-red text-white font-palanquin py-3 px-7 text-xl border-l flex items-center justify-center">
      {label}
      <img src={iconURL} alt="arrow right icon" className="pl-4" />
    </button>
  );
};

export default Button;
