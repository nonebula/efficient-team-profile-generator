// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this._officeNumber = officeNumber;
    this._role = "Manager";
  }

  getOfficeNumber() {
    return this._officeNumber;
  }

  getRole() {
    return this._role;
  }
}

module.exports = Manager;
