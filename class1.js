class Bank{
    max_Bal=5000;
    open_Account(){
        console.log("your maximum ball" + " " + this.max_Bal);
    }
    close_account(){
        console.log("your account is closed");
    }
    add(a,b){
        console.log(a+b);
    }
}
let c1=new Bank();
console.log(c1);
c1.open_Account();
c1.close_account();
c1.add(5,6);



