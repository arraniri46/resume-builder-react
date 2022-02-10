const Navbar = () => {
  return (
    <>
      <div className="mx-auto bg-gray-800">
        <div className="flex flex-row justify-between p-4">
          <h1 className="text-2xl text-white">Resume Builder</h1>
          <div className="flex justify-center space-x-2">
            <span className="text-xl text-white">Login</span>
            <img src="/images/user.svg" alt=""></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
