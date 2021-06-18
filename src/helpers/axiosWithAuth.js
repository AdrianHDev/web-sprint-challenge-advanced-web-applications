import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
//Task List:
//Build and export a function used to send in our authorization token