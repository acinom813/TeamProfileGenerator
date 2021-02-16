const Employee = require("../lib/Employee");


test ("should instantiate Employee instance", () => {
    const e = new Employee ();
    expect(typeof (e)).toBe("object");
});

test ("should set name via constructor arguments", () => {
    const name = Annie;
    const e = new Employee (name);
    expect(e.name).toBe(name);
});

test ("should set id with constructor param", () => {
    const testValue = 100;
    const e = new Employee ("Foo", testValue);
    expect(e.id).toBe(testValue);
});
