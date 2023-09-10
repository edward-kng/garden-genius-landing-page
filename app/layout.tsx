import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/common/nav-bar";
import BottomBar from "./_components/common/bottom-bar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Garden Genius",
  description: "Your personal gardening assistant",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="pt-20">
          {children}
          <BottomBar />
        </div>
      </body>
    </html>
  );
}
