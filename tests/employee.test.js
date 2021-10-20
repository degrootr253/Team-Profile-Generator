const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('getName', () => {
        it('should return the name as a string'), () => {
            const employee = ('Ryan', 100, 'test@test.com');

            expect(employee.getName().toEqual())
        }
    })
})