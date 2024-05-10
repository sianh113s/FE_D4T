import http from "./http-common";

const postReq = async (url, data) => {
  try {
    const response = await http.post(url, data);

    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export default postReq;
