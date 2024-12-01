import { Footer } from "@/components/Layout/Footer/Footer";
import { HeaderWeb } from "@/components/Layout/Header/HeaderWeb";
import { ReactNode } from "react";

export default function RootLayout({
  children,
}: IProductDetailLayout): JSX.Element {
  return (
    <div className="w-[100vw]">
      <HeaderWeb />
      {children}
      <Footer />
    </div>
  );
}
interface IProductDetailLayout {
  readonly children: ReactNode;
}
