import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "62f3d719ed334f489c4481bff764b0fb",
  },
});
