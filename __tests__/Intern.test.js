const Intern = require("../lib/Intern");
const intern = new Intern("Kevin", 626, "Kevin@aol.com", "UCLA");

describe("Intern", () => {
  describe("Name", () => {
    it("the name should be a string", () => {
      const nameTest = intern.getName();

      expect(typeof nameTest).toEqual("string");
    });
  });

  describe("Id", () => {
    it("the Id should be a number", () => {
      const numberTest = intern.getId();

      expect(typeof numberTest).toEqual("number");
    });
  });

  describe("Email", () => {
    it("the email address should contain @", () => {
      const emailTest = intern.getEmail();

      expect(emailTest).toContain("@");
    });

    it("the email address should contain .com", () => {
      const dotCom = intern.getEmail();

      expect(dotCom).toContain(".com");
    });
  });

  describe("School", () => {
    it("the school should be a string", () => {
      const school = intern.getSchool();

      expect(typeof school).toEqual("string");
    });
  });

  describe("Role", () => {
    it("the Intern role should return Intern", () => {
      const role = intern.getRole();

      expect(role).toEqual("Intern");
    });
  });
});
