class Sbi_Bank{
    max_Bal=500;
    open_Account(){
        console.log("Account is opened sucessfully");
    }
    get_balance(){
        return this.max_Bal+1000;

    }
    get_min(){
        return this.max_Bal;
    }
}

let c1= new Sbi_Bank();
console.log(c1);
let amount=c1.get_balance();
console.log(amount);

c1.open_Account();

let min=c1.get_min();
console.log(min);


class sum{
a=50;
b=10;
sum(a,b){
    console.log(a+b);

}
multi(a,b){
    console.log(this.a * this.b);
}
}
let sum1=new sum();
sum1.sum(4,10);
console.log(sum1);
sum1.multi();

class fun{
    add(a,b){
console.log(a+b);
    }
}
let c4=new fun();
c4.add(4,6);

class same{
    s=20;
    r=10;

    div(a,b){
        return this.s * this.r;
    }
}
var mod=new same();

console.log(mod);
mod.div(10,20);

