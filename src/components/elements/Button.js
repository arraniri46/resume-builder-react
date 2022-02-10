const Button = ({ children, className, onClick, variant }) => {
  const variants = {
    "common-style": `w-36 max-w-xs bg-gray-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded shadow-lg ${className}`,
    "add-style": `max-w-xs bg-gray-600 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full shadow-lg ${className}`,
  };

  const pickedVariant = variants[variant];

  return (
    <>
      <button className={pickedVariant} type="button" onClick={onClick}>
        {variant === "add-style" && (
          <img src="/images/plus.svg" alt="" className="inline"></img>
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
