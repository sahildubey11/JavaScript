function discountcal(discount){
    return function(price){
        return price - price*(discount/100);
    };
}

let ten = discountcal(10);
let twenty = discountcal(20);
let thirty = discountcal(30);
console.log(ten(1000));