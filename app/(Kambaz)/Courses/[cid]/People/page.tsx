"use client";

import { useParams } from "next/navigation";
import { Table } from "react-bootstrap";
import * as db from "../../../Database";
import TablePerson from "./Table/TablePerson";

export default function PeopleTable() {
  const { cid } = useParams();
  const { users, enrollments } = db;

  return (
    <div id="wd-people-table">
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user: any) =>
              enrollments.find(
                (enrollment: any) =>
                  enrollment.user === user._id && enrollment.course === cid
              )
            )
            .map((user: any) => (
              <TablePerson
                key={user._id}
                firstName={user.firstName}
                lastName={user.lastName}
                loginId={user.loginId}
                section="S101"
                role="STUDENT"
                lastActivity="2020-10-01"
                totalActivity="10:21:33"
              />
            ))}
        </tbody>
      </Table>
    </div>
  );
}
