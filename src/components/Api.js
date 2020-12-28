import axios from "axios";

const api = (apiLink, callback) =>
  axios.get(apiLink).then((result) => {
    callback(result.data);
  });

export default api;
