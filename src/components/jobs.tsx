import { useEffect, useState } from "react";
import JobCard from "./jobCard";

export interface dataJobType {
  id: number;
  title: string;
  location: string;
  work_method: string;
  description: string;
  time_posted: string;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<dataJobType[]>([]);

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

  console.log(jobs);

  return (
    <div className="grid grid-cols-3 justify-center place-items-center translate-y-20">
      {jobs?.map((job) => (
        <div key={job.id}>
          <JobCard
            title={job.title}
            location={job.location}
            work_method={job.work_method}
            description={job.description}
            time_posted={job.time_posted}
          />
        </div>
      ))}
    </div>
  );
};

export default Jobs;
