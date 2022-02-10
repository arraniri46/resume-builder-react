import axios from "axios";
import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import Table from "./Table";

const Education = () => {
  const [college, setCollege] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [years, setYears] = useState(0);
  const [major, setMajor] = useState("");
  const [gpa, setGpa] = useState(0);

  const [educationData, setEducationData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { college, collegeName, years, major, gpa };

    setEducationData(data);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://localhost:3001/data",
      headers: { "Content-Type": "application/json" },
      data: { educationData },
    })
      .then((res) => {
        console.log("data disimpan", res);
      })
      .catch((err) => console.log(err.message));
  }, [educationData]);

  return (
    <>
      <h3 className="text-xl">Education</h3>
      <form className="w-full">
        <div className="flex flex-wrap justify-between">
          <Select
            className="xl:w-1/2"
            onChange={(e) => setCollege(e.target.value)}
          >
            <option value="Senior Highscool">Senior Highschool</option>
            <option value="University">University</option>
          </Select>
          <Input
            className="xl:w-1/2"
            value={collegeName}
            onChange={(e) => setCollegeName(e.target.value)}
            required
          >
            University Name
          </Input>
          <Input
            className="xl:w-1/3"
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            required
          >
            Major
          </Input>
          <Input
            className="xl:w-1/3 md:w-1/2"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            required
            type="number"
          >
            Years
          </Input>
          <Input
            className="xl:w-1/3 md:w-1/2"
            value={gpa}
            onChange={(e) => setGpa(e.target.value)}
            required
            type="number"
          >
            GPA
          </Input>
        </div>
        <div className="flex w-full justify-end">
          {/* <button className="w-24 h-12 bg-blue-600 mb-12">Submit</button> */}
          <Button
            variant="add-style"
            className="mr-4 mt-6"
            onClick={(e) => handleSubmit(e)}
          >
            Add
          </Button>
        </div>
      </form>
      <div className="flex mt-8 mx-4">
        <Table value={educationData} />
      </div>
    </>
  );
};

export default Education;
