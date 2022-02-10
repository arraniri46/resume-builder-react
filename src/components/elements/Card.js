const Card = ({ children }) => {
  return (
    <>
      <div className="flex w-56 h-48 justify-center items-center shadow-lg">
        <h3 className="text-2xl">{children}</h3>
      </div>
    </>
  );
};

export default Card;
