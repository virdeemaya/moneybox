import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const myFont = localFont({
  src: [
    {
      path: "/FAIRE-SprigSans-Trial-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "/FAIRE-SprigSans-Trial-Light.woff2",
      weight: "200",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Moneybox",
  description: "Moneybox technical task",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
