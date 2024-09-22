import { Form, Input } from "antd";

const ApplyingForm = () => {
  const {TextArea} = Input
  return (
    <div className=" bg-gray-100 z-10 w-[120%] h-screen border-2 border-red-400 p-8 rounded-md drop-shadow-lg space-y-8">
      <div className="flex flex-col justify-center items-center mb-8 space-y-2">
        <h1 className="text-3xl font-bold">Job Application Form</h1>
        <p>Please Fill Out the Form Below to Submit Your Job Application!</p>
      </div>
      <div className="w-full h-0.5 bg-gray-300"></div>
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
            <Input />
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
            <Input />
          </Form.Item>
        </div>
        <div className="flex justify-around">
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
            <Input />
          </Form.Item>
        </div>
        <div className="flex">
        <Form.Item
            name="coverletter"
            label="Cover Letter"
            rules={[
              {
                required: true,
                message: "Please do not exceed 200 words.",
              },
            ]}
            className="w-full px-10"
          >
            <TextArea size="large" />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default ApplyingForm;
