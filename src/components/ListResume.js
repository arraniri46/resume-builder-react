import Card from "./elements/Card";

const ListResume = () => {
  return (
    <>
      <div className="flex flex-start mt-6">
        <div className="flex flex-start items-center space-x-10">
          <ul>
            <li>
              <Card>Resume 1</Card>
            </li>
          </ul>
          <div>
            <button className="shadow-sm hover:border-2 rounded-full">
              <img src="/images/plus-circle.svg" alt="" className="w-28 h-28" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListResume;
