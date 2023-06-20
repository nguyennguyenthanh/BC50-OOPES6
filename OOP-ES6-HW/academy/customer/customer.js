import Person from "../person/person.js";
export default class Customer extends Person {
    constructor(_hoTen, _diaChi, _ma, _email, _tenCongTy, _triHoaDon, _danhGia) {
        super(_hoTen, _diaChi, _ma, _email)
        this.tenCongTy = _tenCongTy;
        this.triHoaDon = _triHoaDon;
        this.danhGia = _danhGia;
    }
}