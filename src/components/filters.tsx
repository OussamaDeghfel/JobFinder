import { Button, Form, Input, Select } from "antd";
import { BiSearch } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const Filters = () => {
  return (
    <Form className="flex translate-y-3 px-5 bg-white h-20 pt-4 rounded-md justify-rounded items-center w-full shadow-lg">
      <Form.Item className="p-2 border-r-2">
        
          <Input
            type="text"
            placeholder="Filter By Title..."
            prefix={<BiSearch size={20} color="blue" />}
          />
        
      </Form.Item>

      <Form.Item className="p-2 border-r-2">
        
          <Input
            type="text"
            placeholder="Filter By Location..."
            prefix={<FaLocationDot size={20} color="blue" />}
          />
        
      </Form.Item>

      <Form.Item className="p-2 border-r-2">
        <div>
          <Select defaultValue={"fullTime"} options={
            [
              {
                value: "fullTime",
                label: "Full Time"
              },
              {
                value: "partTime",
                label: "Part Time"
              }
            ]
          } />
        </div>
      </Form.Item>

      <Form.Item className="p-2">
        <Button type="primary">Search</Button>
      </Form.Item>
    </Form>
  );
};

export default Filters;
