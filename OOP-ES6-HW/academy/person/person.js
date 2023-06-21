export default class Person {
    constructor(_hoTen, _diaChi, _ma, _email) {
        this.hoTen = _hoTen;
        this.diaChi = _diaChi;
        this.ma = _ma;
        this.email = _email;
        this.arr =[];
    }
    addList(user){
        this.arr.push(user);
    }
}