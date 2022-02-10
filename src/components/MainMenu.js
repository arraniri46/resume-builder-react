import { useState } from "react";
import Button from "./elements/Button";
import Education from "./Education";
import ListResume from "./ListResume";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";

const renderCustomComponent = (step) => {
  switch (step) {
    case 0:
      return <ListResume />;

    case 1:
      return <PersonalDetails />;

    case 2:
      return <Education />;

    case 3:
      return <Experience />;

    default:
      return "";
  }
};

const MainMenu = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    setStep(step + 1);
    return step;
  };

  const prevStep = () => {
    setStep(step - 1);
    return step;
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col md:w-full lg:w-4/6 xl:w-4/6 2xl:w-3/6 min-h-[786px] items-start border border-slate-200 mt-6 p-8 absolute shadow-md shadow-gray-200">
          <h2 className="text-3xl my-2 font-quicksand">Main Menu</h2>
          <div className="flex flex-col justify-center">
            {/* <ListResume /> */}
            {/* <PersonalDetails /> */}
            {/* <Education /> */}
            {renderCustomComponent(step)}
          </div>
          <div className="flex w-full justify-between">
            {step > 0 && (
              <Button
                variant="common-style"
                className="mt-6 self-start absolute bottom-6 left-6"
                onClick={() => prevStep()}
              >
                Back
              </Button>
            )}

            <Button
              variant="common-style"
              className="mt-6 self-end absolute bottom-6 right-6"
              onClick={() => nextStep()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainMenu;
