import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import MainLayout from "@/components/layout/MainLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Manusri M V | Digital Innovation Lab",
  description: "Interactive Cybersecurity & AI Portfolio of Manusri M V",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="antialiased min-h-screen bg-[#F8FAFC] text-[#0F172A] selection:bg-[#3B82F6] selection:text-white font-inter">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
