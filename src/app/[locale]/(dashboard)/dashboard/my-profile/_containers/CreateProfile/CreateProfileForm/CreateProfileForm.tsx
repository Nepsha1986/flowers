import React from "react";
import { Button, Form, FormProps, Input, message } from "antd";
import { profileService } from "@dashboard/_services/vendor/profile.service";
import { useMutation } from "@tanstack/react-query";
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
  firstName: string;
  secondName: string;
  email: string;
  phoneNumber: string;
};

interface Props {
  onSuccess: () => void;
  defaults?: FieldType;
}

const CreateProfileForm = ({ defaults, onSuccess }: Props) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { dictionary } = useDictionary();
  const dict = dictionary.common;

  const { mutate } = useMutation({
    mutationKey: ["createProfile"],
    mutationFn: (profileData: FieldType) => {
      return profileService.add(profileData);
    },
    onSuccess: () => {
      void messageApi.success("Your profile created successfully!");
      onSuccess();
    },
    onError: () => {
      void messageApi.error("Something went wrong, please try again later!");
    },
  });

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    mutate(values);
  };

  return (
    <>
      {contextHolder}

      <Form
        {...formItemLayout}
        initialValues={defaults}
        onFinish={onFinish}
        style={{ maxWidth: 600 }}
      >
        <Form.Item
          label={dict.first_name}
          name="firstName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={dict.second_name}
          name="secondName"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={dict.email}
          name="email"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input disabled />
        </Form.Item>

        <Form.Item
          label={dict.phone}
          name="phoneNumber"
          rules={[{ required: true, message: "Please input!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {dict.submit}
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreateProfileForm;
