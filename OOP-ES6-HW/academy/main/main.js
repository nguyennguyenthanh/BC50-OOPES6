import Person from "../person/person.js";
import Student from "../student/student.js";
import Employee from "../employee/employee.js";
import Customer from "../customer/customer.js";
import listPerson from "../listperson/listperson.js";

const getEle = (id) => document.getElementById(id);

/***RENDER POPUP */
const formStudent = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'adress', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'diemToan', name: 'mathScore', placeHolder: 'Điểm Toán', spanTag: 'tbDiemToan', errorId: 'errorDiemToan' },
    { id: 'diemLy', name: 'phisicScore', placeHolder: 'Điểm Lý', spanTag: 'tbDiemLy', errorId: 'errorDiemLy' },
    { id: 'diemHoa', name: 'chemisScore', placeHolder: 'Điểm Hóa', spanTag: 'tbDiemHoa', errorId: 'errorDiemHoa' },
];
const formEmployee = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'adress', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
    { id: 'soNgayLam', name: 'ngayLam', placeHolder: 'Số Ngày Làm', spanTag: 'tbSoNgayLam', errorId: 'errorSoNgayLam' },
    { id: 'luongNgay', name: 'luongNgay', placeHolder: 'Lương Theo Ngày', spanTag: 'tbluongTheoNgay', errorId: 'errorluongTheoNgay' },
];
const formCustomer = [
    { id: 'ma', name: 'maSo', placeHolder: 'Mã', spanTag: 'tbMa', errorId: 'errorMaSo' },
    { id: 'name', name: 'ten', placeHolder: 'Họ và tên', spanTag: 'tbTen', errorId: 'errorName' },
    { id: 'email', name: 'email', placeHolder: 'Email', spanTag: 'tbEmail', errorId: 'errorEmail' },
    { id: 'adress', name: 'diaChi', placeHolder: 'Địa Chỉ', spanTag: 'tbAddress', errorId: 'errorAddress' },
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


/***GET INFO */
const getInfo = () => {
    const ma = getEle("ma").value;
    const name = getEle("name").value;
    const email = getEle("email").value;
    const adress = getEle("adress").value;
    const diemToan = getEle("diemToan").value;
    const diemLy = getEle("diemLy").value;
    const diemHoa = getEle("diemHoa").value;
    // const soNgayLam = getEle("soNgayLam").value;
    // const luongNgay = getEle("luongNgay").value;
    // const tenCongTy = getEle("tenCongTy").value;
    // const triHoaDon = getEle("triHoaDon").value;
    // const danhGia = getEle("danhGia").value;


    const student = new Student(name, adress, ma, email, diemToan, diemLy, diemHoa);
    // const employee = new Employee(name, adress, ma, email, soNgayLam, luongNgay);
    // const customer = new Customer(name, adress, ma, email, tenCongTy, triHoaDon, danhGia);
    // const lisperson = new listPerson(student, employee, customer);

    student.diemTrungBinh();
    // employee.tinhLuongGV();
    return student;
}

/***RENDER LIST UI */
const renderUI = (data) => {
    let content = "";
    if (data && data.length > 0) {
        data.forEach((student) => {
            content += `
                  <tr>
                      <td>${student.ma}</td>
                      <td>${student.name}</td>
                      <td>${student.email}</td>
                      <td>${student.adress}</td>
                      <td>${student.diemtb}</td>
                      <td>${student.tongLuong}</td>
                      <td>
                        <button class='btn btn-info' onlick="suaMonAn(${student.id})" data-toggle="modal"
                        data-target="#exampleModal">Sửa</button>
                        <button class='btn btn-danger' onclick="xoaMonAn(${student.id})">Xóa</button>
                      </td>
                   </tr>            
              `
        });
    };
    getEle("tableDanhSach").innerHTML = content;
}


getEle("btnAddUser").addEventListener("click", (student) => {
    const user = getInfo();
    renderUI(student.ma);
    getEle("btnDong").click();
    console.log(user);
});