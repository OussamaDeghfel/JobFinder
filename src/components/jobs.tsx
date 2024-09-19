// import { useEffect, useState } from "react";
import { useMemo } from "react";
import JobCard from "./jobCard";

export interface dataJobType {
  id: number;
  title: string;
  location: string;
  work_method: string;
  description: string;
  time_posted: string;
}
interface JobsProps {
  valueSearch?: string
  jobs?: dataJobType[];
}


const Jobs:React.FC<JobsProps> = ({ jobs, valueSearch }) => {

  useMemo(() => {
    if (valueSearch) {
      const filteredJobs = jobs?.filter((job) => {
        return job.title.toLowerCase().includes(valueSearch.toLowerCase());
      });
      jobs = filteredJobs;
    }
  },[valueSearch])

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 justify-center place-items-center translate-y-20">

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
