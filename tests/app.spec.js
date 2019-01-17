const Requests = require("supertest");
const expect = require("chai").expect;

const app = require("../app");

const api = new Requests(app);

describe("Welcome route", () => {
  it("should correctly load the welcome route", done => {
    api.get("/").end((error, res) => {
      expect(res.status).to.equal(200);
      expect(JSON.parse(res.text).message).to.be.equal(
        "Welcome to Population Management System"
      );
      done();
    });
  });
});

describe("Undefined routes", () => {
  it("should return error for undefined routes", done => {
    api.get("/undefinedRoute").end((error, res) => {
      expect(res.status).to.equal(400);
      expect(JSON.parse(res.text).message).to.be.equal(
        "This action cannot be executed. Got to /api to see all available routes"
      );
      done();
    });
  });
});
