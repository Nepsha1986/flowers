import db from "@/backend/db";

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
