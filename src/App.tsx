import "./locales/i18n";
import Router from "./routes";
import ReactQueryProvider from "./services/queries/react-query/rq.provider";
import ReduxProvider from "./store/provider";

function App() {
  return (
    <ReactQueryProvider>
      <ReduxProvider>
        <Router />
      </ReduxProvider>
    </ReactQueryProvider>
  );
}

export default App;
