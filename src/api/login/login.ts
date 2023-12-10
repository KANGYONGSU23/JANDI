import { useQuery } from "react-query";
import axios from "axios";
import ElectronStore from "electron-store";

export function API_login(username: string) {
  return useQuery(
    ["login", username],
    async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/users/${username}`
      );
      return data;
    },
    { enabled: false, onSuccess: (res) => {} }
  );
}
