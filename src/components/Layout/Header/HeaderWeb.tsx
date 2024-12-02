"use client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../common/DropdownMenu/DropdownMenu";
import { ChevronDown, Wallet } from "lucide-react";
import { Open9Logo } from "@/components/icons/Open9Logo";
import { BurgerMenuIcon } from "@/components/icons/burgerMenuIcon";
import Button from "../../common/Button/Button";
import { useRouter } from "next/navigation";

export const HeaderWeb = (): JSX.Element => {
  const { push } = useRouter();

  return (
    <header className="w-full p-4">
      <div className="container h-16 max-w-[1110px] mx-auto">
        <div className="flex items-center justify-between gap-6">
          <Link href="/">
            <Open9Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-6 justify-around">
            <DropdownMenu>
              <DropdownMenuTrigger
                title="Home"
                icon={<ChevronDown className="h-4 w-4 text-primary" />}
                className="font-bold text-primary"
              />

              <DropdownMenuContent>
                <DropdownMenuItem>Home 1</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/about"
              className="hover:text-primary font-manropeRegular text-white text-base"
            >
              About us
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                title="Explore"
                icon={<ChevronDown className="h-4 w-4" />}
              />
              <DropdownMenuContent>
                <DropdownMenuItem>Explore 1</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                title="Pages"
                icon={<ChevronDown className="h-4 w-4" />}
              />
              <DropdownMenuContent>
                <DropdownMenuItem>Page 1</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger
                title="Blog"
                icon={<ChevronDown className="h-4 w-4" />}
              />
              <DropdownMenuContent>
                <DropdownMenuItem>Blog 1</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contact"
              className="hover:text-primary font-manropeRegular text-white text-base"
            >
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              iconEnd={<Wallet />}
              onClick={() => push("/login")}
            >
              Wallet Conect
            </Button>
            <BurgerMenuIcon />
          </div>
        </div>
      </div>
    </header>
  );
};
