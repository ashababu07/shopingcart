export class Product {
    ProductId:string
    ProductName:string
    ProductPrice:number
    ProductDescription:string

    constructor(proid,proname,proprice,prodescription)
    {
        this.ProductId=proid  //intialize the variables by using this keyword
        this.ProductName=proname
        this.ProductPrice=proprice
        this.ProductDescription=prodescription
    }

}
