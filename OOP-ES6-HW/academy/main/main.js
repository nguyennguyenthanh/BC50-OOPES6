import Person from "../person/person.js";
import Student from "../student/student.js";
import Employee from "../employee/employee.js";
import Customer from "../customer/customer.js";
import ListPerson from "../listperson/listperson.js";

const getEle = (id) => document.getElementById(id);
const listperson = new ListPerson();
const person = new Person();

/***RENDER POPUP */
const formStudent = [
    { id: 'id1', name: 'maSo', placeHolder: 'ID', spanTag: 'tbId', errorId: 'errorMaSo' },
    { id: 'name1', name: 'ten', placeHolder: 'FullName', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email1', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address1', name: 'diaChi', placeHolder: 'Address', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'diemToan', name: 'mathScore', placeHolder: 'Điểm Toán', spanTag: 'tbDiemToan', errorId: 'errorDiemToan' },
    { id: 'diemLy', name: 'phisicScore', placeHolder: 'Điểm Lý', spanTag: 'tbDiemLy', errorId: 'errorDiemLy' },
    { id: 'diemHoa', name: 'chemisScore', placeHolder: 'Điểm Hóa', spanTag: 'tbDiemHoa', errorId: 'errorDiemHoa' },
];
const formEmployee = [
    { id: 'id2', name: 'maSo', placeHolder: 'ID', spanTag: 'tbId', errorId: 'errorMaSo' },
    { id: 'name2', name: 'ten', placeHolder: 'FullName', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email2', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address2', name: 'diaChi', placeHolder: 'Address', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'soNgayLamViec', name: 'ngayLam', placeHolder: 'Số Ngày Làm', spanTag: 'tbSoNgayLam', errorId: 'errorSoNgayLam' },
    { id: 'luongTheoNgay', name: 'luongNgay', placeHolder: 'Lương Theo Ngày', spanTag: 'tbluongTheoNgay', errorId: 'errorluongTheoNgay' },
];
const formCustomer = [
    { id: 'id3', name: 'maSo', placeHolder: 'ID', spanTag: 'tbId', errorId: 'errorMaSo' },
    { id: 'name3', name: 'ten', placeHolder: 'FullName', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email3', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address3', name: 'diaChi', placeHolder: 'Address', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'tenCongTy', name: 'nameCom', placeHolder: 'Tên Công Ty', spanTag: 'tbtenCongTy', errorId: 'errortenCongTy' },
    { id: 'triHoaDon', name: 'bill', placeHolder: 'Trị Hóa Đơn', spanTag: 'tbtriHoaDon', errorId: 'errortriHoaDon' },
    { id: 'danhGia', name: 'assess', placeHolder: 'Đánh Giá', spanTag: 'tbdanhGia', errorId: 'errordanhGia' },
];

getEle("btnThem1").addEventListener("click", () => {
    listperson.renderForm(formStudent);
});
getEle("btnThem2").addEventListener("click", () => {
    listperson.renderForm(formEmployee);
});
getEle("btnThem3").addEventListener("click", () => {
    listperson.renderForm(formCustomer);
});

/******* GET INFO *******/
//Get info student
const getInfoStudent = () => {
    const id = getEle("id1").value;
    const name = getEle("name1").value;
    const email = getEle("email1").value;
    const address = getEle("address1").value;
    const diemToan = getEle("diemToan").value;
    const diemLy = getEle("diemLy").value;
    const diemHoa = getEle("diemHoa").value;

    var student = new Student(name, address, id, email, diemToan, diemLy, diemHoa);
    student.diemTrungBinh();
    return student;
}
//Get info employee
const getInfoEmployee = () => {
    const id = getEle("id2").value;
    const name = getEle("name2").value;
    const email = getEle("email2").value;
    const address = getEle("address2").value;
    const soNgayLam = getEle("soNgayLamViec").value;
    const luongNgay = getEle("luongTheoNgay").value;

    const employee = new Employee(name, address, id, email, soNgayLam, luongNgay);
    employee.tinhLuongGV();
    return employee;
}
//Get info Customer
const getInfoCustomer = () => {
    const id = getEle("id3").value;
    const name = getEle("name3").value;
    const email = getEle("email3").value;
    const address = getEle("address3").value;
    const tenCongTy = getEle("tenCongTy").value;
    const triHoaDon = getEle("triHoaDon").value;
    const danhGia = getEle("danhGia").value;

    const customer = new Customer(name, address, id, email, tenCongTy, triHoaDon, danhGia);
    return customer;
}

