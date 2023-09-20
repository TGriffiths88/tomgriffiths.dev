import Header from "@/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creative Typescript Developer - TOM GRIFFITHS",
  description:
    "Developer specialising in creative typescript solutions. UK based. Using Next.js, React, Typescript, TailwindCSS and more.",
};

const trackingId = process.env.NEXT_PUBLIC_TRACKING_ID;
const trackingUrl = process.env.NEXT_PUBLIC_TRACKING_URL;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#333333" />
        <meta name="msapplication-TileColor" content="#ff0000" />
        <meta name="theme-color" content="#ffffff" />
        {trackingId && trackingUrl && (
          <script
            async
            defer
            data-website-id={trackingId}
            src={trackingUrl}
          ></script>
        )}
      </head>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
