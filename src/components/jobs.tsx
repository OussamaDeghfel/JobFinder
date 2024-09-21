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
      // eslint-disable-next-line react-hooks/exhaustive-deps
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
    <div className="grid lg:content-center sm:grid-cols-2 lg:grid-cols-3 justify-center translate-y-20">
      {jobs?.length == 0 ? (
        <div className="flex flex-col justify-center items-center w-full h-full space-y-5 border-2 border-blue-500">
          <h1 className="text-3xl font-bold">No Jobs Matches Your Searching</h1>
          <p className="text-base text-center">
            Sorry, we couldn't find any jobs that match your search. Try adjusting your filters or keywords and check back later, as new opportunities are posted regularly!
          </p>
        </div>
      ) : (
        jobs?.map((job) => (
          <div key={job.id}>
            <JobCard
              title={job.title}
              location={job.location}
              work_method={job.work_method}
              description={job.description}
              time_posted={job.time_posted}
            />
          </div>
        ))
      )}
      
      {/* {jobs?.map((job) => (
        <div key={job.id}>
          <JobCard
            title={job.title}
            location={job.location}
            work_method={job.work_method}
            description={job.description}
            time_posted={job.time_posted}
          />
        </div>
      ))} */}
    </div>
  );
};

export default Jobs;
