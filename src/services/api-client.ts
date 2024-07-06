import axios, {AxiosRequestConfig} from "axios";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    // TODO: hide this sensitive information
    key: "feedbf1896ec4551a0c3491f58650b16",
  },
});

class APIClient<T> {
  endpoint: string
  
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  }
}

export default APIClient