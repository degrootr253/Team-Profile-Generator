const Intern = require('../lib/Intern');

describe('Intern class', () => {
    describe('getSchool', () => {
        it('should return the school as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com', 'school');

            const school = 'school';

            const result = new Intern().getSchool(employee);

            expect(result.toEqual(school));
        }
    });

    describe('getRole', () => {
        it('should get the Intern as the role'), () => {
            const role = 'Intern'

            const result = new Intern().getRole(role)

            expect(result.toEqual(role));
        }
    });

});