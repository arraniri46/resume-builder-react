import Input from "./elements/Input";
import { useEffect, useState } from "react";
import axios from "axios";

const PersonalDetails = () => {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [selfDescription, setSelfDescription] = useState("");
  const [personalDetails, setPersonalDetails] = useState("");

  const handleNext = (e) => {
    e.preventDefault();

    const personalInfo = {
      firstName,
      lastName,
      address,
      phone,
      email,
      selfDescription,
    };

    setPersonalDetails(personalInfo);

    console.log(personalDetails);
  };

  const URL = "http://localhost:3001/";

  useEffect(() => {
    axios
      .post(URL + "data", { personalDetails: personalDetails })
      .then((res) => {
        console.log("Data Disimpan", res);
      })
      .catch((err) => console.log(err.message));
  }, [personalDetails]);

  return (
    <>
      <h3 className="text-xl">Personal Details</h3>
      <form className="w-full" onSubmit={handleNext}>
        <div className="flex flex-wrap sm:flex-col md:flex-col lg:flex-row 2xl:flex-row justify-start">
          <Input
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            required
            className="xl:w-1/2"
          >
            Firstname
          </Input>
          <Input
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            required
            className="xl:w-1/2"
          >
            Lastname
          </Input>
          <Input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="xl:w-1/2"
          >
            Address
          </Input>
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            type="number"
            className="xl:w-1/2"
          >
            Phone
          </Input>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="xl:w-1/2"
          >
            Email
          </Input>
          <div className="mt-4 mx-4 flex flex-col w-full ">
            <label className="mb-2">Upload your Picture</label>
            <input
              type="file"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
          {/* <div className="w-full mx-4">
            <DragUploadFile />
          </div> */}
          <div className="w-full mt-6 ml-4 flex flex-col">
            <label>Self Description</label>
            <textarea
              value={selfDescription}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-6 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              rows={4}
              onChange={(e) => setSelfDescription(e.target.value)}
            ></textarea>
          </div>
          <button className="w-24 h-12 bg-blue-600 mb-12">Submit</button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
