import { Aside } from "@/components/Layout/Aside/Aside";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Aside />
      {children}
    </div>
  );
}
