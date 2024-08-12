import Person from "./Person.js";

export default class KhachHang extends Person {
    constructor(personID, hoTen, diaChi, email, tenCongTy, hoaDon, danhGia) {
        super(personID, hoTen, diaChi, email);
        this.tenCongTy = tenCongTy;
        this.hoaDon = hoaDon;
        this.danhGia = danhGia;
    }
}

