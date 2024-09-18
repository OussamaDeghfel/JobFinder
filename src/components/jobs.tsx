import { useEffect, useState } from 'react'

interface dataJobType {
  title: string
  location: string
  work_method: string
  description: string
  salary_range: string
}

const Jobs = () => {
  const [jobs, setJobs] = useState<dataJobType[]>([])
  

  useEffect(() => {
    fetch('./local-Data/jobData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setJobs(data))
      .catch(error => console.log('Fetch error: ', error));
  }, []);

  console.log(jobs)

 return (
    <div className='border-2 border-red-500'>
      {jobs?.map((job) => (
        <div key={job.title}>
          <p>{job.title}</p>
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