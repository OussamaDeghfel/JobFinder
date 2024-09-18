import { Button, Form, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Filters = () => {
  return (
    <div className="flex bg-white border-2 border-red-500 rounded-md">
      <Form className="flex items-center">
        <Form.Item>
          <div className="flex m-4">
            <BiSearch size={20} color="blue" />
            <input type="text" placeholder="Filter By Title..." />
          </div>
        </Form.Item>

        <Form.Item>
          <div className="flex">
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
    </div>
  );
};

export default Filters;
