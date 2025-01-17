import { instance } from "./getAllProducts";
import AxiosMockAdapter from "axios-mock-adapter";
import { getProductById } from "./getProdutsById";

const mockData = { id: 1, title: "T-shirt", price: 19.99 };

describe("get product by id", () => {
  let mock: InstanceType<typeof AxiosMockAdapter>;
  beforeEach(() => {
    mock = new AxiosMockAdapter(instance);
  });

  afterEach(() => {
    mock?.restore();
  });
  test("fetches successfully data from an API with product ID", async () => {
    mock?.onGet("/products/1").reply(200, { data: mockData });
    const response = await getProductById(1);
    expect(response.data).toEqual(mockData);
  });
  test("shows error on error", async () => {
    mock?.onGet("/products/1").reply(200, { data: mockData });
    const response = await getProductById(1);
    expect(response.data).toEqual(mockData);
  });
});
