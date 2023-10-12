import * as userActions from "./user/user.actions";
import { focuseSlice } from "./focuse/focuse.slice";
export const rootActions = {
  ...userActions,
  ...focuseSlice.actions,
};
