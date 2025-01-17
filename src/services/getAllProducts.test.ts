// import mockAxios from "axios";

import { instance } from "./getAllProducts";
import AxiosMockAdapter from "axios-mock-adapter";
import getAllProducts from "./getAllProducts";

const mockData = [
  { id: 1, title: "T-shirt", price: 19.99 },
  { id: 2, title: "Laptop", price: 999.99 },
];

// (mockAxios.get as jest.Mock).mockResolvedValue({ data: mockData });

// describe("getAllProducts", () => {
//   test("fetches successfully data from an API", async () => {
//     const data = await getAllProducts();
//     expect(data).toEqual(mockData);
//   });
// });

//use mock adapter !
describe("getAllProducts", () => {
  let mock: InstanceType<typeof AxiosMockAdapter>;

  beforeEach(() => {
    mock = new AxiosMockAdapter(instance); // Create a new mock instance before each test
  });

  afterEach(() => {
    mock?.restore(); // Reset mocks after each test
  });

  test("fetches successfully data from an API", async () => {
    mock?.onGet("/products").reply(200, { data: mockData });

    const response = await getAllProducts();
    expect(response.data).toEqual(mockData);
  });

  test("handles API error", async () => {
    mock?.onGet("/products").reply(500);

    await expect(getAllProducts()).rejects.toThrow();
  });
});
