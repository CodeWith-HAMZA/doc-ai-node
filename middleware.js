import { NextResponse } from "next/server";

export function middleware(req) {
  console.log(req.nextUrl);

  const res = NextResponse.next();
  res.headers.append("ACCESS-CONTROL-ALLOW-ORIGIN", "*");
  return res;
}

export const config = {
  matcher: ["/api/:path*"],
};
 