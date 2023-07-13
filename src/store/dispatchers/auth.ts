import { useCallback } from "react";

import { useAppDispatch } from "../hooks";
import { authSlice } from "../features/auth";

interface IDispatchAuth {
  token: string;
  isLogin: boolean;
}

export function userSelector() {
  const dispatch = useAppDispatch();

  const dispatchAuth = useCallback((data: IDispatchAuth) => {
    dispatch(authSlice.actions.setAuth(data));
  }, []);

  const dispatchRemoveAuth = useCallback(() => {
    dispatch(authSlice.actions.removeAuth());
  }, []);

  return { dispatchAuth, dispatchRemoveAuth };
}
