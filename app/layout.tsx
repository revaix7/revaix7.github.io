import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Xavier Malara — Software Engineering Student",
  description:
    "Portfolio of Xavier Malara, a Software Engineering student at the University of Ottawa who builds web apps and games.",
  openGraph: {
    title: "Xavier Malara — Software Engineering Student",
    description:
      "Portfolio of Xavier Malara, a Software Engineering student at the University of Ottawa.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
