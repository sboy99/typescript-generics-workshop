import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <k1, k2>(a: k1, b: k2): { a: k1; b: k2 } => {
  return {
    a,
    b,
  };
};

it("Should return an object of the arguments you pass", () => {
  const result = returnBothOfWhatIPassIn("a", 1);

  expect(result).toEqual({
    a: "a",
    b: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        a: string;
        b: number;
      }
    >
  >;
});
