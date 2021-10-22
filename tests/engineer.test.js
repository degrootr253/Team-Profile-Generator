const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    describe('getGithub', () => {
        it('should return the name as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com', 'test123');

            const gitHub = 'test123';

            const result = new Engineer().getEmail(employee);

            expect(result.toEqual(gitHub));
        }
    });

    describe('getRole', () => {
        it('should get the Engineer as the role'), () => {
            const role = 'Engineer'

            const result = new Engineer().getRole(role)

            expect(result.toEqual(role));
        }
    });

});