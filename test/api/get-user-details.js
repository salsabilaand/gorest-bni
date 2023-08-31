const request = require('supertest')
const server = require('../../env')
const chai = require('chai');
const expect = chai.expect;

const baseUrl = server().baseUrl
const authToken = server().authToken

describe('User Detail', () => {
    it('Get User Details by Status', async () => {
        const response = request (baseUrl)
        .get(`/user?token=${authToken}`)
        console.log((await response).status)
        console.log((await response).body)
    }),
    it('Get User Details by Status, ID', async () => {
        const response = request (baseUrl)
        .get(`/user?token=${authToken}/4890349`)
        console.log((await response).status)
        console.log((await response).body)
    })
})