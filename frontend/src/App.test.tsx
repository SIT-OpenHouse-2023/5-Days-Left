import React from "react";
import { render, screen } from "@testing-library/react";
import HomeView from "./views/HomeView";

test("renders learn react link", () => {
  render(<HomeView />);
  const element = screen.getByText("Hi");
  expect(element).toBeInTheDocument();
});
