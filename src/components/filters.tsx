import { Form, Input, message, Select } from "antd";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import Jobs, { dataJobType } from "./jobs";
import { Route, Routes } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const Filters = () => {
  const [jobs, setJobs] = useState<dataJobType[]>([]);
  const [titleSearch, setTitleSearch] = useState<string | undefined>("");
  const [locationSearch, setLocationSearch] = useState<string | undefined>("");
  const [workTypeSearch, setWorkTypeSearch] = useState<string | undefined>("");

  const handleTitleChange = (value?: string) => {
    setTitleSearch(value);
  };
  const handleLocationChange = (value?: string) => {
    setLocationSearch(value);
  };
  const handleWorkTypeChange = (value?: string) => {
    console.log(value);
    setWorkTypeSearch(value);
  };

  // console.log(valueSearch)
  // fetch job list localy from jsondata 
  // useEffect(() => {
  //   fetch("././jobData.json")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       return response.json();
  //     })
  //     .then((data) => setJobs(data))
  //     .catch((error) => console.log("Fetch error: ", error));
  // }, []);

  // fetch jobs from backend endpoint

  // useEffect(() => {
  //   fetch('http://localhost:5000/api/jobs')  // URL of the backend API
  //     .then((response) => response.json())
  //     .then((data) => setJobs(data))
  //     .catch((error) => console.error('Error fetching jobs:', error));
  // },[])

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const jobsCollection = collection(db, "jobs");
        const snapshot = await getDocs(jobsCollection);
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          title: doc.data().title || '',
          location: doc.data().location || '',
          work_method: doc.data().work_method || '',
          description: doc.data().description || '',
          time_posted: doc.data().time_posted || '',
        }));
        setJobs(data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error:any) {
        message.error("Error fetching jobs:", error);
      }
    }

    fetchJobs()
    
  },[])

  return (
    <>
      <div>
        <Form
          className="flex translate-y-3 px-5 dark:bg-slate-500 bg-white h-20 pt-4 rounded-md justify-rounded items-center w-full shadow-lg"
          // onFinish={searchByFilter}
        >
          <Form.Item className="p-2 border-r-2 dark:border-slate-700">
            <Input
              type="text"
              placeholder="Filter By Title..."
              prefix={<BiSearch size={20} color="blue" />}
              allowClear
              onChange={(e) => handleTitleChange(e.target.value)}
              className=" dark:bg-slate-300 dark:text-black"
            />
          </Form.Item>

          <Form.Item className="p-2 border-r-2 dark:border-slate-700">
            <Input
              type="text"
              placeholder="Filter By Location..."
              prefix={<FaLocationDot size={20} color="blue" />}
              allowClear
              onChange={(e) => handleLocationChange(e.target.value)}
              className=" dark:bg-slate-300 dark:text-black"
            />
          </Form.Item>

          <Form.Item className="p-2 ">
            <div>
              <Select
                placeholder="Filter By Work Type..."
                options={[
                  {
                    value: "Full-time",
                    label: "Full Time",
                  },
                  {
                    value: "Part-time",
                    label: "Part Time",
                  },
                  {
                    value: "Remote",
                    label: "Remote",
                  },
                  {
                    value: "Intern",
                    label: "Intern",
                  },
                ]}
                onChange={handleWorkTypeChange}
                allowClear
                
              />
            </div>
          </Form.Item>
        </Form>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <Jobs
              jobs={jobs}
              titleSearch={titleSearch}
              locationSearch={locationSearch}
              workTypeSearch={workTypeSearch}
            />
          }
        />
      </Routes>
    </>
  );
};

export default Filters;
