import { League_Spartan } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";
import Image from "next/image";

const spartan = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Deepak's Portfolio",
  description: "My portfolio showcasing my work and experience",
  icons: {
    icon: "/favicon_app.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <link rel="icon" href="/favicon_app.png" sizes="any" />
      <body className={cn("relative h-full antialiased", spartan.className)}>
        <main className="relative flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
