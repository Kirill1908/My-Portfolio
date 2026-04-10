import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

import { Header } from "@/components/Header";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hasan-dev-portfolio.vercel.app"),
  title: "Kyrylo Hasan | Front-End Developer Portfolio",
  description:
    "Specializing in React, Next.js, and Modern Web Applications. Explore my latest projects and skills.",

  openGraph: {
    title: "Kyrylo Hasan | Front-End Developer Portfolio",
    description:
      "Building high-performance web interfaces with focus on clean code and responsive design.",
    url: "https://hasan-dev-portfolio.vercel.app/en",
    siteName: "Hasan Dev Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/preview.png",
        width: 1200,
        height: 630,
        alt: "Kyrylo Hasan Portfolio Preview",
      },
    ],
  },
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "uk" }];
}

interface RootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = await params;

  const supportedLocales = ["en", "uk"];
  if (!supportedLocales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages({ locale });

  return (
    <html lang={locale}>
      <body className="antialiased overflow-x-hidden min-h-screen">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <div className="relative overflow-x-hidden flex flex-col min-h-screen">
            <main className="flex-grow">
              {children}
            </main>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
