import { Button } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

// declare module 'dayjs' {
//     interface Dayjs {
//         fromNow(withoutSuffix?: boolean): string
//     }
// }

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
  const [dateAgo, setDateAgo] = useState("");

  const ChangeDateFormat = (time_posted: string) => {
    const date = new Date();
    const changeDate = dayjs(time_posted).format("YYYY-MM-DD HH:mm:ss");
    console.log(changeDate);
    // const dateAgoCalucated = dayjs(changeDate).fromNow()
    console.log(date);
    // setDateAgo(dateAgoCalucated)
  };

  useEffect(() => {
    ChangeDateFormat(time_posted);
  }, [time_posted]);

  return (
    <div className="border-2 border-blue-100 w-96 space-y-4 rounded-md p-4 m-4 shadow-md">
      <div className="flex items-center text-gray-500">
        <span>{dateAgo}</span>
        <span className="px-4 font-bold">.</span>
        <span>{work_method}</span>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
      <div className="flex justify-between">
        <h1 className="text-blue-600 text-sm font-bold">{location}</h1>
        <Button type="primary" size="large">Apply Now</Button>
      </div>
    </div>
  );
};

export default JobCard;
