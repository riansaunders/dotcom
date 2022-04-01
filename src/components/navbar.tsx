import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export function Navbar() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-between flex-1 px-2 lg:px-0">
                <div className="flex-shrink-0">
                  <Link href="/">
                    <a className="block lg:hidden h-8 w-auto text-white text-xl">
                      Rian Saunders
                    </a>
                  </Link>

                  <Link href="/">
                    <a className="hidden lg:block h-8 w-auto text-white text-xl">
                      Rian Saunders
                    </a>
                  </Link>
                </div>
                <div className={"flex flex-1 "}></div>
                <div className="hidden lg:block lg:ml-6 ">
                  <div className="flex space-x-4">
                    <Link href="/#my-work">
                      <a className=" text-white hover:underline-offset-8 hover:underline  px-3 py-2 rounded-md text-sm font-medium">
                        My Work
                      </a>
                    </Link>
                    <a
                      href={"/#contact"}
                      className="transition-all text-white bg-[#4bacfc] hover:bg-[#457399]    px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact Me
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex lg:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md  text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="/#my-work">
                <Disclosure.Button
                  as="a"
                  href="/#my-work"
                  className=" text-white hover:underline  block px-3 py-2 rounded-md text-base font-medium"
                >
                  My Work
                </Disclosure.Button>
              </Link>

              <Disclosure.Button
                as="a"
                href={"/#contact"}
                className="text-white transition-all bg-[#4bacfc] hover:bg-[#457399]  block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact Me
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
