"use client";
import { User } from "@/app/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User } }) => state.accountReducer
  );
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const pathname = usePathname();
  return (
    <Nav variant="pills">
      {links.map((link) => (
        <NavItem key={link}>
          <NavLink
            as={Link}
            href={link}
            active={pathname.endsWith(link.toLowerCase())}
          >
            {link}{" "}
          </NavLink>{" "}
        </NavItem>
      ))}
    </Nav>
  );
}
