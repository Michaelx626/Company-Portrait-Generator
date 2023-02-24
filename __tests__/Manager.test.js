const Manager = require("../lib/Manager");
const manager = new Manager("David", 123456, "David@gmail.com", 123213213);

describe("Manager", () => {
  describe("Name", () => {
    it("the name should be a string", () => {
      const nameTest = manager.getName();

      expect(typeof nameTest).toEqual("string");
    });
  });

  describe("Id", () => {
    it("the Id should only be a number", () => {
      const numberTest = manager.getId();

      expect(typeof numberTest).toEqual("number");
    });
  });

  describe("Email", () => {
    it("the email address should contain @", () => {
      const emailTest = manager.getEmail();

      expect(emailTest).toContain("@");
    });

    it("the email address should contain .com", () => {
      const dotCom = manager.getEmail();

      expect(dotCom).toContain(".com");
    });
  });

  describe("Office Number", () => {
    it("the office number should be a number", () => {
      const officeNumTest = manager.getOfficeNumber();

      expect(typeof officeNumTest).toEqual("number");
    });
  });

  describe("Role", () => {
    it("the Manager role should return the string Manager", () => {
      const role = manager.getRole();

      expect(role).toEqual("Manager");
    });
  });
});
