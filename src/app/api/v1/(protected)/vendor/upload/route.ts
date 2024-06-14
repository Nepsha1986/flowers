import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import { PUBLITIO_TOKEN } from "@shared/lib/variables";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.formData();
  const file = data.get("file");

  try {
    const formData = new FormData();
    // @ts-ignore
    formData.append("file", file);

    const response = await axios.post(
      "https://api.publit.io/v1/files/create",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${PUBLITIO_TOKEN}`,
        },
        params: {
          folder: "flowersapp",
        },
      },
    );

    return NextResponse.json(
      {
        extension: response.data.extension,
        id: response.data.id,
        url: response.data.url_short,
      },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({ message: "Error!" }, { status: 400 });
  }
}
