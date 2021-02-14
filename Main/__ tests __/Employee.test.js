const Employee = require("../lib/Employee");

test ("can instantiate Employee instance", () => {
    const e = new Employee ();
    expect(typeof (e)).toBe("object");
});

test ("can set name via constructor arguments", () => {
    const name = Annie;
    const e = new Employee (name);
    expect(e.name).toBe(name);
});