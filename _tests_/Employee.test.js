const Employee = require('../lib/Employee')

describe('employee', () =>{
    it('should create an object with a name, id, and email', ()=>{
        const employee = new Employee("Teddy", 1, "test@test.com");

        expect(employee.getName()).toEqual("Teddy");
        expect(employee.getId()).toEqual(1);
        expect(employee.getEmail()).toEqual("test@test.com");
        expect(employee.getRole()).toEqual("Employee");
    })
})

