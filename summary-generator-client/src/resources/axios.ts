import axios from "axios";

export default axios.create({
  baseURL: "https://1d566xm3si.execute-api.eu-west-2.amazonaws.com/",
  // timeout: 1000,
});
