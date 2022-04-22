const Manager = require("../lib/Manager");

describe("Manager", () => {
  // Positive test
  test("should create an object with 'officeNumber' string", () => {
    // Act
    const manager = new Manager("Sissy", 23, "sissy@mail.com", 112);
    // Assert
    expect(manager.getOfficeNumber()).toEqual(112);
  });
  // Exception Test
  test("should throw an error if officeNumber is not a number", () => {
    // Act
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );
    // Assert
    expect(() => {
      new Manager("Sissy", 23, "sissy@mail.com", "112").validateManager();
    }).toThrow(err);
  });
  // Exception Test
  test("should throw an error if officeNumber is less than zero", () => {
    // Act
    const err = new Error(
      "Expected parameter 'officeNumber' to be a non-negative number"
    );
    // Assert
    expect(() => {
      new Manager("Sissy", 23, "sissy@mail.com", -4).validateManager();
    }).toThrow(err);
  });
  // Positive test
  test("should override title to equal 'Manager'", () => {
    const manager = new Manager("Sissy", 23, "sissy@mail.com", 112);

    expect(manager.getTitle()).toEqual("Manager");
  });
});
