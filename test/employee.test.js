const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Can set firstname via constructor arguments", () => {
  const firstname = "Alice";
  const e = new Employee(firstname);
  expect(e.firstname).toBe(firstname);
});

test("Can set lastname via constructor arguments", () => {
  const lastname = "Smith";
  const e = new Employee("Foo", lastname);
  expect(e.lastname).toBe(lastname);
});

test("Can set id via constructor argument", () => {
  const testValue = 100;
  const e = new Employee("Foo", "Jones", testValue);
  expect(e.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", "Jones", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Can get firstname via getFirstName()", () => {
  const testValue = "Alice";
  const e = new Employee(testValue);
  expect(e.getFirstName()).toBe(testValue);
});

test("Can get lastname via getLastName()", () => {
  const testValue = "Smith";
  const e = new Employee("Foo", testValue);
  expect(e.getLastName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Foo", "Jones", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Foo", "Jones", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("Alice","Smith", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
