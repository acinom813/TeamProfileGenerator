const Employee = require("../lib/Employee");

it ("should instantiate Employee instance", () => {
    const e = new Employee ();
    expect(typeof (e)).toBe("object");
});

it ("should set name via constructor arguments", () => {
    const name = Katy;
    const e = new Employee (name);
    expect(e.name).toBe(name);
});

it ("should set id with constructor param", () => {
    const testValue = 100;
    const e = new Employee ("Foo", testValue);
    expect(e.id).toBe(testValue);
});
