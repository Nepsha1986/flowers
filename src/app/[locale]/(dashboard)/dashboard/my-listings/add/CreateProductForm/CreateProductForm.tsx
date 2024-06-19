"use client";
import React, { useState } from "react";
import { Button, Form, FormProps, Input, InputNumber, Select } from "antd";

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
  state: number;
};

const CreateProductForm: React.FC = () => {
  const { dictionary } = useDictionary();
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
    <Form
      data-testid="create_product_form"
      {...formItemLayout}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
    >
      <ImagesUpload
        onChange={(images) => {
          setImages(images);
        }}
      />
      <Form.Item
        label={dictionary.common.name}
        name="name"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={dictionary.common.description}
        name="description"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        label={dictionary.common.country}
        name="country"
        initialValue="Ukraine"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input disabled placeholder="Ukraine" />
      </Form.Item>

      <Form.Item
        label={dictionary.common.city}
        name="city"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        rules={[{ required: true, message: "Please input!" }]}
        name="state"
        label={dictionary.common.state}
      >
        <Select
          options={[
            {
              value: 5,
              label: dictionary.dashboard.create_product_form.state_options.new,
            },
            {
              value: 4,
              label:
                dictionary.dashboard.create_product_form.state_options.perfect,
            },
            {
              value: 3,
              label:
                dictionary.dashboard.create_product_form.state_options.good,
            },
            {
              value: 2,
              label:
                dictionary.dashboard.create_product_form.state_options.average,
            },
            {
              value: 1,
              label: dictionary.dashboard.create_product_form.state_options.bad,
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        label={dictionary.common.price}
        name="price"
        rules={[{ required: true, message: "Please input!" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
        <Button type="primary" htmlType="submit">
          {dictionary.common.submit}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateProductForm;
