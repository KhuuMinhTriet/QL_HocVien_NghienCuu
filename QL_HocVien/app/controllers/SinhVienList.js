class SinhVienList {
    constructor() {
        this.listSV = [];
    }

    addSV(sv) {
        this.listSV.push(sv);
    }

    deleteByID(personID) {
        this.listSV = this.listSV.filter(sv => sv.personID != personID);
    }

    updateByID(personID, newSV) {
        const index = this.listSV.findIndex(sv => sv.personID === personID);
        if(index != -1) 
            this.listSV[index] = newSV;
    }
}

export default SinhVienList