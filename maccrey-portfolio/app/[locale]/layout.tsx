import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css"; // Adjusted path
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const pretendard = localFont({
  src: [
    {
      path: "../../../public/fonts/Pretendard-Regular.woff2", // Adjusted path
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Pretendard-Bold.woff2", // Adjusted path
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

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  const messages = await getMessages();

  return (
    <body
      className={`${inter.variable} ${pretendard.variable} antialiased`}
    >
      <NextIntlClientProvider locale={locale} messages={messages}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </NextIntlClientProvider>
    </body>
  );
}
