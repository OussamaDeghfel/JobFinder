import { BiCheckDouble } from 'react-icons/bi'

const SuccessApply = () => {
  return (
    <div className='flex flex-col w-fit h-fit justify-center items-center mx-auto'>
        <BiCheckDouble size={35} color='blue' />
        <h1>Success Apply</h1>
        <p>
            You have successfully applied for this role
        </p>
    </div>
  )
}

export default SuccessApply