import { testfn } from "./testfn";

describe("testfn", () => {
  test("test", () => {
    expect(testfn(1, 2)).toBe(3);
  });
  test("test 2", () => {
    expect(testfn(-1, 1)).toBe(0);
  });
});
