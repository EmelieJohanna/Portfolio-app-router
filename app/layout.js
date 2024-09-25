import Header from "./components/Header";
import Footer from "./components/Footer";
import MyApp from "./_app";
import Head from "next/head";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Rouge+Script&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <MyApp>
          <Header />
          {children}
          <Footer />
        </MyApp>
        <SpeedInsights />
      </body>
    </html>
  );
}
