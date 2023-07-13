import ReactQueryProvider from "./services/queries/react-query/rq.provider";
import ReduxProvider from "./store/provider";
import Router from "./routes";

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
