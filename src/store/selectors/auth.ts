import { useAppSelector } from "../hooks";

export function authSelector() {
  const auth = useAppSelector((state) => state.auth);

  return auth;
}
