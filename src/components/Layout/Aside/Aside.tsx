"use client";
import Link from "next/link";
import {
  Activity,
  CopyPlus,
  Heart,
  History,
  LayoutGrid,
  LogOut,
  Settings,
  ShoppingBag,
  Wallet,
} from "lucide-react";
import { Open9Logo } from "@/components/icons/Open9Logo";
import Button from "@/components/common/Button/Button";
import { usePathname } from "next/navigation";
import colors from "@/theme/colors";
import Text from "@/components/common/Text/Text";

const navItems = [
  { label: "Marketplace" },
  { href: "/marketplace/market", icon: ShoppingBag, label: "Market" },
  { href: "/marketplace/active-bid", icon: Activity, label: "Active Bid" },
  { href: "/marketplace/explore", icon: LayoutGrid, label: "Explore" },
  { label: "Account" },
  {
    href: "/marketplace/my-collection",
    icon: LayoutGrid,
    label: "My collection",
  },
  { href: "/marketplace/favorites", icon: Heart, label: "My favorite" },
  { href: "/marketplace/wallet", icon: Wallet, label: "Wallet" },
  { href: "/marketplace/history", icon: History, label: "History" },
  { href: "/marketplace/settings", icon: Settings, label: "Settings" },
  { href: "/", icon: LogOut, label: "Logout" },
];

export const Aside = () => {
  const pathName = usePathname();
  return (
    <aside className="flex flex-col w-60 h-screen bg-foreground ">
      <div className="flex flex-col flex-1 px-4 gap-4">
        <div className="py-4">
          <Link href="/" className="flex items-center gap-2">
            <Open9Logo />
          </Link>
        </div>

        <Button
          className="my-4 bg-white hover:bg-zinc-200 text-black"
          iconEnd={<CopyPlus />}
        >
          Create
        </Button>

        <nav className="space-y-1">
          {navItems.map((item, i) => {
            const isActive = pathName == item.href;
            if (item.href) {
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={`${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-grayText hover:text-white"
                  } flex items-center gap-3 px-3 py-2 text-sm  rounded-lg hover:bg-grayBackground`}
                >
                  <item.icon
                    className="h-4 w-4"
                    color={isActive ? colors.primary : colors.grayText}
                  />
                  {item.label}
                </Link>
              );
            } else {
              return (
                <Text key={i} size={14} color="grayText" heavy className="my-3">
                  {item.label}
                </Text>
              );
            }
          })}
        </nav>
      </div>

      <div className="p-4 mt-auto border-t border-zinc-800">
        <div className="mt-4 text-xs text-zinc-600">
          <p>© 2024 OpenN9</p>
          <p>Made By ThemesFlat</p>
        </div>
      </div>
    </aside>
  );
};
