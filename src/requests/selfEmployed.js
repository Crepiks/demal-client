import request from "./request";

export const addSelfEmployed = async (userData, userId) =>
  await request({
    url: `/creators/${userId}`,
    method: "POST",
    data: userData,
  });
