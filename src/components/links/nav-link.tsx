import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavLink = ({ link, linkText }: any) => {
  const pathname = usePathname();
  return (
    <Link
      href={link}
      className={cn(
        "capitalize text-sm lg:text-base ",
        pathname.includes(link) ? "text-primary" : "hover:text-primary/90"
      )}
    >
      {linkText}
    </Link>
  );
};

export default NavLink;
