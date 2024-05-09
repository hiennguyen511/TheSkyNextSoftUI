import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import Carousel from "@/components/news/newsCarousel";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next App",
  description: "Next.js starter app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrap">
          <Navbar />
          <Suspense fallback={<Loading />}>
            <div className="content">{children}</div>
          </Suspense>
          <Carousel />
          <Footer />
        </div>
      </body>
    </html>
  );
}
