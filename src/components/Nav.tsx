import React from "react";
import Link from "next/link";

const links = [
  { name: "Timer", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Companies", href: "/companies" },
  { name: "User", href: "/user" },
  { name: "Reports", href: "/reports" }
];

export const Nav = () => (
  <nav>
    <ul>
      {links.map(l => (
        <li key={l.name}>
          <Link href={l.href}>
            <a>{l.name}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>{`
      nav {
        text-align: center;
      }
      ul {
        display: flex;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);
