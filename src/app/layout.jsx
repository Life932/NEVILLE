import "./globals.css";
import Footer from "./ui/Footer";
import FloatingNav from "./ui/FloatingNav";

export const metadata = {
  title: "Neville Youth Initiative",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: "Verdana, sans-serif" }}
        className="antialiased flex flex-col min-h-screen"
      >
        <FloatingNav />

        <main className="grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
