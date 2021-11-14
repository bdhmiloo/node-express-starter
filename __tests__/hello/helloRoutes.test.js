const request = require('supertest');
const server = require('../../server');
const config = require('../../config/config');

describe('Hello Endpoints', () => {

    describe('GET / ', () => {

        it('should 200 and return a message', async () => {
            // given
            const expectedResult = 'Hello World';

            // when
            const response = await request(server).get(config.API_PREFIX + '/').send();

            // then
            expect(response.status).toBe(200);
            expect(response.body.message).toBe(expectedResult);
        });

    });

});
