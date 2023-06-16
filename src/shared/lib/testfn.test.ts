import { testfn } from "./testfn";

describe("testfn", () => {
  it("test", () => {
    expect(testfn(1, 2)).toBe(3);
  });
  it("test 2", () => {
    expect(testfn(-1, 1)).toBe(0);
  });
});
