import { NextResponse } from "next/server";

export function middleware(req) {
  const res = NextResponse.next();

  // prefer Vercel-provided geo; fall back to common headers, default to US
  const country =
    req.geo?.country || req.headers.get("x-vercel-ip-country") || req.headers.get("x-country") || "US";

  const currencyMap = {
    US: "USD",
    CA: "CAD",
    AU: "AUD",
    NG: "NGN",
  };

  const currency = currencyMap[country] || "USD";

  // set cookies for client-side hydration (30 days)
  res.cookies.set("country", country, { path: "/", maxAge: 60 * 60 * 24 * 30 });
  res.cookies.set("currency", currency, { path: "/", maxAge: 60 * 60 * 24 * 30 });

  return res;
}

export const config = {
  // run middleware for all app routes except static assets
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
