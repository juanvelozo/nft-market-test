import { HeroHome } from "@/components/Home/Hero/HeroHome";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start">
        <HeroHome />
      </main>
    </div>
  );
}
