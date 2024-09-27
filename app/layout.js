import "./globals.css";
import "./logo.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Providers from "./components/Providers";
import ClientAnalytics from "./components/ClientAnalytics";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio - Emelie",
  description: "Showcasing my projects and skills as a developer.",
  // icons: {
  //   icon: "/favicon.ico",
  // },
  openGraph: {
    type: "website",
    url: "https://emelie.org/",
    title: "Hi, I'm Emelie Frontend Developer.",
    description: "Showcasing my projects and skills as a developer.",
    images: [
      {
        url: "https://emelie.org/1page-preview.png",
        width: 1200,
        height: 630,
        alt: "Emelie Portfolio Preview",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <body className="min-h-screen bg-gradient-to-t from-background1 via-background2 to-background3 text-text">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <ClientAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <SpeedInsights />
      </body>
    </html>
  );
}

// Font used for "old" Logo, might make a comeback?
{
  /* <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
<link
  href="https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap"
  rel="stylesheet"
/> */
}
