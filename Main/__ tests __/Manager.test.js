const Manager = require("../lib/Manager");

it ("should instantiate Employee instance", () => {
    const e = new Manager ();
    expect(typeof (e)).toBe("object");
});

it ("should set name via constructor arguments", () => {
    const name = Luis;
    const e = new Manager (name);
    expect(e.name).toBe(name);
});

it ("should set id with constructor param", () => {
    const testValue = 100;
    const e = new Manager ("Foo", testValue);
    expect(e.id).toBe(testValue);
});
