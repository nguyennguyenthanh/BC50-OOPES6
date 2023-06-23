export default class Person {
    constructor(_name, _address, _id, _email) {
        this.name = _name;
        this.address = _address;
        this.id = _id;
        this.email = _email;
        this.arr =[];
    }
    addList(user){
        this.arr.push(user);
    }
}