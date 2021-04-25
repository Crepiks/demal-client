import request from "./request";

export const getUser = async (userId) =>
  await request({
    url: `/users/${userId}`,
    method: "GET",
  });
