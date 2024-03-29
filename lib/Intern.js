// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this._school = school;
    this._role = "Intern";
  }

  getSchool() {
    return this._school;
  }

  getRole() {
    return this._role;
  }
}

module.exports = Intern;
