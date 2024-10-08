import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./ui/navbar/NavBar";
import SearchHolder from "./ui/search-holder/SearchHolder";
import FavContextProvider from "./ui/components/FavContextProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100 h-screen flex flex-col`}
      >
        <NavBar />
        <SearchHolder />
          <FavContextProvider>
            {children}
          </FavContextProvider>
      </body>
    </html>
  );
}
