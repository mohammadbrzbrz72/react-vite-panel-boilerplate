import { useAppSelector } from "../hooks";

export function useAuthSelector() {
  const auth = useAppSelector((state) => state.auth);

  return auth;
}