/***** ADD LIST SCHOOL *****/
//Add Student
getEle("btnThem1").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Student";
    getEle("btnAddStudent").style.display = "block";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "none";
    getEle("btnUpdate").style.display = "none";
});
getEle("btnAddStudent").addEventListener("click", () => {
    const user = getInfoStudent();
    person.addList(user);
    listperson.renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});
//Add Employee
getEle("btnThem2").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Employee";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "block";
    getEle("btnAddCustomer").style.display = "none";
    getEle("btnUpdate").style.display = "none";
});
getEle("btnAddEmployee").addEventListener("click", () => {
    const user = getInfoEmployee();
    person.addList(user);
    listperson.renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});
//Add Customer
getEle("btnThem3").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Customer";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "block";
    getEle("btnUpdate").style.display = "none";
});
getEle("btnAddCustomer").addEventListener("click", () => {
    const user = getInfoCustomer();
    person.addList(user);
    listperson.renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});

/******* DELETE USER ******/
const deleteUser = (id) => {
    const index = person.arr.findIndex(user => user.arr.id === id);
    person.arr.splice(index, 1);
    listperson.renderUI(person.arr);
    setLocalStorage();
}
window.deleteUser = deleteUser;
/**** EDIT PERSON ****/
//UI update info popup
const editUser = (id) => {
    const user = listperson.editInfoPerson(id);
    //Edit UI
    getEle("header-title").innerHTML = "Edit Info";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "none";
    getEle("btnUpdate").style.display = "block";    
    if (user) {
        //Student
        getEle("id1").value = user.id;
        getEle("id1").disabled = true;
        getEle("name1").value = user.name;
        getEle("email1").value = user.email;
        getEle("address1").value = user.address;
        getEle("diemToan").value = user.diemToan;
        getEle("diemLy").value = user.diemLy;
        getEle("diemHoa").value = user.diemHoa;
        // //Employee
        // getEle("id2").value = person.id;
        // getEle("id2").disabled = true;
        // getEle("name2").value = person.name;
        // getEle("email2").value = person.email;
        // getEle("address2").value = person.address;
        // getEle("soNgayLam").value = person.soNgayLamViec;
        // getEle("luongNgay").value = person.luongTheoNgay;
        // //Customer
        // getEle("id3").value = person.id;
        // getEle("id3").disabled = true;
        // getEle("name3").value = person.name;
        // getEle("email3").value = person.email;
        // getEle("address3").value = person.address;
        // getEle("tenCongTy").value = person.tenCongTy;
        // getEle("triHoaDon").value = person.triHoaDon;
        // getEle("danhGia").value = person.danhGia;  
    }
    setLocalStorage();
}
window.editUser = editUser;

// /**** UPDATE INFO *****/
// //Button Update
// const updatePerson = (typePerson) => {
//     const index = person.arr.find(user => user.id === id);
//     if (index > 0) {
//         person.arr[index] = typePerson;
//     }
// }
// getEle("btnUpdate").addEventListener("click", () => {
//     const student = getInfoStudent();
//     // const employee = getInfoEmployee();
//     // const customer = getInfoCustomer();
//     updatePerson(student);
//     listperson.renderUI(person.arr);
//     setLocalStorage();
//     getEle("btnDong").click();
//     // // updatePerson(employee);
//     // // updatePerson(customer);
// });

/****SAVE IN LOCALSTORAGE */
const setLocalStorage = () => {
    const dataString = JSON.stringify(person.arr);
    localStorage.setItem("LIST", dataString);
}
const getLocalStorage = () => {
    if (localStorage.getItem("LIST")) {
        const dataString = localStorage.getItem("LIST");
        person.arr = JSON.parse(dataString);
        listperson.renderUI(person.arr);
    }
}
getLocalStorage();
