import { Switch } from 'antd'
import React from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'

const NavBar = () => {
  return (
    <div className='flex flex-col h-28 w-full bg-blue-500 p-5 rounded-b-full'>
    <div className="flex w-[980px] h-12 justify-between items-center m-auto ">
        <h1 className="text-2xl font-bold text-white">JobFinder</h1>
        <div className="flex space-x-2">
          <span className="">
            {" "}
            <BiSun size={20} color="white" />{" "}
          </span>
          <Switch defaultChecked size="default" />
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