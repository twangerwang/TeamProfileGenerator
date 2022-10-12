const Intern = require('../lib/Intern')

describe('intern', () =>{
    it('should create an object with a name, id, email, and school', ()=>{
        const intern = new Intern("Teddy", 1, "test@test.com", "University of Texas");

        expect(intern.getName()).toEqual("Teddy");
        expect(intern.getId()).toEqual(1);
        expect(intern.getEmail()).toEqual("test@test.com");
        expect(intern.getSchool()).toEqual("University of Texas");
        expect(intern.getRole()).toEqual("Intern");
    })
})