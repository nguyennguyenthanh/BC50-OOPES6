import Person from "../person/person.js";
export default class Student extends Person {
    constructor(_hoTen, _diaChi, _ma, _email, _toan, _ly, _hoa) {
        super(_hoTen, _diaChi, _ma, _email)
        this.toan = _toan;
        this.ly = _ly;
        this.hoa = _hoa;
        this.diemtb = 0;        
    }
    diemTrungBinh(){
        this.diemtb = (this.toan + this.ly + this.hoa) / 3;
    }
    renderTag() {
        const content = `
        
        `
    }

}