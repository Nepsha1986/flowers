import { getSession } from "@auth0/nextjs-auth0";
import z from "zod";

import db from "@/backend/db";
import { NewProfileValidationSchema } from "@/backend/models/profile.schema";

export async function POST(request: Request) {
  try {
    const session = await getSession();
    const user = session?.user;
    if (!user) throw new Error("Error");

    const body = await request.json();

    const newProfile = NewProfileValidationSchema.parse({
      ...body,
      vendorId: user.sub,
    });

    const client = await db;
    const collection = client.db("flowers_app").collection("profiles");

    await collection.insertOne(newProfile);

    return new Response(null, { status: 204 });
  } catch (e: unknown) {
    if (e instanceof z.ZodError) {
      return new Response(JSON.stringify(e.issues), { status: 400 });
    }

    return new Response("Error! Please try again later", { status: 500 });
  }
}
