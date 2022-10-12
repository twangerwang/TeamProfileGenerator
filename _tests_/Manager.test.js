const Manager = require('../lib/Manager')

describe('manager', () =>{
    it('should create an object with a name, id, email, and office number', ()=>{
        const manager = new Manager("Teddy", 1, "test@test.com", "1234");

        expect(manager.getName()).toEqual("Teddy");
        expect(manager.getId()).toEqual(1);
        expect(manager.getEmail()).toEqual("test@test.com");
        expect(manager.getOfficeNumber()).toEqual("1234");
        expect(manager.getRole()).toEqual("Manager");
    })
})