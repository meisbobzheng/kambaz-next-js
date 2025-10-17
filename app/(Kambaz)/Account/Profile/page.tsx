"use client";

import { Button, ButtonGroup, Form } from "react-bootstrap";

export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <Form className="d-flex flex-column gap-1">
        <Form.Control
          type="text"
          id="wd-username"
          placeholder="Username"
          defaultValue={"alice"}
        />
        <Form.Control
          type="password"
          id="wd-password"
          placeholder="Password"
          defaultValue={"123"}
        />
        <Form.Control
          type="text"
          id="wd-firstname"
          placeholder="First Name"
          defaultValue={"Alice"}
        />
        <Form.Control
          type="text"
          id="wd-lastname"
          placeholder="Last Name"
          defaultValue={"Wonderland"}
        />
        <Form.Control type="date" id="wd-dob" defaultValue={"2000-01-01"} />
        <Form.Control
          type="email"
          id="wd-email"
          placeholder="Email"
          defaultValue={"alice@wonderland.com"}
        />
        <Form.Select id="wd-role" defaultValue={"FACULTY"}>
          <option value="USER">User</option>
          <option value="ADMIN">Admin</option>
          <option value="FACULTY">Faculty</option>
          <option value="STUDENT">Student</option>
        </Form.Select>
        <ButtonGroup>
          <Button variant="danger" type="submit" className="wd-profile-btn">
            Sign out
          </Button>
        </ButtonGroup>
      </Form>
    </div>
  );
}
