export const headerSimpleCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderSimple() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="#" className="text-xl font-bold text-neutral-900 dark:text-white">
          Brand.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            About
          </Link>
          <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
            Get Started
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden">
          <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
        </button>
      </div>
    </header>
  );
}`;

export const headerCenteredCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderCentered() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
        {/* Left Nav */}
        <nav className="hidden flex-1 items-center gap-6 md:flex">
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Product
          </Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Resources
          </Link>
        </nav>

        {/* Centered Logo */}
        <div className="shrink-0 text-xl font-bold text-neutral-900 dark:text-white">
          CENTRAL
        </div>

        {/* Right Nav */}
        <div className="hidden flex-1 items-center justify-end gap-6 md:flex">
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Sign In
          </Link>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        {/* Mobile Spacer & Button */}
        <div className="flex flex-1 justify-end md:hidden">
            <button>
                <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
            </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerWithSearchCode = `import Link from "next/link";
import { BiMenu, BiSearch, BiBell, BiUser } from "react-icons/bi";

export default function HeaderWithSearch() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-6">
        {/* Logo */}
        <Link href="#" className="shrink-0 text-xl font-bold text-neutral-900 dark:text-white">
          SaaS App
        </Link>

        {/* Search Bar */}
        <div className="hidden max-w-md flex-1 md:block">
            <div className="relative">
                <BiSearch className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                <input 
                    type="text" 
                    placeholder="Search dashboard..." 
                    className="w-full rounded-full border border-neutral-200 bg-neutral-100 py-2 pl-10 pr-4 text-sm outline-none focus:border-neutral-300 focus:bg-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-white dark:focus:border-neutral-700"
                />
            </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <BiSearch className="h-6 w-6 text-neutral-600 dark:text-neutral-400 md:hidden" />
            </button>
            <button className="rounded-full p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800">
                <BiBell className="h-6 w-6 text-neutral-600 dark:text-neutral-400" />
            </button>
            <button className="rounded-full bg-neutral-200 p-2 dark:bg-neutral-800">
                <BiUser className="h-5 w-5 text-neutral-600 dark:text-neutral-400" />
            </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerMegaMenuCode = `import Link from "next/link";
import { BiMenu, BiChevronDown } from "react-icons/bi";

export default function HeaderMegaMenu() {
  return (
    <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#" className="text-xl font-bold text-neutral-900 dark:text-white">
          Mega
        </Link>

        {/* Desktop Nav with Dropdowns */}
        <nav className="hidden items-center gap-8 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
              Products <BiChevronDown />
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-1/2 top-full mt-2 hidden w-64 -translate-x-1/2 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg group-hover:block dark:border-neutral-800 dark:bg-neutral-900">
                <div className="space-y-3">
                    <a href="#" className="block">
                        <div className="font-semibold text-neutral-900 dark:text-white">Analytics</div>
                        <div className="text-xs text-neutral-500">Track your performance</div>
                    </a>
                    <a href="#" className="block">
                        <div className="font-semibold text-neutral-900 dark:text-white">Engagement</div>
                        <div className="text-xs text-neutral-500">Connect with customers</div>
                    </a>
                    <a href="#" className="block">
                        <div className="font-semibold text-neutral-900 dark:text-white">Security</div>
                        <div className="text-xs text-neutral-500">Protect your data</div>
                    </a>
                </div>
            </div>
          </div>
          
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Enterprise
          </Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
            Developers
          </Link>
        </nav>

        <div className="flex items-center gap-4">
            <Link href="#" className="hidden text-sm font-medium text-neutral-900 md:block dark:text-white">Log in</Link>
            <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900">
                Sign up
            </button>
             <button className="md:hidden">
                <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
            </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerDarkCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderDark() {
  return (
    <header className="bg-neutral-900 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-12">
            <Link href="#" className="text-2xl font-bold tracking-tight">
            NIGHT
            </Link>

            <nav className="hidden items-center gap-6 md:flex">
                <Link href="#" className="text-sm text-neutral-300 hover:text-white">Dashboard</Link>
                <Link href="#" className="text-sm text-neutral-300 hover:text-white">Team</Link>
                <Link href="#" className="text-sm text-neutral-300 hover:text-white">Projects</Link>
            </nav>
        </div>

        <div className="flex items-center gap-4">
           <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1.5 text-sm font-medium text-neutral-200 transition-colors hover:bg-neutral-700 hover:text-white">
            View Source
           </button>
           <button className="md:hidden">
            <BiMenu className="h-6 w-6 text-white" />
           </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerTransparentCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderTransparent() {
  return (
    <div className="relative h-64 w-full bg-neutral-900">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-900 to-purple-900 opacity-50"></div>
      
      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-10 w-full">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href="#" className="text-2xl font-bold text-white">
            AESTHETIC
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
              Studio
            </Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
              Work
            </Link>
            <Link href="#" className="text-sm font-medium text-white/80 hover:text-white">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20 md:block">
                Launch
            </button>
            <button className="md:hidden">
                <BiMenu className="h-8 w-8 text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Demo Content */}
      <div className="relative flex h-full items-center justify-center text-white">
        <p className="font-mono text-xs opacity-60">Hero Content Area</p>
      </div>
    </div>
  );
}`;

