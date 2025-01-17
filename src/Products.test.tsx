import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Products from "./Products";
import { useGetProductById } from "./hooks/useGetProductByID";

jest.mock("./hooks/useGetProductByID");
const mockGetProductWithID = jest.fn();
const mockUseGetProductById = {
  pro: null,
  getProductWithID: mockGetProductWithID,
};
const mockItem = {
  id: 1,
  title: "bla",
  price: 10,
  category: "ehh",
  description: "blah",
  image: "dgdgfg",
};

beforeEach(() => {
  (useGetProductById as jest.Mock).mockReturnValue(mockUseGetProductById);
});

test("renders product list", async () => {
  render(<Products product={mockItem} />);
  const title = screen.getByTestId(/tit/i);
  expect(title).toBeInTheDocument();
});

test("calls getProductbyID onClick", async () => {
  render(<Products product={mockItem} />);
  const productTitle = screen.getByTestId("tit");
  await userEvent.click(productTitle);
  expect(mockGetProductWithID).toHaveBeenCalledTimes(1);
  expect(mockGetProductWithID).toHaveBeenCalledWith(mockItem.id);
});

test("renders Item component with updated product", () => {
  (useGetProductById as jest.Mock).mockReturnValue({
    pro: mockItem,
    getProductWithID: mockGetProductWithID,
  });

  render(<Products product={mockItem} />);

  expect(screen.getByText("blah")).toBeInTheDocument();
});
