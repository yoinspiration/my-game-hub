import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "feedbf1896ec4551a0c3491f58650b16",
  },
});
