const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  test("should create an object with 'github' string", () => {
    const engineer = new Engineer("Alex", 23, "alex@alexmail.com", "amachkel");

    expect(engineer.getGithub()).toEqual("amachkel");
  });
  test("getTitle should return 'engineer'", () => {
    const engineer = new Engineer("Alex", 23, "alex@alexmail.com", "amachkel");

    expect(engineer.getTitle()).toEqual("Engineer");
  })
  test("should throw an error if 'github username' is not a string", () => {
    // Act
    const err = new Error(
      "Expected parameter 'github' to be a non-empty string"
    );
    // Assert
    expect(() => {
      new Engineer("Alex", 23, "alex@alexmail.com", 12).validateEngineer();
    }).toThrow(err);
  });
});
