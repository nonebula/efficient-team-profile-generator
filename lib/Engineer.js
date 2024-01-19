// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor() {
      this._github = github;
      this._role = 'Engineer';
    }
  
    get github() {
      return _github;
    }
  
  }
  
  export { Engineer };
  