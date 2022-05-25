
/**
 * Clase para crear programador 
 * @example
 * const newProgrammer = new programmer({id:10, name:"Ale", age:5, isActive:true},"Js");
console.log(newProgrammer);
newProgrammer.getInfo();
 */
class programmer {

    /**
     *
     * @param {User} user Información de Usuario 
     * @param {string} lenguaje Lenguaje de programación
     */
    constructor(user, lenguaje) {
        this.fullname = user.name
        this.age = user.age
        this.id = user.id
        this.isActive = user.isActive
        this.lenguaje = lenguaje
    }

    getInfo() {
        console.log(`I'm ${this.fullname} and my favorite programming language is ${this.lenguaje}`)
    }
}

/**
 * Ve más en {@link programmer}
 */
const newProgrammer = new programmer({id:10, name:"Ale", age:5, isActive:true},"Js");

console.log(newProgrammer);
newProgrammer.getInfo();

