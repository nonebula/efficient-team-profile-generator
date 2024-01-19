// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
import { Employee } from "./Employee.js";
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this._school = school;
    this._role = "Intern";
  }

  get school() {
    return this._school;
  }
}

export { Intern };
