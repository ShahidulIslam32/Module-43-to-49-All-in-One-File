// no parameter and multiline  // 

let noParam = () => {
    let a = 10;
    let b = 50
    let c = a + b 
    return c 
}

let output =  noParam()
console.log(output);

// with parameter 

let products = ['name','laptop', 'price' ,'50000Bdt', 'qty' , 50];

let withParam = (request) => {
    for(let request of products){
        console.log(request);
    }
}

let req = withParam()
console.log(req);