import { FaUserCircle } from "react-icons/fa";

type TablePersonProps = {
  firstName: string;
  lastName: string;
  loginId: string;
  section: string;
  role: string;
  lastActivity: string;
  totalActivity: string;
};

export default function TablePerson({
  firstName,
  lastName,
  loginId,
  section,
  role,
  lastActivity,
  totalActivity,
}: TablePersonProps) {
  return (
    <tr>
      <td className="wd-full-name text-nowrap">
        <FaUserCircle className="me-2 fs-1 text-secondary" />
        <span className="wd-first-name">{firstName}</span>{" "}
        <span className="wd-last-name"> {lastName}</span>
      </td>
      <td className="wd-login-id"> {loginId}</td>
      <td className="wd-section"> {section} </td>
      <td className="wd-role"> {role}</td>
      <td className="wd-last-activity"> {lastActivity}</td>
      <td className="wd-total-activity"> {totalActivity}</td>
    </tr>
  );
}
