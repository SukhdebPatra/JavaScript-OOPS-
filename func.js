function add(a,b){
    console.log(a+b);

}
add(45,45);

let multi=(a,b)=>a*b
    let result=multi(10,2);
    console.log(result);

    var emp=[{id:01,name:"sukhdeb"},
    {id:02,name:"suraj"},
    {id:03,name:"shivani"}];
    console.log(emp);

    // by using this keyword

    function emp2(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;
    }
    e=new emp2(103,"sukhdeb",40000);
    console.log(e);

 var product=[{name:"tv1",company:"samsung"},
{name:"tv2",company:"mi"},
{name:"tv3",company:"lg"}];
console.log(product);


function product2(){
    var arr=[{name:"tv2",company:"mi"},
    {name:"tv3",company:"lg"}];
    console.log(arr);
}
product2();
product2();
product2();

function product3()
{
    var arra=[{name:"sonia",id:02,age:29},
    {name:"Beena",id:01,age:26},
{name:"sukhdeb",id:03,age:26}];
console.log(arra);
}


product3();
product3();
