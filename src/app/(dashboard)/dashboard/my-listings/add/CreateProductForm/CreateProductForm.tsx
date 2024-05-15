"use client";
import React from "react";
import { Button, Form, FormProps, Input, InputNumber } from "antd";

import { productService } from "@/app/(dashboard)/_services/vendor/product.service";

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
  name: string;
  description: string;
  price: number;
  country: string;
  city: string;
};

const CreateProductForm: React.FC = () => {
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await productService.add({
      ...values,
      location: {
        country: values.country,
        city: values.city,
      },
    });
  };

  return (
    <Form {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label="Country"
        name="country"
        initialValue="Ukraine"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input disabled placeholder="Ukraine" />
      </Form.Item>

      <Form.Item
        label="City"
        name="city"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Price"
        name="price"
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

export default CreateProductForm;
