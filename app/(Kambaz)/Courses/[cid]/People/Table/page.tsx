import { Table } from "react-bootstrap";
import TablePerson from "./TablePerson";

export default function PeopleTable() {
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
          <TablePerson
            firstName="Tony"
            lastName="Stark"
            loginId="001234561S"
            section="S101"
            role="STUDENT"
            lastActivity="2020-10-01"
            totalActivity="10:21:32"
          />
          <TablePerson
            firstName="Bruce"
            lastName="Wayne"
            loginId="001234562S"
            section="S101"
            role="STUDENT"
            lastActivity="2020-10-01"
            totalActivity="10:21:32"
          />
          <TablePerson
            firstName="Steve"
            lastName="Rogers"
            loginId="001234563S"
            section="S101"
            role="STUDENT"
            lastActivity="2020-10-01"
            totalActivity="10:21:32"
          />
          <TablePerson
            firstName="Natasha"
            lastName="Romanoff"
            loginId="001234564S"
            section="S101"
            role="STUDENT"
            lastActivity="2020-10-01"
            totalActivity="10:21:32"
          />
          <TablePerson
            firstName="Peter"
            lastName="Parker"
            loginId="001234565S"
            section="S101"
            role="STUDENT"
            lastActivity="2020-10-01"
            totalActivity="10:21:32"
          />
        </tbody>
      </Table>
    </div>
  );
}
