import React, { useEffect, useState } from 'react'

const Jobs = () => {
  const [jobs, setJobs] = useState('')

  useEffect(() => {
    fetch('../public/jobData.json')
      .then(response => response.json())
      .then(jobs => setJobs(jobs))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  console.log(jobs)

  return (
    <div className='border-2 border-red-500'>
      {jobs.map((job: any) => (
        <div key={job.title}>
          <h1>{job.title}</h1>
          <p>{job.location}</p>
          <p>{job.work_method}</p>
          <p>{job.description}</p>
          <p>{job.salary_range}</p>
        </div>
      ))}
    </div>
  )
}

export default Jobs