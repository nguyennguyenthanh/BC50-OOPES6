import Person from "../person/person.js";
export default class Employee extends Person {
    constructor(_name, _address, _id, _email, _soNgayLamViec, _luongTheoNgay) {
        super(_name, _address, _id, _email)
        this.luongTheoNgay = _luongTheoNgay;
        this.soNgayLamViec = _soNgayLamViec;
        this.tongLuong = 0;
    }
    tinhLuongGV = () => {
        this.tongLuong = Number(this.luongTheoNgay) * Number(this.soNgayLamViec);
        return this.tongLuong
    }
}