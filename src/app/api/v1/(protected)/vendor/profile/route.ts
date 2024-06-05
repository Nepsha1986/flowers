import { getSession } from "@auth0/nextjs-auth0";
import z from "zod";

import db from "@/backend/db";
import { NewProfileValidationSchema } from "@/backend/models/profile.schema";

export async function GET() {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) throw new Error("Error");

    const client = await db;
    const collection = client.db("flowers_app").collection("profiles");
    const result = await collection.findOne({ _id: user?.sub });

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
    NewProfileValidationSchema.parse(body);

    const client = await db;
    const collection = client.db("flowers_app").collection("profiles");

    await collection.insertOne({ _id: user?.sub, ...body });

    return new Response(null, { status: 204 });
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      return new Response(JSON.stringify(e.issues), { status: 400 });
    }

    return new Response("Error! Please try again later", { status: 500 });
  }
}
