const Employee = require("../lib/Employee");
const employee = new Employee("John", 1, "John@gmail.com");

describe("Employee", () => {
  describe("Name", () => {
    it("the name should only be a string", () => {
      const nameTest = employee.getName();

      expect(typeof nameTest).toEqual("string");
    });
  });

  describe("Id", () => {
    it("the Id should only be a number", () => {
      const numberTest = employee.getId();

      expect(typeof numberTest).toEqual("number");
    });
  });

  describe("Email", () => {
    it("the email address should contain @", () => {
      const emailTest = employee.getEmail();
      
      expect(emailTest).toContain('@');
    });

    it('the email address should contain .com', () => {
      const dotCom = employee.getEmail();

      expect(dotCom).toContain('.com');
    });
  });

  describe("Role", () => {
    it("the Employee role should return the string Employee", () => {
      const role = employee.getRole();

      expect(role).toEqual("Employee");
    });
  });
});
