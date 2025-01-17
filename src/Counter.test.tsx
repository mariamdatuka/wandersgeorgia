import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";
import { renderWithRedux } from "./test-utils/counterTest-utils";

test("renders counter and increments it", async () => {
  renderWithRedux(<Counter />);

  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");

  const incrementButton = screen.getByRole("button", { name: /increment/i });
  await userEvent.click(incrementButton);

  expect(counter).toHaveTextContent("1");
});

test("renders counter and decrements it", async () => {
  renderWithRedux(<Counter />);

  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");

  const decrementButton = screen.getByRole("button", { name: /decrement/i });
  await userEvent.click(decrementButton);

  expect(counter).toHaveTextContent("-1");
});

test("renders counter and increments by a given amount", async () => {
  renderWithRedux(<Counter />);

  const counter = screen.getByTestId("count");
  expect(counter).toHaveTextContent("0");

  const incrementByAmountButton = screen.getByRole("button", {
    name: /amount/i,
  });
  await userEvent.click(incrementByAmountButton);

  expect(counter).toHaveTextContent("5");
});
