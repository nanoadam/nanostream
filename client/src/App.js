import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./theme/main.scss";
import Routes from "./routing/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
