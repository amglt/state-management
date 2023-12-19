import { ThemeWithContext } from "./WithContext/ThemeWithContext.tsx";
import { ThemeWithRedux } from "./WithRedux/ThemeWithRedux.tsx";
import { Provider } from "react-redux";
import { store } from "./WithRedux/store.ts";

function App() {
  return (
    <Provider store={store}>
      <ThemeWithContext />
      <ThemeWithRedux />
    </Provider>
  );
}

export default App;
