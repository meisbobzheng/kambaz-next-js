import axios from "axios";

const axiosWithCredentials = axios.create({ withCredentials: true });
const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const ENROLLMENTS_API = `${HTTP_SERVER}/api/courses`;
const USERS_API = `${HTTP_SERVER}/api/users`;

export const findEnrollmentsForUser = async (userId: string) => {
  const response = await axiosWithCredentials.get(
    `${USERS_API}/${userId}/enrollments`
  );
  return response.data;
};

export const findEnrollmentsForCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.get(
    `${ENROLLMENTS_API}/${courseId}/enrollments`
  );
  return response.data;
};

export const enrollInCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.post(
    `${ENROLLMENTS_API}/${courseId}/enrollments`
  );
  return response.data;
};

export const unenrollFromCourse = async (courseId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ENROLLMENTS_API}/${courseId}/enrollments`
  );
  return response.data;
};

