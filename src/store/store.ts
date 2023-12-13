import { Schema } from "electron-store";
import { UserId } from "./type";

export const userIdSchema: Schema<UserId> = {
  id: {
    type: "string",
    default: "",
  },
};
