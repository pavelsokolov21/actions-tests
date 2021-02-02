import { sum } from "./sum";

describe("sum", () => {
  it("should return 4", () => {
    expect(sum(2, 2)).toBe(4);
  });

  it("should return 5", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
