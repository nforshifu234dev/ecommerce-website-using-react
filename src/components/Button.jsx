const Button = ({ label, iconURL, backgroundColor, textColor, borderColor, fullWidth }) => {
  // const buttonClasses = `flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none rounded-full ${backgroundColor ? `${backgroundColor} ${textColor}` : "bg-coral-red text-white"} ${borderColor ? borderColor : 'border-black'}`;

  return (
    <button className={

      `flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none capitalize
      ${
        backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor}`
        : "bg-coral-red text-white border-coral-red"
      } rounded-full ${fullWidth && 'w-full'}"}
      `

    }>
      {label}
      {iconURL && <img src={iconURL} className="ml-2 rounded-full w-5 h-5 uppercase" alt="Icon" />}
    </button>
  );
};

export default Button;
