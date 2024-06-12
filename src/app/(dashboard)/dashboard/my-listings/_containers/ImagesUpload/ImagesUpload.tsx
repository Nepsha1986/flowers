import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
import type { GetProp, UploadFile, UploadProps } from "antd";

type FileType = Parameters<GetProp<UploadProps, "beforeUpload">>[0];

const UPLOAD_MAX_COUNT = 4;

interface Props {
  onChange?: (urls: string[]) => void;
}

const ImagesUpload: React.FC<Props> = ({ onChange }) => {
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const handleChange: UploadProps["onChange"] = ({
    fileList: newFileList,
    file,
  }) => {
    setFileList(newFileList);

    const urls = newFileList
      .filter((file) => file.status === "done" && file.response)
      .map((file) => file.response.url);

    onChange && onChange(urls);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <>
      <Upload
        action="/api/v1/vendor/upload"
        listType="picture-card"
        fileList={fileList}
        onChange={handleChange}
      >
        {fileList.length >= UPLOAD_MAX_COUNT ? null : uploadButton}
      </Upload>
    </>
  );
};

export default ImagesUpload;
