"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { navbarMenu } from "../constants/index"; // Import menu data
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"; // Import ShadCN components
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"; // Import Sheet for mobile menu

function Navbar() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false); // State for sidebar visibility

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  // Function to close the sidebar when a link is clicked
  const handleMenuClick = () => {
    setIsSheetOpen(false); // Close the sidebar
  };

  return (
    <section className="top-0 sticky z-50 bg-main border-dashed flex items-center justify-around py-[15px] px-4 lg:px-6">
      <div className="max-w-[95%] w-full md:gap-16 gap-0 mx-auto flex md:justify-center justify-between items-center z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-x-2 cursor-pointer">
          <Image
            alt="Logo"
            src="/main.png"
            width={100}
            height={18}
            className="lg:w-[10vw]"
            data-aos="fade-right"
          />
        </Link>

        {/* Desktop Navigation Menu */}
        <div className="hidden lg:flex items-center gap-8" data-aos="fade-down">
          <NavigationMenu>
            <NavigationMenuList className="flex flex-wrap gap-6  text-white text-md font-medium font-urbanist">
              {navbarMenu.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.subMenu ? (
                    <>
                      <NavigationMenuTrigger
                        className={`${pathname === item.href ? "text-blue" : "text-[#7A7C6C]"
                          } bg-main text-lg`}
                      >
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0  text-black rounded-md shadow-lg ">
                        {item.subMenu.map((subItem) => (
                          <NavigationMenuLink asChild key={subItem.name} className="">
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 rounded-md w-[30vw] hover:text-blue "
                            >
                              {subItem.name}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={`${pathname === item.href ? "text-blue" : "text-[#7A7C6C]"
                          }`}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
            <NavigationMenuIndicator />
            <NavigationMenuViewport />
          </NavigationMenu>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger className="bg-blue rounded-full p-2 cursor-pointer">
              <Image src="/icon/menu.svg" alt="menu" width={40} height={40} />
            </SheetTrigger>
            <SheetContent className="bg-main overflow-y-auto max-h-screen">
              <SheetHeader className="h-full">
                <SheetTitle className="mb-8">
                  <Link href="/" className="flex items-center gap-x-2">
                    <Image
                      alt="Logo"
                      src="/main.png"
                      width={160}
                      height={48}
                      data-aos="fade-right"
                    />
                  </Link>
                </SheetTitle>
                <SheetDescription className="h-[calc(100vh-120px)] overflow-y-auto">
                  <ul className="flex flex-col gap-5 text-black text-md font-medium font-urbanist">
                    {navbarMenu.map((item) => (
                      <li
                        key={item.name}
                        className={`cursor-pointer ${
                          pathname === item.href ? "text-blue" : "text-black"
                        } text-xl`}
                      >
                        {item.subMenu ? (
                          <div className="relative">
                            <span onClick={() => setIsSheetOpen((prev) => !prev)}>
                              {item.name}
                            </span>
                            <ul className="bg-main text-black rounded-md border-2 border-black mt-2">
                              {item.subMenu.map((subItem) => (
                                <li
                                  key={subItem.name}
                                  className="px-4 py-2 hover:bg-gray-100"
                                  onClick={handleMenuClick}
                                >
                                  <Link href={subItem.href}>
                                    {subItem.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : (
                          <Link href={item.href} onClick={handleMenuClick}>
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
