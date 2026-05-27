import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "./context/GlobalContext";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Portfolio - Windows 7 Edition",
  description: "A nostalgic Windows 7 themed portfolio website showcasing my work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/7.css"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif' }}
      >
        <GlobalProvider>
        {children}
        </GlobalProvider>
      </body>
    </html>
  );
}
