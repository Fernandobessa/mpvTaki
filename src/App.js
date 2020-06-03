import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./store/routers";

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
