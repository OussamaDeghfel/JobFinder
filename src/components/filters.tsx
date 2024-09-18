import { Button, Form, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Filters = () => {
  return (
    <Form className="flex bg-white h-16 pt-4 rounded-md justify-evenly items-center w-full border-2 border-black">
      
      <Form.Item>
        <div className="flex m-2 space-x-2">
          <BiSearch size={20} color="blue" />
          <input type="text" placeholder="Filter By Title..." />
        </div>
      </Form.Item>
        
      <Form.Item>
        <div className="flex space-x-2">
          <FaLocationDot size={20} color="blue" />
          <input type="text" placeholder="Filter By Location..." />
        </div>
      </Form.Item>
      
      <Form.Item>
        <div className="w-ful">
          <Select defaultValue={"fullTime"}>
            <Select.Option value="fullTime">Full Time</Select.Option>
            <Select.Option value="partTime">Part Time</Select.Option>
          </Select>
        </div>
      </Form.Item>
      
      <Form.Item>
        <Button className="bg-blue-500 text-white m-4">Search</Button>
      </Form.Item>
      
    </Form>
  );
};

export default Filters;
