"use client";

import { Enrollment, User } from "@/app/types";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";

type EnrollmentGuardProps = {
  children: ReactNode;
  courseId: string;
};

export default function EnrollmentGuard({
  children,
  courseId,
}: EnrollmentGuardProps) {
  const router = useRouter();

  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User } }) => state.accountReducer
  );

  const { enrollments } = useSelector(
    (state: { enrollmentsReducer: { enrollments: Enrollment[] } }) =>
      state.enrollmentsReducer
  );

  const isFaculty = currentUser?.role === "FACULTY";

  const isEnrolled = enrollments.some(
    (enrollment: Enrollment) =>
      enrollment.user === currentUser?._id && enrollment.course === courseId
  );

  useEffect(() => {
    // Allow faculty to access all courses
    if (isFaculty) {
      return;
    }

    // Redirect non-enrolled users to Dashboard
    if (!isEnrolled) {
      router.push("/Dashboard");
    }
  }, [isEnrolled, isFaculty, router]);

  // Don't render content if not enrolled and not faculty
  if (!isFaculty && !isEnrolled) {
    return null;
  }

  return <>{children}</>;
}

