import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "FE Developer",
  description: "Portfolio of a Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
