const Intern = require("../lib/Intern");

describe("Intern", () => {
  // Positive Test
  test("should create an object with 'school' string", () => {
    // Act
    const intern = new Intern("Sasha", 14, "sasha@gmail.com", "GA State");
    // Assert
    expect(intern.getSchool()).toEqual("GA State");
  });
  test("should throw an error if school is not a string", () => {
    // Act
    const err = new Error(
      "Expected parameter 'school' to be a non-empty string"
    );
    // Assert
    expect(() => {
      new Intern("Sasha", 14, "sasha@gmail.com", 3).validateIntern();
    }).toThrow(err);
  });
  test("should override title to equal 'intern'", () => {
    const intern = new Intern("Sasha", 14, "sasha@gmail.com", "GA State");

    expect(intern.getTitle()).toEqual("Intern");
  });
});
