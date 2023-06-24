
import Student from "../student/student.js";
import Employee from "../employee/employee.js";
import Customer from "../customer/customer.js";
import ListPerson from "../listperson/listperson.js";

const getEle = (id) => document.getElementById(id);
const listPeople = new ListPerson();

const fieldOptionsByType = [
    { id: 'toan', name: 'mathScore', placeHolder: 'Điểm Toán', spanTag: 'tbDiemToan', errorId: 'errorDiemToan', typeUser: 'student' },
    { id: 'ly', name: 'phisicScore', placeHolder: 'Điểm Lý', spanTag: 'tbDiemLy', errorId: 'errorDiemLy', typeUser: 'student' },
    { id: 'hoa', name: 'chemisScore', placeHolder: 'Điểm Hóa', spanTag: 'tbDiemHoa', errorId: 'errorDiemHoa', typeUser: 'student' },
    { id: 'soNgayLamViec', name: 'ngayLam', placeHolder: 'Số Ngày Làm', spanTag: 'tbSoNgayLam', errorId: 'errorSoNgayLam', typeUser: 'employee' },
    { id: 'luongTheoNgay', name: 'luongNgay', placeHolder: 'Lương Theo Ngày', spanTag: 'tbluongTheoNgay', errorId: 'errorluongTheoNgay', typeUser: 'employee' },
    { id: 'tenCongTy', name: 'nameCom', placeHolder: 'Tên Công Ty', spanTag: 'tbtenCongTy', errorId: 'errortenCongTy', typeUser: 'customer' },
    { id: 'triHoaDon', name: 'bill', placeHolder: 'Trị Hóa Đơn', spanTag: 'tbtriHoaDon', errorId: 'errortriHoaDon', typeUser: 'customer' },
    { id: 'danhGia', name: 'assess', placeHolder: 'Đánh Giá', spanTag: 'tbdanhGia', errorId: 'errordanhGia', typeUser: 'customer' },
]

const helperInitUser = (type) => {
    if (type === 'student') return new Student();
    else if (type === 'employee') return new Employee();
    else if (type === 'customer') return new Customer();
}

const helperShowFieldByType = (type) => {
    let fieldByType = fieldOptionsByType.filter(field => field.typeUser === type)
        .reduce((pre, curr) =>
            pre + `
        <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" name="${curr.name}" id="${curr.id}" class="form-control input-sm"
                  placeholder="${curr.placeHolder}">
          </div>
          <span class="sp-thongbao" id="${curr.spanTag}"></span>
          <div id="${curr.errorId}" style="display: none;" class="text-danger"></div>
        </div>
        `
            , ' ')

    document.querySelector("#optionForm").innerHTML = fieldByType;
}

const getInfoUser = () => {
    let arrInput = Array.from(document.querySelectorAll("#myModal input, #myModal select "));

    let user = helperInitUser(arrInput.find(input => input.id === 'typeUser').value)

    for (let input of arrInput) {
        let { id, value } = input;
        user[id] = value;
    }

    return user;
}

const handleResetForm = () => {
    document.querySelector("#id").disabled = false;

    document.querySelector("#optionForm").innerHTML = '';
    document.querySelector("[data-dismiss=modal]").click();
    document.querySelector("form").reset();
}

document.querySelector("#typeUser").oninput = () => {
    let opt = document.querySelector("#typeUser").value;

    helperShowFieldByType(opt)
};

getEle("btnAddUser").onclick = () => {
    let newUser = getInfoUser()
    listPeople.addPerson(newUser);
    listPeople.renderListPerson("tbody");

    handleResetForm()
};

getEle("btnUpdate").onclick = () => {
    let newUser = getInfoUser()
    listPeople.updatePerson(newUser.id, newUser);

    listPeople.renderListPerson("tbody");
    handleResetForm()
    
    document.querySelector("#btnAddUser").style.display = 'block';
    document.querySelector("#btnUpdate").style.display = 'none';
}

window.editUser = (idPerson) => {
    let perEdit = listPeople.getInfoPerson(idPerson);
    if (perEdit) {
        helperShowFieldByType(perEdit.typeUser)

        let arrInput = document.querySelectorAll("#myModal input, #myModal select");
        for (let input of arrInput) {
            let { id } = input;
            input.value = perEdit[id];
        }

        document.querySelector("#btnUpdate").style.display = 'block';
        document.querySelector("#btnAddUser").style.display = 'none';
        document.querySelector("#id").disabled = true;
    }
};