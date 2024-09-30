import { Switch } from 'antd'
import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NavBar = () => {
const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])
  return (
    <div className='flex flex-col h-28 w-full dark:bg-slate-800 bg-blue-500 p-5 rounded-b-full'>
    <div className="flex w-[980px] h-12 justify-between items-center m-auto ">
        <h1 className="text-2xl font-bold text-white cursor-pointer">
            <Link to="/">
            JobFinder
            </Link></h1>
        <div className="flex space-x-2">
          <span className="">
            {" "}
            <BiSun size={20} color="white" />{" "}
          </span>
          <Switch size="default" onClick={() => setDarkMode(!darkMode)} />
          <span className="">
            {" "}
            <BiMoon size={20} color="white" />{" "}
          </span>
        </div>
      </div>
      </div>
  )
}

export default NavBar