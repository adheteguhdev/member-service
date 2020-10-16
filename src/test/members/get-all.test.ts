import mocha from "mocha";
import addContext from "mochawesome/addContext";
import chai from "chai";
import chaiHttp from "chai-http";
import "chai/register-should";
import createApp from "../../app";
import { closeDatabase } from '../../utils/db-connection'
const assert = chai.assert;
import { membersData } from "../data/member";
import Member from "../../models/member";

chai.use(chaiHttp);

let app;
const organizationName = 'xendit';

describe('Get all members', () => {
  before(async () => {
    app = await createApp();
    await Member.deleteMany({});
    await Member.insertMany(membersData);
  });

  // after(async () => {
  //   await Member.deleteMany({});
  //   await closeDatabase();
  // });

  it('Should get all members', function (done) {
    chai
      .request(app)
      .get(`/orgs/${organizationName}/members`)
      .end((err, res) => {
        if (err) return done(err);
        addContext(this, { title: 'Response Body', value: res.body });
        res.should.have.status(200);
        res.body.should.have.an('array');
        assert.isNotEmpty(res.body);
        done();
      });
  });

  it('Should return 404 when resource not found', function (done) {
    chai
      .request(app)
      .get(`/orgs/${organizationName}/`)
      .end((err, res) => {
        if (err) return done(err);
        addContext(this, { title: 'Response Body', value: res.body });
        res.should.have.status(404);
        res.body.should.have.an('object');
        assert.equal(res.body.message, 'Resource Not Found');
        assert.isNotEmpty(res.body);
        done();
      });
  });
});
