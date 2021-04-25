import request from "./request";

export const getEvents = async () =>
  await request({
    url: "/events",
    method: "GET",
  });
