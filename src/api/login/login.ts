import { useQuery } from "react-query";
import axios from "axios";
import Store from "electron-store";
import { userIdSchema } from "../../store/store";
import { UserId } from "../../store/type";

export function API_login(username: string) {
  const store = new Store<UserId>({ schema: userIdSchema });
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
