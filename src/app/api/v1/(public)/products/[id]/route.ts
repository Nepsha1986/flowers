import db from "@/backend/db";
import { NextRequest } from "next/server";
import { ObjectId } from "mongodb";

export async function GET(_: NextRequest, context: { params: { id: string } }) {
  try {
    const id = context.params.id;
    const query = { _id: new ObjectId(id) };

    // TODO: handle 404
    const client = await db;
    const collection = client.db("flowers_app").collection("products");
    const result = await collection.findOne(query);

    return new Response(JSON.stringify(result));
  } catch (e) {
    return new Response("Error! Please try again later", { status: 500 });
  }
}
