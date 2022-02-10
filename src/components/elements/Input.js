const Input = ({ children, className, type, onChange, value, required }) => {
  return (
    <>
      <div className={`w-full flex mt-4 ${className}`}>
        <div className="w-full flex flex-col mx-4">
          <label className="mb-2">{children}</label>
          <input
            required={required}
            value={value}
            onChange={onChange}
            type={type}
            name="first-name"
            id="first-name"
            className={`appearance-none block w-full bg-gray-200 text-gray-700 border border-slate-200 rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 `}
          ></input>
        </div>
      </div>
    </>
  );
};

export default Input;
