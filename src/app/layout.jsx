import "./globals.css";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import FloatingNav from "./ui/FloatingNav";
// Inter Font for Charity Organization Website
import { Inter } from "next/font/google";

// Font Configuration for Inter Font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Neville Youth Initiative",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="neville">
      {/* 3. Applying the Font */}
      <body
        className={`${inter.className} antialiased flex flex-col min-h-screen`}
      >
        <FloatingNav />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
