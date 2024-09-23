import { Button, Form, Input, Upload } from "antd";
import { BiUpload } from "react-icons/bi";
import NavBar from "./navBar";

const ApplyingForm = () => {
  const { TextArea } = Input;
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center -translate-y-4 ">
        <div className=" bg-gray-50 z-10 w-[50%] h-screen p-8 rounded-md drop-shadow-lg space-y-8 dark:bg-slate-400">
          <div className="flex flex-col justify-center items-center mb-8 space-y-2">
            <h1 className="text-3xl font-bold">Job Application Form</h1>
            <p>
              Please Fill Out the Form Below to Submit Your Job Application!
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 dark:bg-slate-700"></div>
          <Form layout="vertical">
            <div className="flex justify-around">
              <Form.Item
                name="firstname"
                label="First Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your FirstName!",
                  },
                ]}
              >
                <Input placeholder="First Name" className=" dark:bg-slate-300 dark:text-black" />
              </Form.Item>
              <Form.Item
                name="lastname"
                label="Last Name"
                rules={[
                  {
                    required: true,
                    message: "Please input your LasName!",
                  },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </div>
            <div className="flex px-12">
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
                className="w-full px-10"
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
            </div>
            <div className="flex px-12">
              <Form.Item
                name="coverletter"
                label="Cover Letter"
                rules={[
                  {
                    required: true,
                    message: "Please do not exceed 200 words.",
                  },
                ]}
                className="w-full h-fit px-10"
              >
                <TextArea
                  size="large"
                  className=""
                  placeholder="Write a brief description about yourself (e.g., your skills, experience, and goals)"
                />
              </Form.Item>
            </div>
            <div className="flex px-12">
            <Form.Item label="Upload Resume" className="w-full px-10">
              <Form.Item
                name="Upload Resume"
                rules={[
                  {
                    required: true,
                    message: "Please Upload your Resume.",
                  },
                ]}
                className="bg-white rounded-md"
              >
                <Upload.Dragger name="Resume">
                  <div className="flex items-center justify-center">
                    <p>
                      <BiUpload size={40} />
                    </p>
                  </div>
                  <p className="text-xl">Upload A File</p>
                  <p className="text-sm font-thin">
                    Drag and drop a file in this area.
                  </p>
                </Upload.Dragger>
              </Form.Item>
            </Form.Item>
            </div>
            <Form.Item className="flex w-full px-10 justify-center items-center ">
              <Button type="primary" htmlType="submit" size="large">
                Apply
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ApplyingForm;
