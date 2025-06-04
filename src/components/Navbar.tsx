import { MonitorSmartphone, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './ThemeSwitcher';

const Navbar = () => {
  return (
    <header className="fixed  w-full flex justify-between bg-white dark:bg-black items-center shadow-xl  px-20 h-20 z-10">
      <div className="flex items-center gap-3">
        <MonitorSmartphone />
        <Link href={'/'} className="text-2xl">
          Ecommerce
        </Link>
      </div>
      <div className="flex items-center gap-3">
        <ShoppingCart />
        <ModeToggle />
        {/* <MegaMenu /> */}
      </div>
    </header>
  );
};

export default Navbar;
