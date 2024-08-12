import { get_ID } from "./controller.js";
import Person from "./Person.js";
import SinhVien from "./SinhVien.js";
import NhanVien from "./NhanVien.js";
import KhachHang from "./KhachHang.js";
import SinhVienList from "./SinhVienList.js";
import NhanVienList from "./NhanVienList.js";
import KhachHangList from "./KhachHangList.js";
import PersonList from "./PersonList.js";

const listSV = get_ID('tblDanhSachSV');
const listNV = get_ID('tblDanhSachNV');
const listKH = get_ID('tblDanhSachKH');
const listPerson = get_ID('tblDanhSachAll');
const ds_SinhVien = new SinhVienList();
const ds_NhanVien = new NhanVienList();
const ds_KhachHang = new KhachHangList();
const ds_All = new PersonList();

const personID = get_ID('personID');
const hoTen = get_ID('hoTen');
const diaChi = get_ID('diaChi');
const email = get_ID('email');
const toan = get_ID('toan');
const ly = get_ID('ly');
const hoa = get_ID('hoa');
const soNgayLamViec = get_ID('soNgay');
const luongNgay = get_ID('luongNgay');
const tenCongTy = get_ID('tenCongTy');
const hoaDon = get_ID('hoaDon');
const danhGia = get_ID('danhGia');

const btnThemSV = get_ID('btnThemSV');
const btnThemNV = get_ID('btnThemNV');
const btnThemKH = get_ID('btnThemKH');
const tabSV = get_ID('tabSV-pane');
const tabNV = get_ID('tabNV-pane');
const tabKH = get_ID('tabKH-pane');

const btnThemNguoi = get_ID('addPersonButton');
const btnCapNhatNguoi = get_ID('updatePersonButton');

btnThemSV.addEventListener('click', (e) => {
  e.preventDefault();
  get_ID('form-toan').style.display = 'block';
  get_ID('form-ly').style.display = 'block';
  get_ID('form-hoa').style.display = 'block';
  get_ID('form-soNgay').style.display = 'none';
  get_ID('form-luongNgay').style.display = 'none';
  get_ID('form-tenCongTy').style.display = 'none';
  get_ID('form-hoaDon').style.display = 'none';
  get_ID('form-danhGia').style.display = 'none';

  btnThemNguoi.style.display = 'block';
  btnCapNhatNguoi.style.display = 'none';
})

btnThemNV.addEventListener('click', (e) => {
  e.preventDefault();
  get_ID('form-toan').style.display = 'none';
  get_ID('form-ly').style.display = 'none';
  get_ID('form-hoa').style.display = 'none';
  get_ID('form-soNgay').style.display = 'block';
  get_ID('form-luongNgay').style.display = 'block';
  get_ID('form-tenCongTy').style.display = 'none';
  get_ID('form-hoaDon').style.display = 'none';
  get_ID('form-danhGia').style.display = 'none';

  btnThemNguoi.style.display = 'block';
  btnCapNhatNguoi.style.display = 'none';
})

btnThemKH.addEventListener('click', (e) => {
  e.preventDefault();
  get_ID('form-toan').style.display = 'none';
  get_ID('form-ly').style.display = 'none';
  get_ID('form-hoa').style.display = 'none';
  get_ID('form-soNgay').style.display = 'none';
  get_ID('form-luongNgay').style.display = 'none';
  get_ID('form-tenCongTy').style.display = 'block';
  get_ID('form-hoaDon').style.display = 'block';
  get_ID('form-danhGia').style.display = 'block';

  btnThemNguoi.style.display = 'block';
  btnCapNhatNguoi.style.display = 'none';
})

btnThemNguoi.addEventListener('click', (e) => {
  e.preventDefault();

  if(tabSV.classList.contains('show'))
    addPersonToList('SV');

  if(tabNV.classList.contains('show'))
    addPersonToList('NV');

  if(tabKH.classList.contains('show'))
    addPersonToList('KH');
})

