enum MYTYPE{
    A="A",
    B="B"
}

interface ISimpleObj {
    firstName: string;
    LastName: string;
    type:MYTYPE;
    myCallPick: () => void;
}

let kkk={a:1,b:2};
kkk={...kkk,b:4};

function first() {
    console.log("first(): factory evaluated");
    return function (target?: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        console.log("first(): called",propertyKey);
    };
}


class Myclass {


    @first()
    public call(a:any) {

console.log("hello",a);

    }
}


console.log(new Myclass().call("shantanu"));


// simpleObj //out 
