import { Switch } from 'antd'
import { BiMoon, BiSun } from 'react-icons/bi'
import Filters from './filters'

const NavBar = () => {
  return (
    <div className='flex flex-col w-full bg-gray-500 p-5 rounded-b-full'>
        <div className='flex w-[980px] h-12 justify-between items-center m-auto '>
        <h1 className='text-2xl font-bold text-white'>JobFinder</h1>
        <div className='flex space-x-2'>
            <span className=''> <BiSun size={20} color='white' /> </span>
            <Switch defaultChecked size='default' />
            <span className=''> <BiMoon size={20} color='white' /> </span>
        </div>
        </div>
        <div className='  items-center m-auto w-[50%]'>
            <Filters />
        </div>
    </div>
  )
}

export default NavBar