// import { Switch } from "antd";
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from "react-icons/bi";
import { Link } from 'react-router-dom';

const NavBar = () => {

  const [sun, setSun] = useState<boolean | null>(null);
  const [moon, setMoon] = useState<boolean | null>(null);
  const changeTheme = () => {
    const darkMode = localStorage.getItem("theme") === "light";
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setMoon(true);
      setSun(false);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setMoon(false);
      setSun(true);
    }
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setMoon(true);
      setSun(false);
    } else {
      document.documentElement.classList.remove("dark");
      setMoon(false);
      setSun(true);
    }

  }, [])

  return (
    <div className="flex flex-col h-28 w-full dark:bg-slate-800 bg-blue-500 p-5 rounded-b-full">
      <div className="flex w-[90%] h-12 justify-between items-center m-auto">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
          <Link to="/">JobFinder</Link>
          {/* JobFinder */}
        </h1>
        <div className="flex space-x-2">
          {sun && (<span className="cursor-pointer" onClick={() => changeTheme()}>
            {" "}
            <BiSun size={20} color="white" />{" "}
          </span>)}
          
          {/* <Switch size="default"  /> */}
          {moon && (
            <span className="cursor-pointer" onClick={() => changeTheme()}>
            {" "}
            <BiMoon size={20} color="white" />{" "}
          </span>
          )} 
        </div>
      </div>
    </div>
  );
};

export default NavBar;
