import Person from "../person/person.js";
import Student from "../student/student.js";
import Employee from "../employee/employee.js";
import Customer from "../customer/customer.js";

const getEle = (id) => document.getElementById(id);


getEle("btnThem1").addEventListener("click",()=>{
    const content = `
    <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-user"></i></span>
              </div>
              <input type="text" name="tk" id="ma" class="form-control input-sm"
                  placeholder="Mã">
          </div>
          <span class="sp-thongbao" id="tbTKNV"></span>
          <!-- display:none; vì khi vừa vào browser thì k hiện -->
          <div id="errorTaiKhoan" style="display: none;" class="text-danger"></div>
    </div>
    <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-address-book"></i></span>
              </div>
              <input type="name" name="name" id="name" class="form-control input-sm"
                  placeholder="Họ và tên">
          </div>
          <span class="sp-thongbao" id="tbTen"></span>
          <div id="errortenNV" style="display: none;" class="text-danger"></div>
    </div>
    <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-envelope"></i></span>
              </div>
              <input type="email" name="email" id="email" class="form-control input-sm"
                  placeholder="Email">
          </div>
          <span class="sp-thongbao" id="tbEmail"></span>
          <div id="errorEmail" style="display: none;" class="text-danger"></div>
    </div>
    <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-key"></i></span>
              </div>
              <input type="text" name="password" id="adress" class="form-control input-sm"
                  placeholder="Địa Chỉ">
          </div>
          <span class="sp-thongbao" id="tbMatKhau"></span>
          <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
    </div>
      <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-key"></i></span>
              </div>
              <input type="text" name="password" id="diemToan" class="form-control input-sm"
                  placeholder="Điểm Toán">
          </div>
          <span class="sp-thongbao" id="tbMatKhau"></span>
          <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
      </div>
      <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-key"></i></span>
              </div>
              <input type="text" name="password" id="diemLy" class="form-control input-sm"
                  placeholder="Điểm Lý">
          </div>
          <span class="sp-thongbao" id="tbMatKhau"></span>
          <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
      </div>
      <div class="form-group">
          <div class="input-group">
              <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fa fa-key"></i></span>
              </div>
              <input type="text" name="password" id="diemHoa" class="form-control input-sm"
                  placeholder="Điểm Hóa">
          </div>
          <span class="sp-thongbao" id="tbMatKhau"></span>
          <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
      </div>
    `
    getEle("formNV").innerHTML = content;    
});
getEle("btnThem2").addEventListener("click",()=>{
  const content = `
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" name="tk" id="ma" class="form-control input-sm"
                placeholder="Mã">
        </div>
        <span class="sp-thongbao" id="tbTKNV"></span>
        <!-- display:none; vì khi vừa vào browser thì k hiện -->
        <div id="errorTaiKhoan" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-address-book"></i></span>
            </div>
            <input type="name" name="name" id="name" class="form-control input-sm"
                placeholder="Họ và tên">
        </div>
        <span class="sp-thongbao" id="tbTen"></span>
        <div id="errortenNV" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
            </div>
            <input type="email" name="email" id="email" class="form-control input-sm"
                placeholder="Email">
        </div>
        <span class="sp-thongbao" id="tbEmail"></span>
        <div id="errorEmail" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" name="password" id="adress" class="form-control input-sm"
                placeholder="Địa Chỉ">
        </div>
        <span class="sp-thongbao" id="tbMatKhau"></span>
        <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
      <div class="input-group">
          <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
          </div>
          <input type="text" name="password" id="soNgayLam" class="form-control input-sm"
              placeholder="Số Ngày Làm">
      </div>
      <span class="sp-thongbao" id="tbMatKhau"></span>
      <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
      <div class="input-group">
          <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
          </div>
          <input type="text" name="password" id="luongTheoNgay" class="form-control input-sm"
              placeholder="Lương Theo Ngày">
      </div>
      <span class="sp-thongbao" id="tbMatKhau"></span>
      <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  `
  getEle("formNV").innerHTML = content;    
});
getEle("btnThem3").addEventListener("click",()=>{
  const content = `
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-user"></i></span>
            </div>
            <input type="text" name="tk" id="ma" class="form-control input-sm"
                placeholder="Mã">
        </div>
        <span class="sp-thongbao" id="tbTKNV"></span>
        <!-- display:none; vì khi vừa vào browser thì k hiện -->
        <div id="errorTaiKhoan" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-address-book"></i></span>
            </div>
            <input type="name" name="name" id="name" class="form-control input-sm"
                placeholder="Họ và tên">
        </div>
        <span class="sp-thongbao" id="tbTen"></span>
        <div id="errortenNV" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-envelope"></i></span>
            </div>
            <input type="email" name="email" id="email" class="form-control input-sm"
                placeholder="Email">
        </div>
        <span class="sp-thongbao" id="tbEmail"></span>
        <div id="errorEmail" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
        <div class="input-group">
            <div class="input-group-prepend">
                <span class="input-group-text"><i class="fa fa-key"></i></span>
            </div>
            <input type="text" name="password" id="adress" class="form-control input-sm"
                placeholder="Địa Chỉ">
        </div>
        <span class="sp-thongbao" id="tbMatKhau"></span>
        <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
      <div class="input-group">
          <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
          </div>
          <input type="text" name="password" id="tenCongTy" class="form-control input-sm"
              placeholder="Tên Công Ty">
      </div>
      <span class="sp-thongbao" id="tbMatKhau"></span>
      <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
      <div class="input-group">
          <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
          </div>
          <input type="text" name="password" id="triHoaDon" class="form-control input-sm"
              placeholder="Trị Hóa Đơn">
      </div>
      <span class="sp-thongbao" id="tbMatKhau"></span>
      <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  <div class="form-group">
      <div class="input-group">
          <div class="input-group-prepend">
              <span class="input-group-text"><i class="fa fa-key"></i></span>
          </div>
          <input type="text" name="password" id="danhGia" class="form-control input-sm"
              placeholder="Đánh Giá">
      </div>
      <span class="sp-thongbao" id="tbMatKhau"></span>
      <div id="errorMatKhau" style="display: none;" class="text-danger"></div>
  </div>
  `
  getEle("formNV").innerHTML = content;    
});
/***RENDER */
const renderUI = () => {
    

}

/***GET INFO */
const getInfo = () => {
}