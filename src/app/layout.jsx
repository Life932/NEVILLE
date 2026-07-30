import "./globals.css";
import Footer from "./ui/Footer";
import FloatingNav from "./ui/FloatingNav";
import { ThemeProvider } from "@/components/theme-provider";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Neville Youth Initiative",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="absolute top-4 right-4 z-50">
            <ThemeToggle />
          </div>

          <FloatingNav />

          <main className="grow">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
