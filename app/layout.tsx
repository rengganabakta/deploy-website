import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FloatingContact from "@/components/FloatingContact";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Your company description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geist.className}>
        <LanguageProvider>
          {children}
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
