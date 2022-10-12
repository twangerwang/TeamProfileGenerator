const Engineer = require('../lib/Engineer')

describe('engineer', () =>{
    it('should create an object with a name, id, email, and GitHub', ()=>{
        const engineer = new Engineer("Teddy", 1, "test@test.com", "twangerwang");

        expect(engineer.getName()).toEqual("Teddy");
        expect(engineer.getId()).toEqual(1);
        expect(engineer.getEmail()).toEqual("test@test.com");
        expect(engineer.getGithub()).toEqual("twangerwang");
        expect(engineer.getRole()).toEqual("Engineer");
    })
})