import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // TODO: hide this sensitive information
    key: "feedbf1896ec4551a0c3491f58650b16",
  },
});

export interface FetchResponse<T> {
  count: number;
  results: T[];
}
