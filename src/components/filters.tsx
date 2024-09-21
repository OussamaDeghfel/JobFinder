import { Button, Form, Input, Select } from "antd";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Jobs, { dataJobType } from "./jobs";

const Filters = () => {
  const [jobs, setJobs] = useState<dataJobType[]>([]);
  const [titleSearch, setTitleSearch] = useState<string>("");
  const [locationSearch, setLocationSearch] = useState<string>("");

  const handleTitleChange = (value:string) => {
    setTitleSearch(value);
  }
  const handleLocationChange = (value:string) => {
    setLocationSearch(value);
  }

  // console.log(valueSearch)

  useEffect(() => {
    fetch("././jobData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setJobs(data))
      .catch((error) => console.log("Fetch error: ", error));
  }, []);


  return (
    <>
      <div>
        <Form
          className="flex translate-y-3 px-5 bg-white h-20 pt-4 rounded-md justify-rounded items-center w-full shadow-lg"
          // onFinish={searchByFilter}
        >
          <Form.Item className="p-2 border-r-2">
            <Input
              type="text"
              placeholder="Filter By Title..."
              prefix={<BiSearch size={20} color="blue" />}
              allowClear
              onChange={(e) => handleTitleChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item className="p-2 border-r-2">
            <Input
              type="text"
              placeholder="Filter By Location..."
              prefix={<FaLocationDot size={20} color="blue" />}
              allowClear
              onChange={(e) => handleLocationChange(e.target.value)}
            />
          </Form.Item>

          <Form.Item className="p-2 border-r-2">
            <div>
              <Select
                defaultValue={"fullTime"}
                options={[
                  {
                    value: "fullTime",
                    label: "Full Time",
                  },
                  {
                    value: "partTime",
                    label: "Part Time",
                  },
                ]}
              />
            </div>
          </Form.Item>

          <Form.Item className="p-2">
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div>
        <Jobs jobs={jobs} titleSearch={titleSearch} locationSearch={locationSearch} />
      </div>
    </>
  );
};

export default Filters;
