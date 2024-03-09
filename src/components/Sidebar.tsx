"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HiOutlineRectangleGroup,
  HiOutlineUser,
  HiOutlineHome,
} from "react-icons/hi2";
import { classNames } from "../utils/classNames";
import styles from "~/styles/sidebar.module.scss";
import { useMemo } from "react";

const Sidebar = () => {
  const currentPath = usePathname();

  const navLinks = [
    {
      name: "Home",
      href: "/",
      icon: <HiOutlineHome className="h-5 w-5" />,
    },
    {
      name: "Posts",
      href: "/posts",
      icon: <HiOutlineRectangleGroup className="h-5 w-5" />,
    },
    {
      name: "About",
      href: "/about",
      icon: <HiOutlineUser className="h-5 w-5" />,
    },
  ];

  const links = useMemo(
    () =>
      navLinks.map((link) => (
        <Link key={link.name} href={link.href} className="w-full">
          <li
            className={classNames(
              styles.li,
              currentPath == link.href ? styles.liActive : styles.liDefault,
            )}
          >
            <div className="flex items-center gap-2">
              <div>{link.icon}</div>
              <p>{link.name}</p>
            </div>
          </li>
        </Link>
      )),
    [currentPath],
  );

  return (
    <div className=" sticky top-0 flex flex-col gap-6 pl-4 pt-4">
      <div className="mr-4">
        <Link href={"/"} className="text-xl font-semibold text-primary-content">
          IMMELNYK
        </Link>
      </div>
      <nav>
        <ul className={styles.list}>{links}</ul>
      </nav>
    </div>
  );
};

export default Sidebar;
