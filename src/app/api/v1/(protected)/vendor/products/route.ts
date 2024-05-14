import z from "zod";
import { getSession } from "@auth0/nextjs-auth0";

import db from "@/backend/db";
import { NewProductValidationSchema } from "@/backend/models/productSchema";

export async function GET() {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) throw new Error("Error");

    const client = await db;
    const collection = client.db("flowers_app").collection("products");
    const result = await collection.find({ vendorId: user.sub }).toArray();

    return new Response(JSON.stringify(result));
  } catch (e) {
    return new Response("Error! Please try again later", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) throw new Error("Error");

    const body = await request.json();
    const newProduct = NewProductValidationSchema.parse({
      ...body,
      vendorId: user.sub,
    });

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
