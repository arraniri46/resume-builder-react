import Input from "./elements/Input";

const Experience = () => {
  return (
    <>
      <h3 className="text-xl">Experiences</h3>
      <form className="w-full">
        <div className="flex flex-wrap sm:flex-col md:flex-col lg:flex-row 2xl:flex-row justify-start">
          <Input className="xl:w-1/2">Company Name</Input>
          <Input className="xl:w-1/2">Position</Input>
          <Input className="xl:w-1/2">Years</Input>
          <div className="w-full mt-6 ml-4 flex flex-col">
            <label>Job Description</label>
            <textarea
              value=""
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows={4}
              onChange=""
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default Experience;
