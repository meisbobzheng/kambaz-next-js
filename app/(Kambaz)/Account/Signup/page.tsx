"use client";

import Link from "next/link";
import { Button, Form } from "react-bootstrap";

export default function Signup() {
  return (
    <div id="wd-signup-screen">
      <h3>Sign up</h3>
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
        <Button variant="danger" type="submit" className="wd-signup-btn">
          Sign up
        </Button>
      </Form>
      <br />
      <Link href="Signin"> Sign in </Link>
    </div>
  );
}
