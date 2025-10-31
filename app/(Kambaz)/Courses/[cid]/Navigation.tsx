"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
export default function CourseNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  const { cid } = useParams();
  const pathname = usePathname();

  const activeLink = links.find((link) => pathname.includes(link));

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link, index) => (
        <Link
          key={`${index}-${link}`}
          href={`/Courses/${cid}/${link}`}
          className={`list-group-item text-danger border-0
              ${activeLink === link ? "active" : ""}`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
