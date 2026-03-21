import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { SlideProvider } from "@/components/providers/SlideProvider";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });

export const metadata: Metadata = {
  title: "Manusri M V | Cyber Command Portfolio",
  description: "Interactive Cybersecurity & AI Portfolio of Manusri M V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="antialiased overflow-hidden bg-[#0a0a1a] text-white selection:bg-[#bc13fe] selection:text-white">
        <SlideProvider>
          <MainLayout>{children}</MainLayout>
        </SlideProvider>
      </body>
    </html>
  );
}
