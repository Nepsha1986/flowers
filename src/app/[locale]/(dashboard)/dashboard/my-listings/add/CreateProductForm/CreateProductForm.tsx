"use client";
import React, { useState } from "react";
import { Button, Form, FormProps, Input, InputNumber } from "antd";

import { productService } from "@dashboard/_services/vendor/product.service";
import ImagesUpload from "../../_containers/ImagesUpload";
import { useDictionary } from "@shared/i18n";

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
  const { dictionary } = useDictionary();
  const dict = dictionary.common;
  const [images, setImages] = useState<string[]>([]);
  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    await productService.add({
      ...values,
      images,
      location: {
        country: values.country,
        city: values.city,
      },
    });
  };

  return (
    <Form {...formItemLayout} onFinish={onFinish} style={{ maxWidth: 600 }}>
      <ImagesUpload
        onChange={(images) => {
          setImages(images);
        }}
      />
      <Form.Item
        label={dict.name}
        name="name"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={dict.description}
        name="description"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label={dict.country}
        name="country"
        initialValue="Ukraine"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input disabled placeholder="Ukraine" />
      </Form.Item>

      <Form.Item
        label={dict.city}
        name="city"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={dict.price}
        name="price"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {dict.submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProductForm;
