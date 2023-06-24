
export default class ListPerson {
    constructor() {
        this.arr = [];
    }
    addPerson(newPerson) {
        this.arr.push(newPerson);
        return this.arr;
    }
    /***RENDER LIST UI */
    renderListPerson() {
        let content = "";
        if (this.arr && this.arr.length > 0) {
            this.arr.forEach((user) => {
                content += `
                  <tr>
                      <td>${user.id}</td>
                      <td>${user.name}</td>
                      <td>${user.email}</td>
                      <td>${user.address}</td>
                      <td>${user.typeUser}</td>
                      <td>${user?.diemTrungBinh ? user?.diemTrungBinh() : ''}</td>
                      <td>${user?.tongLuong || ''}</td>
                      <td>${user?.tenCongTy || ''}</td>
                      <td>${user?.triHoaDon || ''}</td>
                      <td>${user?.danhGia || ''}</td>
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

    getInfoPerson(idPerson) {
        let person = this.arr.find(person => person.id === idPerson);
        return person;
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
    // updatePerson(typePerson, id) {
    //     const index = this.arr.find(user => user.id === id);
    //     if (index > 0) {
    //         this.arr[index] = typePerson;
    //     }
    // }

    updatePerson(idPerson, personUpdate) {
        let personGet = this.getInfoPerson(idPerson);
        if (personGet) {
            for (let key in personGet) {
                personGet[key] = personUpdate[key];
            }
            return true;
        }
        return false
    }
}