function addPersonToList(type) {
  var id = personID.value;
  var name = hoTen.value;
  var address = diaChi.value;
  var gmail = email.value;

  let person;
  let allPerson = new Person(id, name, address, gmail, type);
  if(type === 'SV') {
      person = new SinhVien(id, name, address, gmail, toan.value, ly.value, hoa.value);
      ds_SinhVien.addSV(person);
  } else if(type === 'NV') {
      person = new NhanVien(id, name, address, gmail, soNgayLamViec.value, luongNgay.value);
      ds_NhanVien.addNV(person);
  } else if(type === 'KH') {
      person = new KhachHang(id, name, address, gmail, tenCongTy.value, hoaDon.value, danhGia.value);
      ds_KhachHang.addKH(person);
  }
  ds_All.addPerson(allPerson);

  renderList(type);
}

function renderList(type) {
  var content = '';
  var contentAll = '';
  if(type === 'SV') {
      ds_SinhVien.listSV.forEach((sv) => {
          content += renderRow(sv) + `
                  <td>${sv.toan}</td>
                  <td>${sv.ly}</td>
                  <td>${sv.hoa}</td>
          ` + chucNangXoaSua(sv, type);
          
      });
      listSV.innerHTML = content;
  } else if(type === 'NV') {
      ds_NhanVien.listNV.forEach((nv) => {
          content += renderRow(nv) + `
                  <td>${nv.soNgayLamViec}</td>
                  <td>${nv.luongNgay}</td>
          ` + chucNangXoaSua(nv, type);
      });
      listNV.innerHTML = content;
  } else if(type === 'KH') {
      ds_KhachHang.listKH.forEach((kh) => {
          content += renderRow(kh) + `
                  <td>${kh.tenCongTy}</td>
                  <td>${kh.hoaDon}</td>
                  <td>${kh.danhGia}</td>
            ` + chucNangXoaSua(kh, type);
      });
      listKH.innerHTML = content;
  }

  ds_All.listPerson.forEach((person) => {
    let personType = '';
    if (person.type === 'SV') {
        personType = 'Sinh viên';
    } else if (person.type === 'NV') {
        personType = 'Giảng viên';
    } else if (person.type === 'KH') {
        personType = 'Khách hàng';
    }
    contentAll += renderRow(person) + `
            <td>${personType}</td>
        </tr>
    `;
  });

  listPerson.innerHTML = contentAll;
}

function renderRow(person) {  
  return `
      <tr>
          <td>${person.personID}</td>
          <td>${person.hoTen}</td>
          <td>${person.diaChi}</td>
          <td>${person.email}</td>
  `;
}

function chucNangXoaSua(person, type) {
  return `
        <td>
            <button class="btn-edit btn btn-success" onclick="editPerson('${person.personID}', '${type}')">Sửa</button>
            <button class="btn-delete btn btn-danger" onclick="deletePerson('${person.personID}', '${type}')">Xóa</button>
        </td>
      </tr>
  `;
}

function deletePerson(personID, type) {
  if (type === 'SV') {
      ds_SinhVien.deleteByID(personID);
  } else if (type === 'NV') {
      ds_NhanVien.deleteByID(personID);
  } else if (type === 'KH') {
      ds_KhachHang.deleteByID(personID);
  }
  renderList(type);
}

function editPerson(personID, type) {
  // Thực hiện các thao tác chỉnh sửa tại đây
  // Gán giá trị cho form và cập nhật dữ liệu
  if (type === 'SV') {
      let sv = ds_SinhVien.getByID(personID);
      // Gán giá trị của sinh viên cho các trường trong form
      hoTen.value = sv.hoTen;
      diaChi.value = sv.diaChi;
      email.value = sv.email;
      toan.value = sv.toan;
      ly.value = sv.ly;
      hoa.value = sv.hoa;
  } else if (type === 'NV') {
      let nv = ds_NhanVien.getByID(personID);
      // Gán giá trị của nhân viên cho các trường trong form
      hoTen.value = nv.hoTen;
      diaChi.value = nv.diaChi;
      email.value = nv.email;
      soNgayLamViec.value = nv.soNgayLamViec;
      luongNgay.value = nv.luongNgay;
  } else if (type === 'KH') {
      let kh = ds_KhachHang.getByID(personID);
      // Gán giá trị của khách hàng cho các trường trong form
      hoTen.value = kh.hoTen;
      diaChi.value = kh.diaChi;
      email.value = kh.email;
      tenCongTy.value = kh.tenCongTy;
      hoaDon.value = kh.hoaDon;
      danhGia.value = kh.danhGia;
  }

  // Ẩn nút thêm và hiện nút cập nhật
  btnThemNguoi.style.display = 'none';
  btnCapNhatNguoi.style.display = 'block';
}

