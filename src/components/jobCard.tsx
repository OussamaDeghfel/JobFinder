
interface jobData {
  title: string;
  location: string;
  work_method: string;
  description: string;
  time_posted: string;
}

const JobCard = ({
  title,
  location,
  work_method,
  description,
  time_posted,
}: jobData) => {
  return (
    <div className="border-2 border-blue-100 w-96 space-y-4 rounded-md p-4 m-4 shadow-md">
      <div className="flex items-center text-gray-500">
        <span>{time_posted}</span>
        <span className="px-4 font-bold">.</span>
        <span>{work_method}</span>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <div>
        <p className="text-gray-500">{description}</p>
      </div>
      <h1 className="text-blue-600 font-bold">{location}</h1>
    </div>
  );
};

export default JobCard;
