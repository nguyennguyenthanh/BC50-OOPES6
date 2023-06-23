import Person from "../person/person.js";
export default class Customer extends Person {
    constructor(_name, _address, _id, _email, _tenCongTy, _triHoaDon, _danhGia) {
        super(_name, _address, _id, _email)
        this.tenCongTy = _tenCongTy;
        this.triHoaDon = _triHoaDon;
        this.danhGia = _danhGia;
    }
}