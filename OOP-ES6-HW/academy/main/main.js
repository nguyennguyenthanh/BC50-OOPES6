import Person from "../person/person.js";
import Student from "../student/student.js";
import Employee from "../employee/employee.js";
import Customer from "../customer/customer.js";
import listPerson from "../listperson/listperson.js";

const getEle = (id) => document.getElementById(id);
const person = new Person();

/***RENDER POPUP */
const formStudent = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'diemToan', name: 'mathScore', placeHolder: 'Điểm Toán', spanTag: 'tbDiemToan', errorId: 'errorDiemToan' },
    { id: 'diemLy', name: 'phisicScore', placeHolder: 'Điểm Lý', spanTag: 'tbDiemLy', errorId: 'errorDiemLy' },
    { id: 'diemHoa', name: 'chemisScore', placeHolder: 'Điểm Hóa', spanTag: 'tbDiemHoa', errorId: 'errorDiemHoa' },
];
const formEmployee = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'soNgayLam', name: 'ngayLam', placeHolder: 'Số Ngày Làm', spanTag: 'tbSoNgayLam', errorId: 'errorSoNgayLam' },
    { id: 'luongNgay', name: 'luongNgay', placeHolder: 'Lương Theo Ngày', spanTag: 'tbluongTheoNgay', errorId: 'errorluongTheoNgay' },
];
const formCustomer = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'address', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'tenCongTy', name: 'nameCom', placeHolder: 'Tên Công Ty', spanTag: 'tbtenCongTy', errorId: 'errortenCongTy' },
    { id: 'triHoaDon', name: 'bill', placeHolder: 'Trị Hóa Đơn', spanTag: 'tbtriHoaDon', errorId: 'errortriHoaDon' },
    { id: 'danhGia', name: 'assess', placeHolder: 'Đánh Giá', spanTag: 'tbdanhGia', errorId: 'errordanhGia' },
];

const renderForm = (formType) => {
    return formType.map((inputItem) => {
        return `
        <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" name="${inputItem.name}" id="${inputItem.id}" class="form-control input-sm"
                  placeholder="${inputItem.placeHolder}">
          </div>
          <span class="sp-thongbao" id="${inputItem.spanTag}"></span>
          <div id="${inputItem.errorId}" style="display: none;" class="text-danger"></div>
        </div>
        `
    })
}
window.renderForm = renderForm;

getEle("btnThem1").addEventListener("click", () => {
    const content = renderForm(formStudent);
    getEle("formNV").innerHTML = content;
});
getEle("btnThem2").addEventListener("click", () => {
    const content = renderForm(formEmployee);
    getEle("formNV").innerHTML = content;
});
getEle("btnThem3").addEventListener("click", () => {
    const content = renderForm(formCustomer);
    getEle("formNV").innerHTML = content;
});


/******* GET INFO *******/
//Get info student
const getInfoStudent = () => {
    const ma = getEle("ma").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const address = getEle("address").value;
    const diemToan = getEle("diemToan").value;
    const diemLy = getEle("diemLy").value;
    const diemHoa = getEle("diemHoa").value;

    const student = new Student(name, address, ma, email, diemToan, diemLy, diemHoa);
    // const lisperson = new listPerson(student, employee, customer);
    student.diemTrungBinh();
    return student;
}
//Get info employee
const getInfoEmployee = () => {
    const ma = getEle("ma").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const address = getEle("address").value;
    const soNgayLam = getEle("soNgayLam").value;
    const luongNgay = getEle("luongNgay").value;

    const employee = new Employee(name, address, ma, email, soNgayLam, luongNgay);
    employee.tinhLuongGV();
    return employee;
}
//Get info Customer
const getInfoCustomer = () => {
    const ma = getEle("ma").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const address = getEle("address").value;
    const tenCongTy = getEle("tenCongTy").value;
    const triHoaDon = getEle("triHoaDon").value;
    const danhGia = getEle("danhGia").value;

    const customer = new Customer(name, address, ma, email, tenCongTy, triHoaDon, danhGia);
    return customer;
}

/***RENDER LIST UI */
const renderUI = (data) => {
    let content = "";
    if (data && data.length > 0) {
        data.forEach((student) => {
            content += `
                  <tr>
                      <td>${student.ma}</td>
                      <td>${student.hoTen}</td>
                      <td>${student.email}</td>
                      <td>${student.diaChi}</td>
                      <td>${student.diemtb}</td>
                      <td>${student.tongLuong}</td>
                      <td>${student.tenCongTy}</td>
                      <td>${student.triHoaDon}</td>
                      <td>${student.danhGia}</td>
                      <td>
                        <button class='btn btn-info' data-toggle="modal" data-target="#myModal" onclick="suaUser(${student.ma})">Edit</button>
                        <button id="xoa" class='btn btn-danger' onclick="xoaUser(${student.ma})">Delete</button>
                      </td>
                   </tr>            
              `
        });
    };
    getEle("tableDanhSach").innerHTML = content;
}

/***** ADD LIST SCHOOL *****/
//Add Student
getEle("btnThem1").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Student";
    getEle("btnAddStudent").style.display = "block";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "none";
});
getEle("btnAddStudent").addEventListener("click", () => {
    const user = getInfoStudent();
    person.addList(user);
    renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});
//Add Employee
getEle("btnThem2").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Employee";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "block";
    getEle("btnAddCustomer").style.display = "none";
});
getEle("btnAddEmployee").addEventListener("click", () => {
    const user = getInfoEmployee();
    person.addList(user);
    renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});
//Add Customer
getEle("btnThem3").addEventListener("click", () => {
    getEle("header-title").innerHTML = "Customer";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "block";
});
getEle("btnAddCustomer").addEventListener("click", () => {
    const user = getInfoCustomer();
    person.addList(user);
    renderUI(person.arr);
    setLocalStorage();
    getEle("btnDong").click();
});

/******* DELETE USER ******/
const xoaUser = () => {
    const index = person.arr.findIndex(user => user.arr.ma === ma);
    person.arr.splice(index, 1);
    renderUI(person.arr);
}
window.xoaUser = xoaUser;

/**** UPDATE INFO *****/
//UI update info popup
const suaUser = () => {
    getEle("header-title").innerHTML = "Edit Info";
    getEle("btnAddStudent").style.display = "none";
    getEle("btnAddEmployee").style.display = "none";
    getEle("btnAddCustomer").style.display = "none";
    getEle("btnCapNhat").style.display = "block";    
}
window.suaUser = suaUser;
//Button Update
const updatePerson = (typePerson)=>{
    const index = person.arr.find(user => user.ma === ma);
    if(index){
        person.arr[index] = typePerson;
    }
}
getEle("btnCapNhat").addEventListener("click",()=>{ 
    const student = getInfoStudent();
    console.log(student);
    // const employee = getInfoEmployee();
    // const customer = getInfoCustomer();
    updatePerson(student);
    renderUI(person);
    setLocalStorage();
    getEle("btnDong").click();
    // // updatePerson(employee);
    // // updatePerson(customer);
});
/****SAVE IN LOCALSTORAGE */
const setLocalStorage = () => {
    const dataString = JSON.stringify(person.arr);
    localStorage.setItem("LIST", dataString);
}

const getLocalStorage = () => {    
    if (localStorage.getItem("LIST")) {
        const dataString = localStorage.getItem("LIST");
        const dataJson = JSON.parse(dataString);
        renderUI(dataJson);
    }
}
getLocalStorage();