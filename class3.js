class product{
    oil_price=200;
    constructor (a,b,c){
        this.acc_id=a;
        this.acc_name=b;
        this.acc_amount=c;
    }
    sum(a,b){
        console.log(a+b);
    }
}
let c1=new product(01,'sukhdeb',45000);
console.log(c1);
let c2=new product(02,'suraj',10000);
console.log(c2);
c1.sum(10,20);
console.log(c1);


class Bank{
    min_bal=1000;
    a=20;
    b=20;
    constructor (s,b,d){
        this.acc_Name=s;
        this.acc_no=b;
        this.acc_age=d;

       
    }
    sum(){
console.log("sum of the no=>", + this.a + this.b +this.min_bal);
    }
 
}
let c3=new Bank("beena",54654654,54);
console.log(c3);
c3.sum();

let c5=new Bank("sukhdeb",6465464,22);
console.log(c5);





