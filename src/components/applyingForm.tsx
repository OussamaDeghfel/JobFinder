import { Button, Form, Input, Upload } from "antd";
import { BiUpload } from "react-icons/bi";
import NavBar from "./navBar";
import { useEffect, useState } from "react";

const ApplyingForm = () => {
  const { TextArea } = Input;
  const [roleData, setRoleData] = useState({
    title: '',
    description: '',
    work_method: '',
    location: '',
  });

  useEffect(() => {
    setRoleData({
      title: localStorage.getItem('title') || '',
      description: localStorage.getItem('descrption') || '',
      work_method: localStorage.getItem('work_method') || '',
      location: localStorage.getItem('location') || '',
    });
  }, []);
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly items-center -translate-y-4 ">
        <div className="bg-gray-50 z-10 w-[50vh] h-[50%] p-8 rounded-md shadow-lg dark:bg-slate-500 border-2 border-gray-200 space-y-8">
          <h1 className="font-bold text-xl">You Are Applying for this Role : </h1>   
            <div className="flex flex-col items-start text-gray-500 space-y-5">
              <h1 className="text-3xl font-bold dark:text-white">{roleData.title}</h1>
              <p className="text-gray-500 dark:text-gray-300">{roleData.description}</p>
              <span className="dark:text-gray-300">{roleData.work_method}</span>
              <h1 className="text-blue-600 text-sm font-bold dark:text-blue-800">
              {roleData.location}
              </h1>
            </div>
        </div>
        <div className=" bg-gray-50 z-10 w-[50%] h-screen p-8 rounded-md drop-shadow-lg space-y-8 dark:bg-slate-500">
          <div className="flex flex-col justify-center items-center mb-8 space-y-2 dark:text-white">
            <h1 className="text-3xl font-bold ">Job Application Form</h1>
            <p>
              Please Fill Out the Form Below to Submit Your Job Application!
            </p>
          </div>
          <div className="w-full h-0.5 bg-gray-300 dark:bg-slate-700"></div>
          <Form layout="vertical">
            <div className="flex justify-around">
              <Form.Item
                label={<span className="dark:text-white">First Name</span>}
                name="firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your FirstName!",
                  },
                ]}
                style={{ color: "white" }}
              >
                <Input
                  placeholder="First Name"
                  className=" dark:bg-slate-300 dark:text-black"
                />
              </Form.Item>
              <Form.Item
                label={<span className="dark:text-white">Last Name</span>}
                name="lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your LasName!",
                  },
                ]}
              >
                <Input
                  placeholder="Last Name"
                  className=" dark:bg-slate-300 dark:text-black"
                />
              </Form.Item>
            </div>
            <div className="flex px-12">
              <Form.Item
                name="email"
                label={<span className="dark:text-white">Email</span>}
                rules={[
                  {
                    required: true,
                    message: "Please input your Email Address!",
                  },
                ]}
                className="w-full px-10"
              >
                <Input
                  placeholder="Enter your email"
                  className=" dark:bg-slate-300 dark:text-black"
                />
              </Form.Item>
            </div>
            <div className="flex px-12">
              <Form.Item
                name="coverletter"
                label={<span className="dark:text-white">Cover Letter</span>}
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
                  className=" dark:bg-slate-300 dark:text-black"
                  placeholder="Write a brief description about yourself (e.g., your skills, experience, and goals)"
                />
              </Form.Item>
            </div>
            <div className="flex px-12">
              <Form.Item
                label={<span className="dark:text-white">Upload Resume</span>}
                className="w-full px-10"
              >
                <Form.Item
                  name="Upload Resume"
                  rules={[
                    {
                      required: true,
                      message: "Please Upload your Resume.",
                    },
                  ]}
                  className="bg-white rounded-md dark:bg-slate-300 dark:text-black"
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
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="dark:bg-blue-500"
              >
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
