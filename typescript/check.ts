interface ISimpleObj {
    firstName: string;
    LastName: string;
    myCallPick: () => void;
}

function first() {
    console.log("first(): factory evaluated");
    return function (target?: any, propertyKey?: string, descriptor?: PropertyDescriptor) {
        console.log("first(): called");
    };
}


class Myclass {


    @first()
    public call() {

console.log("hello");

    }
}




// simpleObj //out 
