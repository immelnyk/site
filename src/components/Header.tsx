import useUser from "~/hooks/useUser";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signIn, signOut } from "next-auth/react";
import { classNames } from "~/utils/classNames";
import Image from "next/image";
import { HiChevronDown } from "react-icons/hi2";
import Card from "./layout/Card";

export default function Header() {
  const user = useUser();

  return (
    <Card>
      <header className="flex items-stretch justify-between">
        <h2 className=" text-2xl font-bold text-primary-dark">
          {user ? (
            <span>👋 Hi, {user.name}!</span>
          ) : (
            <span>👋 Hi, stranger!</span>
          )}
        </h2>
        {user ? (
          <Menu as="div" className="relative inline-block text-left">
            {({ open }) => (
              <>
                <div>
                  <Menu.Button className="flex items-center gap-1 rounded-lg">
                    <Image
                      height={40}
                      width={40}
                      className="rounded-full border-2 border-primary-dark"
                      src={user.image as string}
                      alt={user.name as string}
                    />
                    <HiChevronDown
                      className={classNames(
                        open ? "rotate-180" : "",
                        "h-5 w-5 fill-primary-dark transition-all",
                      )}
                    />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                    <div className="px-1 py-1 ">
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => void signOut({ redirect: false })}
                            className={`${
                              active
                                ? "bg-violet-500 text-white"
                                : "text-gray-900"
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm transition-all`}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        ) : (
          <button
            className={classNames(
              "rounded-lg bg-primary-light px-2 py-1 text-sm text-primary-content",
            )}
            onClick={() => void signIn()}
          >
            Sign in
          </button>
        )}
      </header>
    </Card>
  );
}
