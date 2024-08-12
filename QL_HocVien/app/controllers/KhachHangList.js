class KhachHangList {
    constructor() {
        this.listKH = [];
    }

    addKH(kh) {
        this.listKH.push(kh);
    }

    deleteByID(personID) {
        this.listKH = this.listKH.filter(kh => kh.personID != personID);
    }

    updateByID(personID, newKH) {
        const index = this.listKH.findIndex(kh => kh.personID === personID);
        if(index != -1) 
            this.listKH[index] = newKH;
    }
}

export default KhachHangList