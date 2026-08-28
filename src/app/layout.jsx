import "./globals.css";
import Footer from "./ui/Footer";
import ResizableNavbar from "@/components/ui/resizable-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import ClickSpark from "@/components/ui/ClickSpark";

export const metadata = {
  title: "Neville Youth Initiative",
  description: "Making the world a better place.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased flex flex-col min-h-screen relative">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ClickSpark
            sparkColor="#de6583"
            sparkSize={10}
            sparkRadius={18}
            sparkCount={8}
            duration={350}
            easing="ease-out"
          >
          <ResizableNavbar />

            <main className="grow">{children}</main>

          <Footer />
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}
