// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
import { Employee } from "./Employee.js";
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this._officeNumber = officeNumber;
    this._role = "Manager";
  }

  get officeNumber() {
    return this._officeNumber;
  }
}

export { Manager };
