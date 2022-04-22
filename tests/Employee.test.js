const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    //positive test
    test("should create an object with 'name' string, 'ID' number, 'email' string, and 'title' string", () => {
      // Act
      const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
      // Assert
      expect(employee.name).toEqual("Fred");
      expect(employee.id).toEqual(12);
      expect(employee.email).toEqual("fred@gmail.com");
      expect(employee.title).toEqual("Employee");
    });
    test("should throw an error if provided no arguments", () => {
      expect(() => {
        new Employee().validateEmployee();
      }).toThrow();
    });
    test("should throw an error if name is not a string", () => {
      const err = new Error(
        "Expected parameter 'name' to be a non-empty string"
      );
      // Assert
      expect(() => {
        new Employee(3, 12, "fred@gmail.com", "Employee").validateEmployee();
      }).toThrow(err);
    });

    //exception test
    test("should throw an error if ID is not a number", () => {
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );
      expect(() => {
        new Employee(
          "Fred",
          "12",
          "fred@gmail.com",
          "Employee"
        ).validateEmployee();
      }).toThrow(err);
    });
    //exception test
    test("should throw an error if ID is less than 0", () => {
      const err = new Error(
        "Expected parameter 'ID' to be a non-negative number"
      );
      expect(() => {
        new Employee(
          "Fred",
          -12,
          "fred@gmail.com",
          "Employee"
        ).validateEmployee();
      }).toThrow(err);
    });
    //exception test
    test("should throw an error if email is not a string", () => {
      const err = new Error(
        "Expected parameter 'email' to be a non-empty string"
      );
      expect(() => {
        new Employee("Fred", 12, 14, "Employee").validateEmployee();
      }).toThrow(err);
    });
  });
  //positive test
  test("should return 'name' property with a string", () => {
    // Act
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
    // Assert
    expect(employee.getName()).toEqual("Fred");
  });
  //positive test
  test("should return 'ID' property with a number value", () => {
    // Act
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
    // Assert
    expect(employee.getID()).toEqual(12);
  });
  //positive test
  test("should return 'email' property with a string value", () => {
    // Act
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");
    // Assert
    expect(employee.getEmail()).toEqual("fred@gmail.com");
  });
  test("should return 'title' property with 'Employee'", () => {
    // Act
    const employee = new Employee("Fred", 12, "fred@gmail.com", "Employee");

    expect(employee.getTitle()).toEqual("Employee");
  });
});
