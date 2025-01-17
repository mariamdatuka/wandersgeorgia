import * as mathFile from "./mathFile";

afterEach(() => {
  jest.restoreAllMocks();
});
test("spy on add method", () => {
  const spy = jest.spyOn(mathFile, "add").mockReturnValue(3);
  const result = mathFile.add(1, 2);

  expect(spy).toHaveBeenCalled();
  expect(result).toBe(3);
});

test("real add method", () => {
  const spy = jest.spyOn(mathFile, "add");
  const result = mathFile.add(4, 2);

  expect(spy).toHaveBeenCalled();
  expect(result).toBe(6);
});

// import { add } from "./mathFile";

// jest.mock("./mathFile", () => {
//   const originalModule = jest.requireActual("./mathFile");
//   return {
//     ...originalModule,
//     add: jest.fn(originalModule.add),
//   };
// });

// test.only("should do partial mock", () => {
//   const result = add(5, 2);
//   expect(result).toBe(7);
//   expect(add).toHaveBeenCalled();
// });
