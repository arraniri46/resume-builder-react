const Select = ({ className, onChange, children }) => {
  return (
    <>
      <div className={`flex w-full ${className}`}>
        <div className="flex flex-col w-full mx-4 mt-4">
          <label className="mb-2">Educational Stage</label>
          <select
            name=""
            id=""
            onChange={onChange}
            className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-2 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            {children}
          </select>
        </div>
      </div>
    </>
  );
};

export default Select;
