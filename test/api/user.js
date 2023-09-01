const request = require('supertest');
const {expect} = require('chai');

const server = require('../../env');
const baseUrl = server().baseUrl;
const authToken = server().authToken;
let userId;

describe('Post New User', () => {
    it('Response Status Equal to 200', async () => {
        const newUser = {
            "name": "Salsabila",
            "email": "salsabila@jast-herman.example",
            "gender": "female",
            "status": "inactive"
        };
        try {
            const response = await request(baseUrl)
              .post(`/users?access-token=${authToken}`)
              .send(newUser);

            expect(response.status).to.equal(200);
          } catch (error) {
            console.error('Error:', error);
        }
    });
});

describe('Post Duplicate User', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "email": "salsabila@jast-herman.example",
        "gender": "female",
        "status": "inactive"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Email Invalid', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "email": "salsabila",
        "gender": "female",
        "status": "inactive"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Status Invalid', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "email": "salsabila@jast-herman.example",
        "gender": "female",
        "status": "ok"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Without Field Name', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "email": "salsabila.a@jast-herman.example",
        "gender": "female",
        "status": "inactive"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Without Field Email', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "gender": "female",
        "status": "inactive"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Without Field Gender', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "email": "salsabila.a@jast-herman.example",
        "status": "inactive"
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Post Without Field Status', () => { 
  it('Response Status Equal to 422', async () => {
    const newUser = {
        "name": "Salsabila",
        "email": "salsabila.a@jast-herman.example",
        "gender": "female",
    };
    try {
        const response = await request(baseUrl)
          .post(`/users?access-token=${authToken}`)
          .send(newUser);

        expect(response.status).to.equal(422);
      } catch (error) {
        console.error('Error:', error);
    }
  });
});

describe('Get All User', () => {
  it('Response Status Equal to 200', async () => {
    const response = await request(baseUrl)
      .get(`/users?access-token=${authToken}`)
      expect(response.status).to.equal(200);
    })
});

describe('Get Selected User Details', () =>{  
  it('Response Status Equal to 200', async () => {
    const response = await request(baseUrl)
      .get(`/users/${userId}?access-token=${authToken}`);
      expect(response.status).to.equal(200);
    });
});


describe('Put Selected User Details', () =>{
  it('Response Status Equal to 200', async () => {
    const response = await request(baseUrl)
      .put(`/users/${userId}?access-token=${authToken}`)
      .send({
        "name": "Salsabila",
        "email": "salsabila@jast-herman.example",
        "gender": "female",
        "status": "active"
    });
      expect(response.status).to.equal(200);
    });
});

describe('Delete Selected User', () =>{
  it('Response Status Equal to 200', async () => {
      const response = await request(baseUrl)
      .delete(`/users/${userId}?access-token=${authToken}`)
      expect(response.status).to.equal(200);
    });
});
