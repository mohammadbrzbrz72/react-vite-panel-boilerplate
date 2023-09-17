import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { userSlice } from "../features/user";

export function useUserSelector() {
  const dispatch = useAppDispatch();

  const dispatchNewUser = useCallback(() => {
    dispatch(
      userSlice.actions.newUser({
        fullname: "sara female",
        age: 29,
        gender: "female",
      }),
    );
  }, []);

  const dispatchRemoveUser = useCallback(() => {
    dispatch(userSlice.actions.removeUser());
  }, []);

  return { dispatchNewUser, dispatchRemoveUser };
}
