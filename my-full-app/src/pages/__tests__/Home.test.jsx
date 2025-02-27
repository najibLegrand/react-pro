// src/pages/__tests__/Home.test.jsx
import { render, screen } from "@testing-library/react";
import Home from "../Home";
import { Provider } from "react-redux";
import store from "../../store";
import { BrowserRouter } from "react-router-dom";

test("affiche la page d'accueil", () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </Provider>
  );
  expect(screen.getByText("Page d'accueil")).toBeInTheDocument();
});
