"use client";

import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Signin() {
  return (
    <div id="wd-signin-screen">
      <h3>Sign in</h3>
      <Form
        className="d-flex flex-column"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = "/Dashboard";
        }}
      >
        <Form.Group className="mb-3">
          <Form.Control type="text" id="wd-username" placeholder="Username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            id="wd-password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="danger" type="submit" className="wd-signin-btn">
          <Link href="/Dashboard"> Sign in </Link>
        </Button>
      </Form>
      <br />
      <Link href="Signup"> Sign up </Link>
    </div>
  );
}
