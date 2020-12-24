const { test, expect } = require("@jest/globals");

const { verifyPass } = require("./verifier");

describe("verifyPass", () => {
  test("no rules, passes", () => {
    const result = verifyPass("any password", []);

    expect(result).toBeTruthy();
  });

  test("one failed rule, fails", () => {
    const result = verifyPass("any password", [(input) => false]);

    expect(result).toBeFalsy();
  });

  test("one rule, passes", () => {
    const result = verifyPass("any password", [(input) => true]);

    expect(result).toBeTruthy();
  });
});
