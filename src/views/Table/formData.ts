export interface ForDatInter {
    input: string;
    select: number | string;
    cascader: string;
}
export class FormData implements ForDatInter {
    input: string;
    select: number | string;
    cascader: string;
    constructor(i?: number) {
        if (i) {
            this.input = i + ""
            this.select = i + ""
            this.cascader = i + ""
        } else {
            this.input = "";
            this.select = "";
            this.cascader = "";
        }
    }
} 