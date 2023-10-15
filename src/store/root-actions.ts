import * as userActions from "./user/user.actions";
import { videoActions } from "./video/video.slice";
export const rootActions = {
  ...userActions,
  ...videoActions,
};
