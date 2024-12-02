"use client";
import localFont from "next/font/local";
import "./globals.css";
import { HeaderWeb } from "@/components/Layout/Header/HeaderWeb";
import { Footer } from "@/components/Layout/Footer/Footer";
import { usePathname } from "next/navigation";
import { Providers } from "./providers";

const ManropeRegular = localFont({
  src: "./fonts/Manrope-Regular.ttf",
  variable: "--font-manrope-regular",
  weight: "400",
});

const ManropeBold = localFont({
  src: "./fonts/Manrope-Bold.ttf",
  variable: "--font-manrope-regular",
  weight: "800",
});

const AzeretMonoRegular = localFont({
  src: "./fonts/AzeretMono-Regular.ttf",
  variable: "--font-azeretMono-regular",
  weight: "400",
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
        className={`${AzeretMonoRegular.variable} ${ManropeBold.variable} ${ManropeRegular.variable} antialiased`}
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
