import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/Hello/i);
  expect(headingElement).toBeInTheDocument();
});
