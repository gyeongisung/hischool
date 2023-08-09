import { client } from "../client";

export const getHighestMockRecord = async setHighestMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-highrating`);
    const result = res.data;
    setHighestMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getCurrentMockRecord = async setCurrentMockRecord => {
  try {
    const res = await client.get(`/api/student/mock-currentrating`);
    const result = res.data;
    setCurrentMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};

export const getAllMockRecord = async (
  setDefaultMockRecord,
  setAllMockRecord,
) => {
  try {
    const res = await client.get(`/api/student/mock-table`);
    const result = res.data;
    setDefaultMockRecord(result);
    setAllMockRecord(result);
  } catch (err) {
    console.log(err);
  }
};
