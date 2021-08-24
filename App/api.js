import axios from "axios";

axios.defaults.baseURL = "https://api.reddit.com/r/pics";

export function getNewPost() {
  return axios.get("/new.json").then((res) => res.data);
}
export function getHotPost() {
  return axios.get("/hot.json").then((res) => res.data);
}

export function getTopPost() {
  return axios.get("/top.json").then((res) => res.data);
}
export function getControversialPost() {
  return axios.get("/controversial.json").then((res) => res.data);
}
