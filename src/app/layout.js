import "./globals.css";
import Navbar from "./ui/Navbar";
// 1. IMPORT THE FONT FROM NEXT.JS
import { Inter } from "next/font/google";

// 2. CONFIGURE THE FONT
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Our Charity Organization",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="neville">
      {/* 3. APPLY THE FONT TO THE BODY */}
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <Navbar />

        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
