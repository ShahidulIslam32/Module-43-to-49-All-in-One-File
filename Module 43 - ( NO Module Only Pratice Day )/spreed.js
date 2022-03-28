
let products = [
    {name: 'laptop', price: 80000, brand: 'lenovo', model: 'L20'},
    {name: 'mobile', price: 8000, brand: 'Iphone', model: '12 pro max'},
    {name: 'desktop', price: 40000, brand: 'Dell', model: 'DE40'},
    {name: 'headphone', price: 800, brand: 'lenovo', model: 'NH10'},
    {name: 'watch', price: 400, brand: 'HP', model: 'HW50'},
]

products.forEach(element => {
    //console.log(element);
});


let addnew =   {name: 'computer', price: 40000, brand: 'HP', model: 'H50'};
let addnewTw = {name: 'sound system', price: 1900, brand: 'golden', model: 'U1OC'};
let short = products.filter(elem => elem.price < 4000)
let find = products.find(finding => finding.brand == 'lenovo')
console.log(find);
