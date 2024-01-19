// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee {
    constructor() {
      this._officeNumber = officeNumber;
      this._role = 'Manager';
    }
  
    get officeNumber() {
      return this._officeNumber;
    }
  
  }
  
  export { Manager };
  