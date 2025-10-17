import { Button } from "react-bootstrap";
import { BiImport } from "react-icons/bi";
import { FaCheckCircle, FaHome } from "react-icons/fa";
import { GrAnnounce } from "react-icons/gr";
import { IoNotificationsSharp } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { MdAutoGraph, MdDoNotDisturbAlt } from "react-icons/md";
import { VscGraph } from "react-icons/vsc";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" style={{ width: "350px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish
          </Button>
        </div>
        <div className="w-50">
          <Button variant="success" size="lg" className="w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish
          </Button>
        </div>
      </div>
      <br />
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <FaHome className="me-2 fs-5" /> Choose Home Page
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <VscGraph className="me-2 fs-5" /> View Course Stream
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <GrAnnounce className="me-2 fs-5" /> New Announcement
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <MdAutoGraph className="me-2 fs-5" /> New Analytics
      </Button>
      <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
        <IoNotificationsSharp className="me-2 fs-5" /> View Course Notifications
      </Button>
    </div>
  );
}

// export default function CourseStatus() {
//   return (
//     <div id="wd-course-status" style={{ display: 'flex', flexDirection: 'column' }}>
//       <h2>Course Status</h2>
//       <div>
//         <button>Unpublish</button>
//         <button>Publish</button>
//       </div>
//       <br/>
//       <button>Important Existing Content</button>
//       <button>Import from Commons</button>
//       <button>Choose Home Page</button>
//       <button>View Course Stream</button>
//       <button>New Announcement</button>
//       <button>New Analytics</button>
//       <button>View Course Notifications</button>
//     </div>
//   );
// }
