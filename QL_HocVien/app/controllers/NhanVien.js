import Person from "./Person.js";

export default class NhanVien extends Person {
    constructor(personID, hoTen, diaChi, email, soNgayLamViec, luongNgay) {
        super(personID, hoTen, diaChi, email);
        this.soNgayLamViec = soNgayLamViec;
        this.luongNgay = luongNgay;
    }
    tinhLuong() {
        return this.soNgayLamViec * this.luongNgay;
    }
}

