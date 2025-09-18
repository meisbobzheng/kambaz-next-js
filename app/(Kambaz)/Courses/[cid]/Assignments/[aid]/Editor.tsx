export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div>
          <label htmlFor="wd-name">
            <h2>Assignment Name</h2>
          </label>
          <input type="text" id="wd-name" defaultValue="A1 - ENV + HTML" />
        </div>

        <br />

        <div>
          <textarea
            id="wd-description"
            rows={10}
            defaultValue="The assignment is available online Submit a link to the landing page of your Web site on GitHub Pages. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page."
          />
        </div>

        <br />

        <div>
          <label htmlFor="wd-points">Points </label>
          <input type="number" id="wd-points" defaultValue="100" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-group">Assignment Group </label>
          <select id="wd-group">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="wd-display-grade-as">Display Grade as </label>
          <select id="wd-display-grade-as">
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Letter Grade">Letter Grade</option>
            <option value="GPA Scale">GPA Scale</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="wd-submission-type">Submission Type </label>
          <select id="wd-submission-type">
            <option value="Online">Online</option>
            <option value="Paper">Paper</option>
            <option value="External Tool">External Tool</option>
          </select>
        </div>

        <br />

        <div>
          Online Entry Options
          <div>
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div>
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div>
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div>
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div>
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>

        <br />

        <div>
          <label htmlFor="wd-assign-to">Assign to </label>
          <input type="text" id="wd-assign-to" defaultValue="Everyone" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-due-date">Due </label>
          <input type="date" id="wd-due-date" defaultValue="2024-05-13" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-available-from">Available from </label>
          <input type="date" id="wd-available-from" defaultValue="2024-05-06" />
        </div>

        <br />

        <div>
          <label htmlFor="wd-available-until">Until </label>
          <input
            type="date"
            id="wd-available-until"
            defaultValue="2024-05-28"
          />
        </div>

        <br />

        <div>
          <button type="button">Cancel</button>
          <button type="submit">Save</button>
        </div>
      </form>
    </div>
  );
}
