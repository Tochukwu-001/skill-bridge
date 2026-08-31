import { Theme } from "@/components/Theme";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="text-white pt-16 pb-8 px-6 md:px-12 border-t"
      style={{
        backgroundColor: Theme.darkGreen,
        borderColor: `${Theme.lightYellow}30`,
      }}
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Newsletter Section */}
        <div
          className="rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border"
          style={{
            backgroundColor: `${Theme.lightYellow}10`,
            borderColor: `${Theme.lightYellow}30`,
          }}
        >
          <div className="space-y-2 text-center md:text-left">
            <h3
              className="text-2xl md:text-3xl font-bold tracking-wide"
              style={{ color: Theme.lightYellow }}
            >
              Stay Connected with SkillBridge
            </h3>
            <p className="text-sm md:text-base text-gray-300 max-w-xl">
              Subscribe to our newsletter to receive updates on trending skills, community spotlights, and new opportunities.
            </p>
          </div>
          <form
            className="flex flex-col sm:flex-row w-full md:w-auto gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 rounded-full text-slate-900 focus:outline-none focus:ring-2 bg-white text-sm w-full sm:w-72"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full font-bold text-sm transition-transform active:scale-95 whitespace-nowrap"
              style={{
                backgroundColor: Theme.lightYellow,
                color: Theme.darkGreen,
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pt-6">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight inline-block"
              style={{ color: Theme.lightYellow }}
            >
              SkillBridge
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Bridging the gap between what you know, can do, and the opportunities waiting for you. Turning potential into progress through skill sharing and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="font-semibold uppercase tracking-wider text-xs"
              style={{ color: Theme.lightYellow }}
            >
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#categories" className="hover:text-white transition-colors">
                  Explore Skills
                </Link>
              </li>
              <li>
                <Link href="/post-skill" className="hover:text-white transition-colors">
                  Post a Skill
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition-colors">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4
              className="font-semibold uppercase tracking-wider text-xs"
              style={{ color: Theme.lightYellow }}
            >
              Categories
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Data Science
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4
              className="font-semibold uppercase tracking-wider text-xs"
              style={{ color: Theme.lightYellow }}
            >
              Support
            </h4>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400"
          style={{ borderColor: `${Theme.lightYellow}20` }}
        >
          <p>&copy; {new Date().getFullYear()} SkillBridge. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}