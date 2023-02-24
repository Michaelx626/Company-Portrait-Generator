const Engineer = require("../lib/Engineer");
const engineer = new Engineer("Bib", 123, "Bob@yahoo.com", "Github.com/Bob");

describe("Engineer", () => {
  describe("Name", () => {
    it("the name should be a string", () => {
      const nameTest = engineer.getName();

      expect(typeof nameTest).toEqual("string");
    });
  });

  describe("Id", () => {
    it("the id should be a number", () => {
      const numberTest = engineer.getId();

      expect(typeof numberTest).toEqual("number");
    });
  });

  describe("Email", () => {
    it("the email address should contain @", () => {
      const emailTest = engineer.getEmail();

      expect(emailTest).toContain("@");
    });

    it("the email address should contain .com", () => {
      const dotCom = engineer.getEmail();

      expect(dotCom).toContain(".com");
    });
  });

  describe("Github", () => {
    it("the Github url should contain Github.com/", () => {
      const gitHub = engineer.getGitHub();

      expect(gitHub).toContain("Github.com/");
    });
  });

  describe("Role", () => {
    it("the Engineer role should return Engineer", () => {
      const role = engineer.getRole();

      expect(role).toEqual("Engineer");
    });
  });
});
