const Manager = require('../lib/Manager');

describe('Manager class', () => {
    describe('getOffice', () => {
        it('should return the name as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com', 1234);

            const office = 1234;

            const result = new Manager().getOffice(employee);

            expect(result.toEqual(office));
        }
    });


    describe('getRole', () => {
        it('should get the Manager as the role'), () => {
            const role = 'Manager'

            const result = new Manager().getRole(role)

            expect(result.toEqual(role));
        }
    });

});