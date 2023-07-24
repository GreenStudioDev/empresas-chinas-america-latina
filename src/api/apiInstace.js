import axios from "axios";

export const eraInstance = axios.create({
  baseURL: "https://fundacionandresbello.org/wp-json/fab/v1",
});


