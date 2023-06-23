
export default class ListPerson {
    constructor() {
        this.arr = [];
    }
    addList() {
        this.arr.push();
    }
    /*** RENDER UI POPUP ****/
    renderForm(formType) {
        let content = "";
        formType.forEach((inputItem) => {
            content += `
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
        document.getElementById("formNV").innerHTML = content;
    }
    /***RENDER LIST UI */
    renderUI(data) {
        let content = "";
        if (data && data.length > 0) {
            data.forEach((user) => {
                content += `
                  <tr>
                      <td>${user.id}</td>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.diemtb}</td>
                      <td>${user.tongLuong}</td>
                      <td>${user.tenCongTy}</td>
                      <td>${user.triHoaDon}</td>
                      <td>${user.danhGia}</td>
                      <td>
                        <button class='btn btn-info' data-toggle="modal" data-target="#myModal" onclick="editUser('${user.id}')">Edit</button>
                        <button id="xoa" class='btn btn-danger' onclick="deleteUser('${user.id}')">Delete</button>
                      </td>
                   </tr>            
              `
            });
        };
        document.getElementById("tableDanhSach").innerHTML = content;
    }
    /**** EDIT PERSON ****/
    editInfoPerson(id) {
        const index = this.arr.findIndex(user => user.id === id);
        if (index !== -1) {
            return this.arr[index];
        }
        return null;
    }
    /****UPDATE PERSON ****/
    updatePerson(typePerson,id) {
        const index = this.arr.find(user => user.id === id);
        if (index > 0) {
            this.arr[index] = typePerson;
        }
    }
}