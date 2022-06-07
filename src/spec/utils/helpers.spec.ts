import { API, getByClass } from "../../utils/helpers";

describe("getByClass", () => {
  it("Should return class details with provided player class", async () => {
    const spyDoRequest = jest
      .spyOn(API, "doRequest")
      .mockResolvedValueOnce("henk");
    const result = await getByClass("Bard");

    expect(API.doRequest).toHaveBeenCalled();
    expect(result).toBe("henk");
  });

  it("Should throw error if API is not available", async () => {
    const spyDoRequest = jest
      .spyOn(API, "doRequest")
      .mockRejectedValueOnce("Failed");

    // eslint-disable-next-line jest/no-conditional-expect
    await getByClass("Barbarian").catch((err) => expect(err).toBe("Failed"));
  });
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
