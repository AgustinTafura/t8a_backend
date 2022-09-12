const chai = require('chai');
const chaiHttp = require('chai-http');
const fs = require('fs');
const app = require('../app');

chai.should();
chai.use(chaiHttp);


/**
 * Test Api  - Events endpoint
 */

describe('Test Events API - Endpoints', () => {
        it('GET All Events', (done) => {
        chai.request(app)
            .get(`/events`)
            .end((err, response) => {
                response.should.have.status(200);
                response.should.be.a('object');
                response.body[0].should.have.property('name')
                response.body[0].should.have.property('startDate')
                response.body[0].should.have.property('attendees')
                response.body[0].should.have.property('duration')
                response.body[0].should.have.property('active')
                response.body[0].should.have.property('_id')

                done();
            });
        });

        it('GETById Event', (done) => {
            chai.request(app)
                .get(`/events/631ce2476b715286d3660fae`)
                .end((err, response) => {
                    response.should.have.status(200);
                    response.should.be.a('object');
                    response.body.should.have.property('name')
                    response.body.should.have.property('startDate')
                    response.body.should.have.property('attendees')
                    response.body.should.have.property('duration')
                    response.body.should.have.property('active')
                    response.body.should.have.property('_id')
    
                    done();
                });
            });

        it('Error Route - (route not exist)', (done) => {
            chai.request(app)
                .get(`/routenotexist`)
                .end((err, response) => {
                    response.should.have.status(404);
                    response.body.message.should.include("Not Found")
                    done();
                });
        });

        const badEvent = {
            startDate: "December 16, 2022 17:00:00",
            attendees: [],
            duration: "2 hs"
        }

        it('Error Creating Event - (without `name` param)', (done) => {
            chai.request(app)
                .post(`/events`)
                .send(badEvent)
                .end((err, response) => {
                    response.should.have.status(500);
                    response.should.be.a('object');
                    response.body.should.contain.keys(["message", "name"]);
                    response.body.message.should.include("`name` is required.")
                    response.body.name.should.include("ValidationError")
                    done();
                });
        });
})
