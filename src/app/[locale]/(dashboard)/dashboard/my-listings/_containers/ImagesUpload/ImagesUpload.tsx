import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { UploadFile, UploadProps } from "antd";
import { useDictionary } from "@shared/i18n";

const UPLOAD_MAX_COUNT: number = 4;

interface Props {
  onChange?: (urls: string[]) => void;
}

const ImagesUpload: React.FC<Props> = ({ onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const { dictionary } = useDictionary();
  const dict = dictionary.common;

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);

    const urls = newFileList
      .filter((file) => file.status === "done" && file.response)
      .map((file) => file.response.url);

    onChange && onChange(urls);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{dict.upload}</div>
    </button>
  );

  return (
    <Upload
      action="/api/v1/vendor/upload"
      listType="picture-card"
      fileList={fileList}
      onChange={handleChange}
    >
      {fileList.length >= UPLOAD_MAX_COUNT ? null : uploadButton}
    </Upload>
  );
};

export default ImagesUpload;
