import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store";

interface IReduxProvider {
  children: React.ReactNode;
}

function ReduxProvider({ children }: IReduxProvider) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

export default ReduxProvider;
