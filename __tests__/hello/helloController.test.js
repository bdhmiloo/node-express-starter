const {mockRequest, mockResponse} = require('../_util/interceptor');
const controller = require('../../app/hello/helloController');

describe('HelloController', () => {

    it('should sayHello and return 200', async () => {
        // given
        const req = mockRequest();
        const res = mockResponse();

        const expectedResult = {message: 'Hello World'};

        // when
        await controller.sayHello(req, res);

        // then
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expectedResult);
    });

});
