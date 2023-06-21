import Person from "../person/person.js";
export default class listPerson extends Person {
    constructor(_obStudent, _obEmployee, _obCustomer) {
        this.obStudent = _obStudent;
        this.obEmployee = _obEmployee;
        this.obCustomer = _obCustomer;
    }
}