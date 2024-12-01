import { Open9Logo } from "@/components/icons/Open9Logo";
import {
  Facebook,
  Twitter,
  Youtube,
  DiscIcon as Discord,
  TwitterIcon as TikTok,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <a className="flex items-center gap-2">
              <Open9Logo />
            </a>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Marketplace</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/nfts" className="hover:text-primary">
                  ALL NFTs
                </a>
              </li>
              <li>
                <a href="/virtual-worlds" className="hover:text-primary">
                  Virtual worlds
                </a>
              </li>
              <li>
                <a href="/domain-names" className="hover:text-primary">
                  Domain names
                </a>
              </li>
              <li>
                <a href="/photography" className="hover:text-primary">
                  Photography
                </a>
              </li>
              <li>
                <a href="/digital-art" className="hover:text-primary">
                  Digital art
                </a>
              </li>
              <li>
                <a href="/music" className="hover:text-primary">
                  Music
                </a>
              </li>
            </ul>
          </div>

          {/* Resource Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resource</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/help-center" className="hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/platform-status" className="hover:text-primary">
                  Platform status
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:text-primary">
                  Partners
                </a>
              </li>
              <li>
                <a href="/community" className="hover:text-primary">
                  Discord community
                </a>
              </li>
              <li>
                <a href="/auctions" className="hover:text-primary">
                  Live auctions
                </a>
              </li>
              <li>
                <a href="/discover" className="hover:text-primary">
                  Discover
                </a>
              </li>
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Account</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/authors" className="hover:text-primary">
                  Authors
                </a>
              </li>
              <li>
                <a href="/collection" className="hover:text-primary">
                  My Collection
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:text-primary">
                  Author Profile
                </a>
              </li>
              <li>
                <a href="/dashboard" className="hover:text-primary">
                  Go to dashboard
                </a>
              </li>
              <li>
                <a href="/collection" className="hover:text-primary">
                  Collection
                </a>
              </li>
              <li>
                <a href="/create" className="hover:text-primary">
                  Create Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="/help" className="hover:text-primary">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/platform-status" className="hover:text-primary">
                  Platform status
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Join the community</h4>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Discord className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <TikTok className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <div>© 2023 OpeN9 - Made By Themesflat</div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-primary">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
