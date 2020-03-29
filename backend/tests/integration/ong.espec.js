const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    });
rollback(async ()=>{
        await connection.destroy();
    });

    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD",
                email: "abc@gmailcom",
                whatsapp: "12345",
                city: "caxias do sul",
                uf: "RS"
            });

        console.log('response: ',response.body);
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);

    });
});