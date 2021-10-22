const Employee = require('../lib/Employee');

describe('Employee class', () => {
    describe('getName', () => {
        it('should return the name as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com');
            const name = 'Ryan';

            const result = new Employee().getName(employee);

            expect(result.toEqual(name));
        }
    });

    describe('getId', () => {
        it('should return the ID as a int'), () => {
            const employee = ('Ryan', 100, 'test@test.com');

            const id = 100;

            const result = new Employee().getId(employee);

            expect(result.toEqual(id));
        }
    });

    describe('getEmail', () => {
        it('should return the email as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com');
            const email = 'test@test.com';

            const result = new Employee().getEmail(employee);

            expect(result.toEqual(email));
        }
    });

    describe('getRole', () => {
        it('should get the Employee as the role'), () => {
            const role = 'Employee'

            const result = new Employee().getRole(role)

            expect(result.toEqual(role));
        }
    });

});