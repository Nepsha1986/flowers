import { NextRequest } from "next/server";

const getReqParams = (request: NextRequest, ...params: string[]): string[] => {
  const searchParams = request.nextUrl.searchParams;

  return params.map((i) => searchParams.get(i) as string);
};

export default getReqParams;
