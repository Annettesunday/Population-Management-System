process.env.NODE_ENV = "test";
const Requests = require("supertest");
const expect = require("chai").expect;

const app = require("../app");

const api = new Requests(app);
const {
  validLocationDetails,
  invalidFemaleDetails,
  invalidMaleDetails,
  invalidNameDetails,
  locationTest
} = require("./mocks");

describe("Test location functionality", () => {
  it("should create a location with the right details", done => {
    api
      .post("/location")
      .send(validLocationDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(201);
        expect(JSON.parse(res.text).message).to.equal(
          "Location created successfully"
        );
        done();
      });
  });
  it("should not create same location twice", done => {
    api
      .post("/location")
      .send(validLocationDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(409);
        expect(JSON.parse(res.text).data.message).to.equal(
          "Location already exists"
        );
        done();
      });
  });
  it("should not create location with the wrong location details", done => {
    api
      .post("/location")
      .send(invalidFemaleDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text).data.message).to.equal(
          "Invalid female count. Female count must be greater or equal to zero and must be an integer"
        );
        if (error) return expect(error.message);
        done();
      });
  });
  it("should not create location with wrong location details", done => {
    api
      .post("/location")
      .send(invalidNameDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text).data.message).to.equal(
          "Location name must have more than one character"
        );
        if (error) return expect(error.message);
        done();
      });
  });
  it("should not create location with the wrong location details", done => {
    api
      .post("/location")
      .send(invalidMaleDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(400);
        expect(JSON.parse(res.text).data.message).to.equal(
          "Invalid male count. Male count must be greater or equal to zero and must be an integer"
        );
        if (error) return expect(error.message);
        done();
      });
  });
  it("should get all the locations", done => {
    api
      .get("/locations")
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text));
        if (error) return expect(error.message);
        done();
      });
  });
  it("should get a single location", done => {
    api.post(validLocationDetails);
    api
      .get("/location/dummy")
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text));
        if (error) return expect(error.message);
        done();
      });
  });
  it("should not update location with invalid name", done => {
    api
      .put("/location/dummy2")
      .send(validLocationDetails)
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(404);
        expect(JSON.parse(res.text).message).to.equal(
          "Location cannot be found"
        );
        if (error) return expect(error.message);
        done();
      });
  });
  it("should update a specified location successfully", done => {
    api
      .put("/location/dummy")
      .send(locationTest)
      .set("Content-Type", "application/json")

      .end((error, res) => {
        console.log(res.body);
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text));
        if (error) return expect(error.message);
        done();
      });
  });
  it("should delete a location successfully", done => {
    api
      .delete("/location/Naks")
      .set("Content-Type", "application/json")
      .end((error, res) => {
        expect(res.status).to.equal(200);
        expect(JSON.parse(res.text).message).to.equal(
          "Location deleted successfully"
        );
        if (error) return expect(error.message);
        done();
      });
  });
});
