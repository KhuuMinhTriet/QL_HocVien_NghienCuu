import Person from "./Person.js";

export default class SinhVien extends Person {
    constructor(personID, hoTen, diaChi, email, toan, ly, hoa) {
        super(personID, hoTen, diaChi, email);
        this.toan = toan;
        this.ly = ly;
        this.hoa = hoa;
    }
    tinhDTB() {
        return (this.toan + this.ly + this.hoa) / 3;
    }
}
