import {
  getByClass,
  getByClassLevel,
  getProficiencyBonus,
} from "../../utils/helpers";

jest.mock("getByClass").fn(() => {
  "henk";
});

describe("getByClass", () => {
  it("Should return class details with provided player class", () => {
    const result = getByClass("Bard");

    expect(result).toBe("henk");
  });
  it.todo("Should throw error if API is not available");
});

describe("getByClassLevel", () => {
  it.todo(
    "Should return class level details with provided player class and level"
  );
  it.todo("Should throw error if API is not available");
});

describe("getProficiencyBonus", () => {
  it.todo(
    "Should return Proficiency Bonus when provided player class and level"
  );
  it.todo("Should throw error if API is not available");
});
