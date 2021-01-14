import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-ff42d.firebaseio.com/",
});

export default instance;
