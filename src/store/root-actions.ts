import * as userActions from "./user/user.actions";
import { videoSlice } from "./video/video.slice";
export const rootActions = {
  ...userActions,
  ...videoSlice.actions,
};
