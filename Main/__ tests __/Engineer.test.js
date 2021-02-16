const Engineer = require("../lib/Engineer");

it ("should instantiate Employee instance", () => {
    const e = new Engineer ();
    expect(typeof (e)).toBe("object");
});

it ("should set name via constructor arguments", () => {
    const name = Joshua;
    const e = new Engineer (name);
    expect(e.name).toBe(name);
});

it ("should set id with constructor param", () => {
    const testValue = 100;
    const e = new Engineer ("Foo", testValue);
    expect(e.id).toBe(testValue);
});
