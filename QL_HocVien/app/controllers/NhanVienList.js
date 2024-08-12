class NhanVienList {
    constructor() {
        this.listNV = [];
    }

    addNV(nv) {
        this.listNV.push(nv);
    }

    deleteByID(personID) {
        this.listNV = this.listNV.filter(nv => nv.personID != personID);
    }

    updateByID(personID, newNV) {
        const index = this.listNV.findIndex(nv => nv.personID === personID);
        if(index != -1) 
            this.listNV[index] = newNV;
    }
}

export default NhanVienList