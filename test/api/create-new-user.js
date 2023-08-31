const request = require('supertest')
const server = require('../../env')
const chai = require('chai');
const expect = chai.expect;

const baseUrl = server().baseUrl
const authToken = server().authToken

describe('New User', () => {
    it('Create New User', async () => {
        const response = request (baseUrl)
        .post(`/user?token=${authToken}`)
        .send({
            "name": "Salsabila",
            "email": "salsabila@jast-herman.example",
            "gender": "female",
            "status": "inactive"
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})