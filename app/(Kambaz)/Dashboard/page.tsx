import Image from "next/image";
import Link from "next/link";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> CS1111 Intro to Python </h5>
              <p className="wd-dashboard-course-title">Snake</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> CS1112 Intro to Python 2 </h5>
              <p className="wd-dashboard-course-title">So many snakes</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> CS1210 Co-Op Class </h5>
              <p className="wd-dashboard-course-title">How to get a dang job</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> FI1212 Personal Finance </h5>
              <p className="wd-dashboard-course-title">Saving for retirement</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> CY1234 Foundation of Cybersecurity </h5>
              <p className="wd-dashboard-course-title">
                Cybersecurity for dummies
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link href="/Courses/1234" className="wd-dashboard-course-link">
            <Image src="/images/teslabot.jpg" width={200} height={150} />
            <div>
              <h5> ME1122 Mechanical Concepts </h5>
              <p className="wd-dashboard-course-title">Engineering is easy</p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
