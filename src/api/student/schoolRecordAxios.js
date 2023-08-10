import { client } from "../client";

export const getHighestSchoolRecord = async setHighestSchoolRecord => {
  try {
    const res = await client.get(`/api/student/aca-highest`);
    const result = res.data;
    setHighestSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentSchoolRecord = async setCurrentSchoolRecord => {
  try {
    const res = await client.get(`/api/student/aca-latest`);
    const result = res.data.list;
    setCurrentSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllSchoolRecord = async (
  setDefaultSchoolRecord,
  setAllSchoolRecord,
  year,
  semester,
  testType,
) => {
  try {
    let axiosUrl;
    if (year && semester && testType) {
      axiosUrl = `/api/student/aca-table?year=${year}&semester=${semester}&midFinal=${testType}`;
    } else if (year && semester && !testType) {
      axiosUrl = `/api/student/aca-table?year=${year}&semester=${semester}`;
    } else if (year && !semester && !testType) {
      axiosUrl = `/api/student/aca-table?year=${year}`;
    } else if (!year && semester && !testType) {
      axiosUrl = `/api/student/aca-table?semester=${semester}`;
    } else if (!year && !semester && testType) {
      axiosUrl = `/api/student/aca-table?midFinal=${testType}`;
    } else if (!year && semester && testType) {
      axiosUrl = `/api/student/aca-table?semester=${semester}&midFinal=${testType}`;
    } else {
      axiosUrl = `/api/student/aca-table`;
      const res = await client.get(axiosUrl);
      const result = res.data;
      setDefaultSchoolRecord(result);
    }
    const res = await client.get(axiosUrl);
    const result = res.data;
    setAllSchoolRecord(result);
  } catch (err) {
    console.log(err);
  }
};
