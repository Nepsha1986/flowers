import z from "zod";

import db from "@/backend/db";
import { ProductSchema } from "@/backend/models/productSchema";

export async function GET() {
  try {
    const client = await db;
    const collection = client.db("flowers_app").collection("products");
    const result = await collection.find().toArray();

    return new Response(JSON.stringify(result));
  } catch (e) {
    return new Response("Error! Please try again later", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newProduct = ProductSchema.parse(body);

    const client = await db;
    const collection = client.db("flowers_app").collection("products");

    await collection.insertOne(newProduct);

    return new Response(null, { status: 204 });
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      return new Response(JSON.stringify(e.issues), { status: 400 });
    }

    return new Response("Error! Please try again later", { status: 500 });
  }
}
