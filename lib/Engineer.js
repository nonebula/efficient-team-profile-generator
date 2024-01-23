// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
import { Employee } from "./Employee.js";
class Engineer extends Employee {
  constructor(name, id, email, github) {
    this._github = github;
    this._role = "Engineer";
  }

  getGithub() {
    return _github;
  }
}

export default Engineer;
