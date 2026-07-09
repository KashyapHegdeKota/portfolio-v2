import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import FluidCursor from "@/components/FluidCursor";
import PageLoader from "@/components/PageLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "Kashyap Hegde Kota | Creative Developer Portfolio",
  description:
    "Interactive portfolio and engineering journal for Kashyap Hegde Kota.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <div className="site-shell">
          <div className="noise-layer" aria-hidden="true" />
          <FluidCursor />
          <PageLoader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
