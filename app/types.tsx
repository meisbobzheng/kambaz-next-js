export type Assignment = {
  _id: string;
  title: string;
  description: string;
  course: string;
  points: number;
  dueDate: string;
  availableFrom: string;
  availableUntil?: string;
  group?: string;
  displayGradeAs?: string;
  submissionType?: string;
  entryOptions?: string[];
  assignTo?: string;
  assignToOptions?: string[];
};
export type Course = {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  imageUrl: string;
  description: string;
  author?: string;
};
export type User = {
  _id: string;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  role: string;
  loginId: string;
  section: string;
  lastActivity: string;
  totalActivity: string;
};
export type Enrollment = {
  _id: string;
  user: string;
  course: string;
};
export type Module = {
  _id: string;
  name: string;
  description?: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
};
export type Lesson = {
  _id: string;
  name: string;
  module: string;
  content: string;
};
