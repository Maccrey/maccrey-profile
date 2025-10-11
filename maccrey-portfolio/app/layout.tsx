import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// TODO: User needs to download Pretendard font and place it in the `public/fonts` directory.
// You can download it from https://github.com/orioncactus/pretendard
const pretendard = localFont({
  src: [
    {
      path: "../../public/fonts/Pretendard-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Pretendard-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "Maccrey Developer Portfolio",
  description: "세상에 존재하지 않는 서비스는 내가 만든다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${pretendard.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
