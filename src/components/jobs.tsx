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
  titleSearch?: string
  locationSearch?: string
  workTypeSearch?: string
  jobs?: dataJobType[];
}


const Jobs:React.FC<JobsProps> = ({ jobs, titleSearch, locationSearch, workTypeSearch }) => {

  useMemo(() => {
    if (titleSearch) {
      const filteredJobs = jobs?.filter((job) => {
        return job.title.toLowerCase().includes(titleSearch.toLowerCase());
      });
      jobs = filteredJobs;
    }
    if (locationSearch) {
      const filteredJobs = jobs?.filter((job) => {
        return job.location.toLowerCase().includes(locationSearch.toLowerCase());
      });
      jobs = filteredJobs;
    }
    if (workTypeSearch) {
      const filteredJobs = jobs?.filter((job) => {
        return job.work_method.toLowerCase().includes(workTypeSearch.toLowerCase());
      });
      jobs = filteredJobs;
    }
  },[titleSearch, locationSearch, workTypeSearch])

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
