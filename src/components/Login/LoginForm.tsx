"use client";
import Link from "next/link";
import { Input } from "../common/Input/Input";
import Button from "../common/Button/Button";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export const LoginForm = (): JSX.Element => {
  const { push } = useRouter();
  return (
    <form
      className="w-full flex flex-col gap-6"
      onSubmit={(e) => e.preventDefault()}
    >
      <Input placeholder="mail@website.com" label="Email*" />
      <Input
        placeholder="Min. 8 characters"
        type="password"
        label="Password*"
      />
      <Link href="/" className="text-sm font-azeretMonoRegular self-end">
        Forget password?
      </Link>
      <Button
        className="w-full font-azeretMonoRegular"
        iconEnd={<ArrowUpRight size={14} />}
        onClick={() => push("/marketplace/market")}
      >
        Login
      </Button>
    </form>
  );
};
