var app = require('../src/app')
var request = require('supertest')

test('get method test', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err)
      expect(res.body.name).toEqual('john doe')
      done()
    })
})
