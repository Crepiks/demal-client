import request from "./request";

export const payDonation = async (eventId, data) =>
  await request({
    url: `/events/${eventId}/participants`,
    method: "POST",
    data: data,
  });
