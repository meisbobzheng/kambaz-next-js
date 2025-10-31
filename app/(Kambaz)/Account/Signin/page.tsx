"use client";
import { User } from "@/app/types";
import { redirect } from "next/dist/client/components/navigation";
import Link from "next/link";
import { useState } from "react";
import { Button, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import * as db from "../../Database";
import { setCurrentUser } from "../reducer";

export default function Signin() {
  const [credentials, setCredentials] = useState<Partial<User>>({});
  const dispatch = useDispatch();
  const signin = () => {
    console.log(credentials);
    const user = db.users.find(
      (u: User) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );
    if (!user) return;
    dispatch(setCurrentUser(user));
    redirect("/Dashboard");
  };
  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      <FormControl
        defaultValue={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="mb-2"
        placeholder="username"
        id="wd-username"
      />
      <FormControl
        defaultValue={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="mb-2"
        placeholder="password"
        type="password"
        id="wd-password"
      />
      <Button onClick={signin} id="wd-signin-btn" className="w-100">
        {" "}
        Sign in{" "}
      </Button>
      <Link id="wd-signup-link" href="/Kambaz/Account/Signup">
        {" "}
        Sign up{" "}
      </Link>
    </div>
  );
}
