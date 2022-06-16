class Product {
    constructor(
        public name: string,
        public image: string,
        public price: number,
        public quantity: number,
        public id?: string,
    ) { }
}

export default Product