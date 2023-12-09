import { useQuery } from "react-query";
import axios from "axios";

export function API_login(username: string) {
  return useQuery(["login", username], async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/search/users?q=author:${username}`
    );
    return data;
  });
}