export const headerStackedCode = `import Link from "next/link";
import { BiPhone, BiEnvelope, BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiMenu } from "react-icons/bi";

export default function HeaderStacked() {
  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-neutral-900 py-2 text-xs text-neutral-400">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
            <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><BiPhone /> +1 (555) 123-4567</span>
                <span className="flex items-center gap-1"><BiEnvelope /> contact@agency.com</span>
            </div>
            <div className="flex items-center gap-3">
                <a href="#" className="hover:text-white"><BiLogoTwitter /></a>
                <a href="#" className="hover:text-white"><BiLogoFacebook /></a>
                <a href="#" className="hover:text-white"><BiLogoInstagram /></a>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="#" className="text-xl font-bold uppercase tracking-widest text-neutral-900 dark:text-white">
            AGENCY
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
             <Link href="#" className="font-medium text-neutral-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400">Home</Link>
             <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Services</Link>
             <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Portfolio</Link>
             <Link href="#" className="font-medium text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400">Blog</Link>
          </nav>
          
          <button className="hidden rounded bg-blue-600 px-5 py-2 text-sm font-medium text-white hover:bg-blue-700 md:block">
            Consultation
          </button>

          <button className="md:hidden">
              <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
          </button>
        </div>
      </header>
    </div>
  );
}`;

export const headerEcommerceCode = `import Link from "next/link";
import { BiShoppingBag, BiUser, BiHeart, BiMenu, BiSearch } from "react-icons/bi";

export default function HeaderEcommerce() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <div className="flex items-center gap-4 lg:hidden">
             <button>
                <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
            </button>
             <Link href="#" className="text-lg font-bold text-neutral-900 dark:text-white">STORE</Link>
        </div>

        <Link href="#" className="hidden text-xl font-bold tracking-tight text-neutral-900 lg:block dark:text-white">
          STOREFRONT
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">New Arrivals</Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Men</Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Women</Link>
          <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">Accessories</Link>
          <Link href="#" className="text-sm font-medium text-red-500 hover:text-red-600">Sale</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
             <button className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                <BiSearch className="h-6 w-6" />
            </button>
             <button className="hidden text-neutral-600 hover:text-neutral-900 md:block dark:text-neutral-400 dark:hover:text-white">
                <BiUser className="h-6 w-6" />
            </button>
             <button className="hidden text-neutral-600 hover:text-neutral-900 md:block dark:text-neutral-400 dark:hover:text-white">
                <BiHeart className="h-6 w-6" />
            </button>
             <button className="relative text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white">
                <BiShoppingBag className="h-6 w-6" />
                <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] text-white dark:bg-white dark:text-black">2</span>
            </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerGradientCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderGradient() {
  return (
    <header className="bg-linear-to-r from-violet-600 to-indigo-600 text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="#" className="font-mono text-xl font-bold tracking-tighter">
          &lt;CODE /&gt;
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 bg-white/10 p-1 rounded-full md:flex backdrop-blur-md">
          <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
            Docs
          </Link>
           <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
            Components
          </Link>
           <Link href="#" className="rounded-full px-4 py-1.5 text-sm font-medium text-white transition hover:bg-white/20">
            Templates
          </Link>
        </nav>

        <div className="flex items-center gap-4">
             <Link href="#" className="hidden text-sm font-medium text-white/90 hover:text-white md:block">Login</Link>
             <button className="rounded-lg bg-white px-4 py-2 text-sm font-bold text-indigo-600 shadow-sm hover:bg-indigo-50">
                Get Access
             </button>
             <button className="md:hidden">
                <BiMenu className="h-6 w-6 text-white" />
            </button>
        </div>
      </div>
    </header>
  );
}`;

export const headerFloatingCode = `import Link from "next/link";
import { BiMenu } from "react-icons/bi";

export default function HeaderFloating() {
  return (
    <div className="relative mb-24 w-full bg-neutral-100 p-8 dark:bg-neutral-900">
        {/* Floating pill header */}
        <header className="mx-auto flex h-16 max-w-5xl items-center justify-between rounded-full border border-neutral-200/50 bg-white/80 px-6 shadow-xl backdrop-blur-xl dark:border-neutral-800/50 dark:bg-neutral-950/80">
            
            <div className="flex items-center gap-8">
                <Link href="#" className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-linear-to-tr from-orange-400 to-rose-500"></div>
                    <span className="font-bold text-neutral-900 dark:text-white">Float</span>
                </Link>

                <nav className="hidden items-center gap-6 md:flex">
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Work</Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">Services</Link>
                    <Link href="#" className="text-sm font-medium text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white">About</Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <button className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
                    Let's Talk
                </button>
                <button className="md:hidden">
                    <BiMenu className="h-6 w-6 text-neutral-900 dark:text-white" />
                </button>
            </div>
        </header>

         <div className="mt-8 text-center text-sm text-neutral-400">
            (Pill styles content below...)
        </div>
    </div>
  );
}`;
