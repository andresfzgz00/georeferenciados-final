import Product from "./Product";

export default class {
    constructor(
        public products: Product[],
        public amount: number,
        public date: Date,
        public id?: number,
    ) {};
}