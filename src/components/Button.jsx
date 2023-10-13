const Button = ({
  label,
  iconURL,
  backgroundColor,
  borderColor,
  textcolor,
  fullWidth,
}) => {
  return (
    <button
      className={`rounded-full font-palanquin py-3 px-7 text-xl border flex items-center justify-center ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textcolor}`
          : "bg-coral-red text-white"
      } ${fullWidth && "w-full"} `}
    >
      {label}
      {iconURL && <img src={iconURL} alt="arrow right icon" className="pl-4" />}
    </button>
  );
};

export default Button;
