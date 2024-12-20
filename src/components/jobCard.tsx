import { Button } from "antd";
import dayjs from "dayjs";
import { useEffect } from "react";
import relativeTime from "dayjs/plugin/relativeTime";
import duration from "dayjs/plugin/duration";
import { Link } from "react-router-dom";

export interface jobData {
  title: string;
  location: string;
  work_method: string;
  description: string;
  time_posted: {
    seconds: number;
    nanoseconds: number;
  };
}

const JobCard = ({
 
  title,
  location,
  work_method,
  description,
  time_posted,
}: jobData) => {
  
  dayjs.extend(relativeTime);
  dayjs.extend(duration);

  // const ChangeDateFormat = (time_posted: string) => {
  //   const now = dayjs();
  //   const postDate = dayjs(time_posted);

  //   const hoursDifference = now.diff(postDate, "hour");
  //   const daysDifference = now.diff(postDate, "day");
  //   const monthsDifference = now.diff(postDate, "month");

  //   let displayTime = "";

  //   if (hoursDifference < 24) {
  //     displayTime = `${hoursDifference} hour${
  //       hoursDifference === 1 ? "" : "s"
  //     } ago`;
  //   } else if (daysDifference < 30) {
  //     displayTime = `${daysDifference} day${
  //       daysDifference === 1 ? "" : "s"
  //     } ago`;
  //   } else {
  //     displayTime = `${monthsDifference} month${
  //       monthsDifference === 1 ? "" : "s"
  //     } ago`;
  //   }

  //   setDateAgo(displayTime);
  // };


  const calculateTime = (nanoseconds:number, seconds:number) => {
    const currentTime = new Date()
    const convertedDate = new Date(seconds * 1000 + nanoseconds/1e6)
    const timeDiff = currentTime.getTime() - convertedDate.getTime()
    const days = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    let displayTime = "";
    if (days < 1) {
      displayTime = "today";
    } else if (days < 7) {
      displayTime = days + "d ago";
    } else if (days < 30) {
      const weeks = Math.floor(days / 7);
      displayTime = weeks + "weeks ago";
    } else if (days < 365) {
      const months = Math.floor(days / 30);
      displayTime = months + "months ago";
    } else {
      const years = Math.floor(days / 365);
      displayTime = years + "years ago";
    }
    return displayTime;
  }

  useEffect(() => {
    calculateTime(time_posted.nanoseconds, time_posted.seconds);
  }, [time_posted]);

  const saveJobData = () => {
      localStorage.setItem("title", title);
      localStorage.setItem("descrption", description)
      localStorage.setItem("work_method", work_method)
      localStorage.setItem("location", location)
  }

  return (
    <div className="flex flex-col border-2 dark:bg-slate-800 dark:text-gray-200 dark:border-slate-600 justify-between border-blue-100 w-96 h-72 rounded-md p-4 m-4 shadow-md">
      <div className="flex flex-col space-y-4">
      <div className="flex items-center text-gray-500">
        <span>{calculateTime(time_posted.nanoseconds, time_posted.seconds)}</span>
        <span className="px-4 font-bold">.</span>
        <span>{work_method}</span>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-blue-600 text-sm font-bold dark:text-blue-300">{location}</h1>

        <Button type="primary" size="large" className="dark:bg-blue-500" onClick={saveJobData}>
          <Link to="/applyingForm">Apply Now</Link>
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
