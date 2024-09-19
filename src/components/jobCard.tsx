import { Button } from "antd";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

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
  dayjs.extend(relativeTime);
  dayjs.extend(duration);
  dayjs.extend(utc);
dayjs.extend(timezone);

  const ChangeDateFormat = (time_posted: string) => {
    const now = dayjs();
    const postDate = dayjs(time_posted).tz('UTC');
    console.log("now", now);

    const hoursDifference = now.diff(postDate, "hour");
    const daysDifference = now.diff(postDate, "day");
    const monthsDifference = now.diff(postDate, "month");
    console.log("hoursDifference", hoursDifference);

    let displayTime = "";

    if (hoursDifference < 24) {
      displayTime = `${hoursDifference} hour${
        hoursDifference === 1 ? "" : "s"
      } ago`;
    } else if (daysDifference < 30) {
      displayTime = `${daysDifference} day${
        daysDifference === 1 ? "" : "s"
      } ago`;
    } else {
      displayTime = `${monthsDifference} month${
        monthsDifference === 1 ? "" : "s"
      } ago`;
    }

    // const dateAgoCalucated = dayjs(changeDate).fromNow()
    // console.log(dateAgoCalucated);
    setDateAgo(displayTime);
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
        <Button type="primary" size="large">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
