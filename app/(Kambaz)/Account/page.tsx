"use client";
import { User } from "@/app/types";
import { redirect } from "next/dist/client/components/navigation";
import { useSelector } from "react-redux";

export default function AccountPage() {
  const { currentUser } = useSelector(
    (state: { accountReducer: { currentUser: User } }) => state.accountReducer
  );
  if (!currentUser) {
    redirect("/Account/Signin");
  } else {
    redirect("/Account/Profile");
  }
}
