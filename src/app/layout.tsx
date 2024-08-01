import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import MainHeader from "@/components/header/main-header";
import { Toaster } from "@/components/ui/toaster";

// const inter = Inter({ subsets: ["latin"] });
// const fontSans = Inter({
//   subsets: ["latin"],
//   variable: "--font-sans",
// });

export const metadata: Metadata = {
  title: "File Uploader",
  description: "File Uploader app for hire digital test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={false}>
      <head />
      <body className={cn("min-h-screen bg-background  relative")}>
        <Toaster />

        <main className="relative">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
