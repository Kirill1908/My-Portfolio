import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import React from "react";

import { Header } from "@/components/Header";
import "../globals.css";

export const metadata: Metadata = {
  title: "FE Developer",
  description: "Portfolio of a Front-End Developer",
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
      <body className="antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
