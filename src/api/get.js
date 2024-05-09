import http from "./http-common";

const getReq = async (url) => {
  try {
    const response = await http.get(url);

    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export default getReq;
