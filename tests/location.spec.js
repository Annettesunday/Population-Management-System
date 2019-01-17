const Requests = require("supertest");
const expect = require("chai").expect;



const app = require("../app");

const api = new Requests(app);
const  locationDetails = require("./mocks");




describe("Test location functionality", () => {
  it("should create a location with the right details", done => {
    api
      .post("/location")
      .send(locationDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(201);
        expect(JSON.parse(res.text).message).to.be.equal(
          "Location created successfully"
        );
        done();
      });
  });
});
