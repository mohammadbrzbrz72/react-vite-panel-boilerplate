import { useAppSelector } from "../hooks";

export function useUserSelector() {
  const user = useAppSelector((state) => state.user);

  return user;
}
