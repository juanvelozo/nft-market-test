import Text from "@/components/common/Text/Text";
import { LoginForm } from "@/components/Login/LoginForm";
import { SocialLogin } from "@/components/Login/SocialLogin";
import Link from "next/link";

export default function Login() {
  return (
    <div className="items-center justify-items-center min-h-[80vh]  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center sm:items-start gap-8">
        <Text size={32} className="self-center" heavy>
          Login
        </Text>
        <Text className="self-center" color="grayText">
          Get started today by entering just a few details
        </Text>
        <div className="bg-[#232323] rounded-3xl p-10">
          <LoginForm />
          <div className="flex items-center my-4 gap-4">
            <div className="h-[1px] w-full bg-grayBackground" />
            <Text className="truncate w-1/3" size={14} color="grayText">
              or continue
            </Text>
            <div className="h-[1px] w-full bg-grayBackground" />
          </div>
          <SocialLogin />
          <Text size={14} className="text-center mt-4">
            Don&apos;t have an account?{" "}
            <Link href="/" className="text-sm text-primary">
              Sign up
            </Link>
          </Text>
        </div>
      </main>
    </div>
  );
}
