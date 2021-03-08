const Employee = require("../lib/Employee");


describe("Employee", () => {
    const e = new Employee ();
    expect(typeof(e)).toBe("object");
});

it ("should instantiate Employee instance", () => {
    const e = new Employee ();
    expect(typeof (e)).toBe("object");
});

it ("should set name via constructor argument", () => {
    const name = Annie;
    const e = new Employee (name);
    expect(e.name).toBe(name);
});

it ("should set id with constructor param", () => {
    const testValue = 100;
    const e = new Employee ("Foo", testValue);
    expect(e.id).toBe(testValue);
});
it ("Should set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
});
describe("getName", () => {
    it ("Can get name via getName()", () => {
        const testValue = Annie;
        const e = new Employee("Foo", 1, testValue);
        expect(e.getName()).toBe(testValue);
    });
});
describe("getId", () => {
    it ("Can get id via getId()", () => {
        const testValue = 100;
        const e = new Employee("Foo", testValue);
        expect(e.getId()).toBe(testValue);
    });
});
describe("getEmail", () => {
    it ("Can get email via getEmail()", () => {
        const testValue = "test@test.com";
        const e = new Employee("Foo", 1, testValue);
        expect(e.getEmail()).toBe(testValue);
    });
});
describe("getRole", () => {
    it ("getRole() should return \"employee\"", () => {
        const testValue = "Employee";
        const e = new Employee("Annie", 1, "test@test.com");
        expect(e.getRole()).toBe(testValue);
    });
});

