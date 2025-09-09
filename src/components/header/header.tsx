"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import RocketLaunch from "../../../public/rocket-launch.svg";
import type { HeaderProps } from "./header.types";
import { headerStyles } from "./header.styles";

const Header = ({ isBackEnabled = false }: HeaderProps) => {
  const pathname = usePathname();

  const showBack = isBackEnabled || pathname.startsWith("/component");

  return (
    <header className={headerStyles.wrapper()}>
      {showBack ? (
        <Link
          data-testid="link"
          href="/"
          aria-label="Go back to home"
          className={headerStyles.link()}
        >
          ← Back
        </Link>
      ) : (
        <div className="flex flex-row items-center space-x-2">
          <Image
            data-testid="logo"
            src={RocketLaunch}
            alt="App logo"
            width={28}
            height={28}
          />
          <h1 className="text-xl font-bold">Component Lab</h1>
        </div>
      )}
    </header>
  );
};

export default Header;
