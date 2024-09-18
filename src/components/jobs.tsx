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
    fetch('/jobData.json')
    .then(response => response.json())
    .then(data => setJobs(data.data))
    .catch(error => console.log(error))
  }, []);

  console.log(jobs)

 return (
    <div className='border-2 border-red-500'>
      {jobs?.map((job) => (
        <div>
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