 class User {
    constructor(name,phone,email,password,gender){
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.password = password;
        this.gender = gender;
        this.code = function(){
            let str = this.name+this.email+this.phone;
            return str.split('').reduce((a,b) => (((a << 5) - a) + b.charCodeAt(0))|0, 0);
        }
    }
}

 var users = [
    new User("Nguyễn Xuân Thu","0912356425","xuanthu@gmail.com","xuanthu190",true),
    new User("Hoàng Thị Loan","0987357925","admin@gmail.com","admin99",false)
];

 function data(){
   
    // users.push(new User("Vịnh Xuân Lan","0967253817","xuanlan@gmai.com","xuanlan199",false,"1999,1,2"));
    // users.push(new User("Hà Thủ Ô","0936359425","thuo@gmai.com","thuo96",true,"1996,8,12"));
    // users.push(new User("Lý Xuân Quỳnh","0989765425","xuanquynh@gmai.com","xuanquynh197",false,"1997,11,15"));
}

function getUsers(){
    let json = JSON.stringify(users);
    return json;
}

 function addUser(user){
    users.push(user);
}

 

