class User{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
        User.userCount++;
    }
    static getUsersCount()
    {
        return User.userCount;
    }
    confirmationMsg()
    {
        console.log(this.name+" is registered");
    }
}
class Member extends User{
    constructor(name,age,memberPackage)
    {
        super(name,age);
        this.memberPackage = memberPackage
    }
    getPackage()
    {
        console.log(this.memberPackage+`package is opted by user ${this.name}`);
    }
}
/*let arr1 = [1, 2,3];

let arr2 = [4,5,6];
function test()
{
    console.log(arr1+','+arr2);
}
test(...arr1,...arr2);
 User.userCount=0;
 let gunal = new Member('gunal',22,'Premium');
 let sri = new Member('Sriram',20,'Standard');
 console.log(User.getUsersCount());
 gunal.getPackage();*/


function fun(num)
{
    
}

 const num = [1,2,3,4,5];
 const newArr = map(num,func);
