export class Customer {
    username:string
    password:string
    email:string
    dob:string

    constructor(uname,password,email,dob)
    {
        this.username=uname
        this.password=password
        this.email=email
        this.dob=dob
    }
}
// let cus:Customer=new Customer("meenu","123","meenu12@gmail.com","11-11-1911")