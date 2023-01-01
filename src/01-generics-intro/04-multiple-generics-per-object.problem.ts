import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

// Learning: The parameters does not matter what matters is with whom we are assigning. Here T1 and T2 gets initalized with type of a and b respectively, First I need to focus on argument Types.
const returnBothOfWhatIPassIn = <T1, T2>(params: { a: T1; b: T2 }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
