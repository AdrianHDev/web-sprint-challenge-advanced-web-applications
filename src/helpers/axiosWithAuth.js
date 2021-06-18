import axios from "axios";

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      authorization: localStorage.getItem("token"),
    },
  });
};
//Task List:
//Build and export a function used to send in our authorization token
export default axiosWithAuth