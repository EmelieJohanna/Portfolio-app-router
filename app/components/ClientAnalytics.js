"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

export default function ClientAnalytics() {
  return <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />;
}
