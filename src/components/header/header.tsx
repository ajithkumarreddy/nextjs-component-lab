"use client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import RocketLaunch from "../../../public/rocket-launch.svg";
import type { HeaderProps } from "./header.types";
import { headerStyles } from "./header.styles";

const Header = ({ isBackEnabled }: HeaderProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const showBack = isBackEnabled || pathname.startsWith("/component");

  return (
    <header className={headerStyles.wrapper()}>
      {showBack ? (
        <Link
          role="link"
          href="/"
          className={headerStyles.link()}
        >
          ← Back
        </Link>
      ) : (
        <Image
          data-testid="logo"
          src={RocketLaunch}
          alt="logo"
          width={40}
          height={40}
        />
      )}
    </header>
  );
};

export default Header;
