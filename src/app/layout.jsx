import "./globals.css";
import Footer from "./ui/Footer";
import ResizableNavbar from "@/components/ui/resizable-navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Neville Youth Initiative",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ResizableNavbar />

          <main className="grow pt-20">{children}</main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
