import Person from "../person/person.js";
export default class Student extends Person {
    constructor(_name, _address, _id, _email, _toan, _ly, _hoa) {
        super(_name, _address, _id, _email)
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
        this.diemtb = 0; 
    }
    diemTrungBinh(){
        this.diemtb = (Number(this.toan) + Number(this.ly) + Number(this.hoa)) / 3;
    }
}