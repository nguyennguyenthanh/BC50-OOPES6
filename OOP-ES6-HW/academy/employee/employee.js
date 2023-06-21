import Person from "../person/person.js";
export default class Employee extends Person {
    constructor(_hoTen, _diaChi, _ma, _email, _soNgayLamViec, _luongTheoNgay) {
        super(_hoTen, _diaChi, _ma, _email)
        this.luongTheoNgay = _luongTheoNgay;
        this.soNgayLamViec = _soNgayLamViec;
        this.tongLuong = 0;
    }
    tinhLuongGV = () => {
        this.tongLuong = Number(this.luongTheoNgay) * Number(this.soNgayLamViec);
    }
}