import db from "@/backend/db";
import { NextRequest } from "next/server";

import { getReqParams } from "@/backend/utils";
export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  try {
    const [country, city] = getReqParams(request, "country", "city");

    const client = await db;
    const collection = client.db("flowers_app").collection("products");
    const result = await collection
      .find({
        location: {
          country,
          city,
        },
      })
      .toArray();

    return new Response(JSON.stringify(result));
  } catch (e) {
    return new Response("Error! Please try again later", { status: 500 });
  }
}
