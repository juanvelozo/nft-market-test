"use client";
import localFont from "next/font/local";
import "./globals.css";
import { HeaderWeb } from "@/components/Layout/Header/HeaderWeb";
import { Footer } from "@/components/Layout/Footer/Footer";
import { usePathname } from "next/navigation";
import { Aside } from "@/components/Layout/Aside/Aside";
import { Providers } from "./providers";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName: string = usePathname();
  const isInMarketplace: boolean = pathName.includes("/marketplace");
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Providers>
            {!isInMarketplace && <HeaderWeb />}
            <main className="dark">{children}</main>
            {!isInMarketplace && <Footer />}
          </Providers>
        </div>
      </body>
    </html>
  );
}
