"use client";
import React from "react";
import { Button, Form, FormProps, Input, InputNumber } from "antd";
import { profileService } from "@/app/(dashboard)/_services/vendor/profile.service";

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

type FieldType = {
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: number;
};

const CreateProfileForm: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    profileService.add(values);
  };

  return (
    <Form {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item
        label="First name"
        name="firstName"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Second name"
        name="secondName"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProfileForm;
